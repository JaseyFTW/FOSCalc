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

  //console.log (england);
  //console.log ("last again");

  for(let i = 0; i < england.length; i++){
    JustDates.push(dayjs(england[i].date,"YYYY-MM-DD").format("DD/MM/YYYY"));
  }
  console.log(JustDates);

  const html = england.map((items)=>{
    
    const [year, month, date] = items.date.split("-");

    return `<li>${date}/${month}/${year} - ${dayjs(new Date(year, month, date)).format("ddd")}, ${items.title}</li>`;
  
  }).reverse().join('');

  ul.innerHTML = html;

}

function Calculate()
{
  const StartDateTime = dayjs(document.getElementById('start').value,"DD/MM/YYYY hh:mm");
  const EndDateTime = dayjs(document.getElementById('end').value,"DD/MM/YYYY hh:mm");
  const OpenCutoffTime = dayjs(document.getElementById('offset').value,"hh:mm");
  const CloseCutoffTime = dayjs(document.getElementById('offset').value,"hh:mm").subtract(1,'minute');

  let NewStartDate
  let NewCloseDate

  if(StartDateTime.isValid()){
    NewStartDate = Day1(StartDateTime, JustDates, OpenCutoffTime, true);
    document.getElementById('startday1').value = NewStartDate.format("ddd, DD/MM/YYYY");;
  }

  if(EndDateTime.isValid()){
    NewCloseDate = Day1(EndDateTime, JustDates, CloseCutoffTime, true);
    document.getElementById('endday1').value = NewCloseDate.format("ddd, DD/MM/YYYY");
  }

  
  if (StartDateTime.isValid() && EndDateTime.isValid()){
    
    if (StartDateTime.isBefore(EndDateTime)){
      
      //const CutoffTime = dayjs("23:59:59","hh:mm").add(1,'minute');
      
      
      
      console.log(NewStartDate);
      console.log(NewCloseDate);

      let FOSDays = Networkdays(NewStartDate, NewCloseDate, JustDates, 1);
      console.log(FOSDays);
      
      document.getElementById('FOS').value = FOSDays;


    } else{
      document.getElementById('FOS').value = "End can not be before start";
    }

  } else{
    document.getElementById('FOS').value = "";
  }

}

function Networkdays(DateFrom,DateTo,BankHolidays,StartCount){

  counter = StartCount;

  while (DateFrom.format("DD/MM/YYYY") !== DateTo.format("DD/MM/YYYY")){
    if (DateFrom.get('day') !== 0 && DateFrom.get('day') !== 6 && !JustDates.includes(DateFrom.format("DD/MM/YYYY"))){
      counter++;
    }
    DateFrom = DateFrom.add(1,'day');
    console.log(DateFrom.format("DD/MM/YYYY"));
  }

  return counter;

}

function Day1(DateTime,BankHolidays,CutoffTime,ExcludeWeekends){

  const Midnight = dayjs("23:59:59","hh:mm").add(1,'minute');
  const OffsetMinutesToMidnight = Midnight.diff(CutoffTime,'minute');
  const StartDateTimeWithOffset = DateTime.add(OffsetMinutesToMidnight,'minute');
  let NewStartDate = StartDateTimeWithOffset.startOf('day');
  
  while (NewStartDate.get('day') == 0 || NewStartDate.get('day') == 6 || JustDates.includes(NewStartDate.format("DD/MM/YYYY"))){
    NewStartDate = NewStartDate.add(1,'day');
  }

  console.log(NewStartDate.format("DD/MM/YYYY"))
  return NewStartDate;

}

  //Work out if its a working day, if not iterate through until it does

  
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


//}



