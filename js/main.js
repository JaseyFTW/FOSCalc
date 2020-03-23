function Calculate()
{
  const nowCurrDate = new Date("01/01/2020 12:00:00");
  const timeOffset = new Date("07:00:00");

  const answer = new Date(nowCurrDate.valueOf() + timeOffset.valueOf());

  console.log(Date(answer));

  var StartDateTime = document.getElementById('start').value;
  var EndDateTime = document.getElementById('end').value;
  var Out = parseInt(StartDateTime) + parseInt(EndDateTime);

  document.getElementById('FOS').value = Out;

  console.log(Out);

  // document.getElementById('FOS').value

  // Day.js
  // const dayjs = require('dayjs');
  // const from    = dayjs(iso)
  // const to      = from.add(1, 'year').subtract(6, 'months')
  // const format  = 'YYYY-MM-DD [at] HH:mm'
  // const fromStr = from.format(format)
  // const toStr   = to.format(format)
  // const str     = `From ${fromStr} to ${toStr}`
  // console.log(str) // > From 2011-10-11 at 13:00 to 2012-04-11 at 13:00

}