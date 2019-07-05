const dateFromDay = (year, day) => {
    var date = new Date(year, 0); 
    return new Date(date.setDate(day));
};

const leapYear = (year) => {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
};

const zeroFill = (number, width) => {
    width -= number.toString().length;
    if ( width > 0 ){
        return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
    }
    return number + "";
};
  
const parseDate = (input) => {
    var parts = input.split('-');
    var d = new Date(parts[0], parts[1]-1, parts[2]);
    if (d && (d.getMonth() + 1) == parts[1] && d.getDate() == Number(parts[2])) {
        return d;
    } else 
    
    return 'Invalid Date';
};

const tojulian = (simple) => {
  let d, year, c, yy, ddd;
  if(parseDate(simple) == 'Invalid Date') {
      return 'Invalid Date';
  } else {
      d = parseDate(simple);
  }
  year = d.getFullYear();
  c = Math.floor((year - 1900) / 100);
  if(c < 0 || c > 9) {
      return 'Invalid Date for JDE';
  }
  yy = year % 100;
  let first = new Date(d.getFullYear(), 0, 1);
  ddd = zeroFill(Math.round(((d - first) / 1000 / 60 / 60 / 24) + .5, 0), 3);
  var jdedate;
  if(c == 0) { jdedate = yy+''+ddd; }
  else { jdedate = c+''+yy+''+ddd; }
  jdedate = zeroFill(jdedate, 6);
  
  return jdedate;
};

const DateToJulian = (simple) => {
  const jdedate = tojulian(simple);
  if(jdedate == 'Invalid Date') {
      return 'Invalid Date';
  } else if (jdedate == 'Invalid Date for JDE') {
      return 'JDE dates can range from year 1900 to 2899 only.';
  }
  return jdedate;
};

const todate = (jdestr) => {
  let c, yy, ddd;
  let dd, mm, yyyy;
  let result;
  c = parseInt(jdestr.substr(0,1),10);
  yy = parseInt(jdestr.substr(1,2),10);
  ddd = parseInt(jdestr.substr(3,3),10);
  if((isNaN(c) || isNaN(yy) || isNaN(ddd)) || (c < 0 || yy < 0 || ddd <= 0 || ddd > 366)) {
      return "Invalid JDE Julian Date";
  }
  yyyy = (19 + c) * 100 + yy;
  if(ddd == 366 && !leapYear(yyyy)) {
      return "Invalid JDE Julian Date";
  }
  let simple = dateFromDay(yyyy, ddd);
  dd = simple.getDate();
  mm = simple.getMonth()+1;
  result = dd+"/"+mm+"/"+yyyy;
  if(parseDate(result) == 'Invalid Date') {
      return "Invalid JDE Julian Date";
  }
  return result;
};
  
const JulianToDate = (jdestr) => {
  if(jdestr.length > 6) {
      return 'JDE Julian Date must be 6 digits long.';
  } else if(jdestr.length < 6) {
      jdestr = zeroFill(jdestr, 6);
  }
  const simple = todate(jdestr);
  
  if(simple == 'Invalid JDE Julian Date') {
      return 'Invalid JDE Julian Date';
  }
  
  return simple;
};

export { DateToJulian, JulianToDate };
