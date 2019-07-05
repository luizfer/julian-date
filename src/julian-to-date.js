import {dateFromDay, leapYear, zeroFill, parseDate} from './helpers';

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
}
  
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
}

export default JulianToDate;