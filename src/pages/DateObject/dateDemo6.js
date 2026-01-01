//Get the Next Weekday
// *  - date.getDay() → 0 (Sun) to 6 (Sat)
// function getNextWeekday(dateStr) {
//   let target_date = new Date(dateStr);
//   const dayNum = target_date.getDay();

//   switch (dayNum) {
//     case 5: //Fri -> Mon
//       target_date.setDate(target_date.getDate() + 3);
//       break;
//     case 6: //Sat -> Mon
//       target_date.setDate(target_date.getDate() + 2);
//       break;
//     default: //Sun-Thu ->next day
//       target_date.setDate(target_date.getDate() + 1);
//   }
//   return target_date.toISOString().split('T')[0];
// }

function getNextWeekday(dateStr) {
  const targetDate = new Date(dateStr);
  const dayNum = targetDate.getDay();
  console.log(`dayNum : ${dayNum}`);
  switch (dayNum) {
    case 5: // Friday → Monday
      targetDate.setDate(targetDate.getDate() + 3);
      break;
    case 6: // Saturday → Monday
      targetDate.setDate(targetDate.getDate() + 2);
      break;
    default: // Mon–Thu → next day
      targetDate.setDate(targetDate.getDate() + 1);
  }

  return targetDate.toISOString().slice(0, 10);
}

//Sun(0), Mon(1), Tue(2), Wed(3), Thu(4), Fri(5), Sat(6)

console.log(getNextWeekday('2023-09-01')); // "2023-09-04" (Friday → Monday)
console.log(getNextWeekday('2023-09-04')); // "2023-09-05" (Monday → Tuesday)
console.log(getNextWeekday('2023-09-08')); // "2023-09-11" (Friday → Monday)
