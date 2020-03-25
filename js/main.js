dayjs.extend(window.dayjs_plugin_customParseFormat);
dayjs.extend(window.dayjs_plugin_relativeTime);

// https://medium.com/@nkhilv/how-to-use-the-javascript-fetch-api-to-get-uk-bank-holidays-step-by-step-dbb4357236ff
// https://github.com/nkhil/UK-bank-holidays-using-fetch-API/blob/master/index.html
// https://stackoverflow.com/questions/13869627/unable-to-access-json-property-with-dash
const endpoint = 'https://www.gov.uk/bank-holidays.json';
const ul = document.getElementById('holidays')
            
fetch(endpoint).then((resp) => resp.json()).then((json) => handleDates(json));

let JustDates = [];

function handleDates(data) {
  let bankHolidays = data;
  let england = bankHolidays["england-and-wales"].events;

  console.log (england)

  for(let i = 0; i < england.length; i++){
    JustDates.push(dayjs(england[i].date,"YYYY-MM-DD"));
  }
  console.log(JustDates);
  console.log("woo");

  const html = england.map((items)=>{
    const [year, month, date] = items.date.split("-");

    return `
    <li>${date}/${month}/${year} - ${items.title}</li>
    `;
  
  }).join('');

  ul.innerHTML = html;
}

function Calculate()
{
  const StartDateTime = dayjs(document.getElementById('start').value,"DD/MM/YYYY hh:mm");
  const EndDateTime = dayjs(document.getElementById('end').value,"DD/MM/YYYY hh:mm");
  const OffsetTime = dayjs(document.getElementById('offset').value,"hh:mm");
  const CutoffTime = dayjs("23:59:59","hh:mm").add(1,'minute');
  //console.log(OffsetTime);
  //console.log(CutoffTime);

  const OffsetMinutesToMidnight = CutoffTime.diff(OffsetTime,'minute');
  console.log(OffsetMinutesToMidnight);

  const StartDateTimeWithOffset = StartDateTime.add(OffsetMinutesToMidnight,'minute');
  const NewStartDate = StartDateTimeWithOffset.startOf('day');
  
  //Work out if its a working day, if not iterate through until it does

  console.log(NewStartDate);
  
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