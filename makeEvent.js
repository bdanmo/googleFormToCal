
function makeEvent(values) {
  var responseObj = {
    name: values['Teacher Name'][0],
    date: values.Date[0],
    pickup: values.Pickup[0],
    dropoff: values.Return[0],
    num: values.Number[0],
    location: values.Room[0],
    activity: values.Activity[0],
    notes: values.Notes[0]
  };


  var start = makeUTCString(responseObj.date, responseObj.pickup);
  var end = makeUTCString(responseObj.date, responseObj.dropoff);
  Logger.log(start);
  Logger.log(end);

  var calendar = CalendarApp.getCalendarById();//insert your google calendar id here
  calendar.createEvent(
    responseObj.name.toString(),
    new Date(start),
    new Date(end),
    {
      description:
      responseObj.num + ' iPads.' +
      ' Activity: ' + responseObj.activity + '.',
      location: responseObj.location,
    }
  );
}
