import {zeroFill, parseDate} from './helpers';

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
}

const DateToJulian = (simple) => {
  const jdedate = tojulian(simple);
  if(jdedate == 'Invalid Date') {
      return 'Invalid Date';
  } else if (jdedate == 'Invalid Date for JDE') {
      return 'JDE dates can range from year 1900 to 2899 only.';
  }
  return jdedate;
}

export default DateToJulian;