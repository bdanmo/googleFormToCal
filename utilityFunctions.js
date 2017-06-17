//receive a number, and if number is < 10, add 0 to the the beginning.
function pad(num) {
    return (num < 10) ? '0' + num.toString() : num.toString();
  }

//receives mm/dd/yyyy and HH:MM AM/PM and returns a complete UTC string
function makeUTCString(date, time) {
  var dateParts = date.split("/");
  var month = dateParts[0] - 1;
  month = pad(month);
  var day = dateParts[1];
  var year = dateParts[2];
  var timeParts = time.split(/[\s:]/);
  var hour = timeParts[0];
  var minute = timeParts[1];
  var ampm = timeParts[2];
  if (ampm === "PM") {hour = parseInt(hour) + 12;};
  hour = pad(hour);
  var dt = new Date(year, month, day, hour, minute);
  return dt.toUTCString();
}
