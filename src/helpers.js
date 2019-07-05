const dateFromDay = (year, day) => {
    var date = new Date(year, 0); 
    return new Date(date.setDate(day));
}

const leapYear = (year) => {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

const zeroFill = (number, width) => {
    width -= number.toString().length;
    if ( width > 0 ){
        return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
    }
    return number + "";
}
  
const parseDate = (input) => {
    var parts = input.split('-');
    var d = new Date(parts[0], parts[1]-1, parts[2]);
    if (d && (d.getMonth() + 1) == parts[1] && d.getDate() == Number(parts[2])) {
        return d;
    } else 
    
    return 'Invalid Date';
}

export {dateFromDay, leapYear, zeroFill, parseDate}