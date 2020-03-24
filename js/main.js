function Calculate()
{
  dayjs.extend(window.dayjs_plugin_customParseFormat);

  const StartDateTime = dayjs(document.getElementById('start').value,"DD/MM/YYYY hh:mm");
  const EndDateTime = dayjs(document.getElementById('end').value,"DD/MM/YYYY hh:mm");
  const OffsetTime = dayjs(document.getElementById('offset').value,"hh:mm");
  const CutoffTime = dayjs("23:59:59","hh:mm");
  console.log(OffsetTime);
  console.log(CutoffTime);

  
  // const CuttoffTime = "01/01/01".concat

  // const OffsetToMidnight = dayjs("00:00");

  // console.log(OffsetToMidnight);


  // const StartWithOffset = StartDateTime.add

  //document.getElementById('FOS').value = Out;
  // console.log(StartDateTime.isValid());
  // console.log(EndDateTime.isValid());
  // console.log(StartDateTime);
  // console.log(EndDateTime);

  

  // let dayone = 
  // console.log(dayjs());

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