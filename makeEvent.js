
function makeEvent(values) {
  var responseObj = {
    eventName: values['Event Name'][0],
    date: values.Date[0],
    startTime: values.Pickup[0],
    endTime: values.Return[0],
    location: values.Location[0],
    description: values.Notes[0]
  };


  var start = makeUTCString(responseObj.date, responseObj.startTime);
  var end = makeUTCString(responseObj.date, responseObj.endTime);
  Logger.log(start);
  Logger.log(end);

  var calendar = CalendarApp.getCalendarById();//pass your google cal id as an argument to this function
  calendar.createEvent(
    responseObj.eventName.toString(),
    new Date(start),
    new Date(end),
    {
      description: responseObj.description,
      location: responseObj.location
    }
  );
}
