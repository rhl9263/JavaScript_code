// calculate the age
// var date = new Date().toLocaleString('en-IN');
var now = new Date();
var options = { timeZone: 'Asia/Kolkata' };
var indianDate = now.toLocaleString('en-IN', options);

console.log('Indian Date and Time:', indianDate);

var todayDay = now.getDay(); // Day of the week (0 for Sunday, 1 for Monday, and so on)
var dayOfWeek = now.toLocaleDateString('en-IN', { weekday: 'long' }); // Full day name

var todayDate = now.getDate();
var todayMonth = now.getMonth() + 1; // Months are zero-indexed, so add 1
var todayYear = now.getFullYear();

var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();

// console.log('Day of the Week:', dayOfWeek);
// console.log('Date:', todayDate);
// console.log('Month:', todayMonth);
// console.log('Year:', todayYear);
// console.log('Time:', `${hours}:${minutes}:${seconds}`);

// var dob = promt("Enter your Date of Birth in YYYY-MM-DD format")
var dob = "1998-08-31";
dob = new Date(dob);

var birthDate = dob.getDate();
var birthMonth = dob.getMonth() + 1; // Add 1 to get the human-readable month
var birthYear = dob.getFullYear();

// console.log('Birth Date:', birthDate);
// console.log('Birth Month:', birthMonth);
// console.log('Birth Year:', birthYear);

// var birthTime = promt("Enter the time in 24 hour format as HH:MM:SS format")
var birthTime = "08:30:00";
birthTime = birthTime.split(":");
var birthHour = parseInt(birthTime[0]);
var birthMinute = parseInt(birthTime[1]);
var birthSecond = parseInt(birthTime[2]);
// console.log(`${birthHour},${birthMinute},${birthSecond}`)

// //calculate age
// var c=0;
// var compareTime = (a,b) =>{
//     if(a>b){
//         return[a-b,c];
//     }
//     else{
//         c=1;
//         return[60+a-b,c];
//     }
// }


// var resultSecond = compareTime(seconds,birthSecond)[0];
// // console.log(resultSecond);
// var resultMinute = compareTime(minutes,birthMinute)[0] - compareTime(seconds,birthSecond)[1];
// // console.log(resultMinute);
// if(compareTime(minutes,birthMinute)[1])
// {var resultHour = compareTime(hours,birthHour)[0] - compareTime(minutes,birthMinute)[1];
// }
// else{
//     var resultHour = compareTime(hours,birthHour)[0];
// }
// // console.log(resultHour);
// var d=0;

// if(todayDate>birthDate ){
//     var resultDate = todayDate - birthDate - compareTime(hours,birthHour)[1];
// }
// else if(birthDate==todayDate && compareTime(hours,birthHour)[1]){
//     var resultDate = todayDate - birthDate + 30 - compareTime(hours,birthHour)[1];
// }
// else if(birthDate==todayDate && compareTime(hours,birthHour)[1]){
//     var resultDate = todayDate - birthDate + 30 - compareTime(hours,birthHour)[1];
// }

// //console.log(resultDate);

// change current date into seconds taking 1900 as reference
var currnentSeconds = (seconds+(minutes*60)+(hours*3600)+(todayDate*3600*24)+(todayMonth*3600*24*30)+((todayYear-1900)*3600*24*30*12));

var birthSeconds = (birthSecond+(birthMinute*60)+(birthHour*3600)+(birthDate*3600*24)+(birthMonth*3600*24*30)+((birthYear-1900)*3600*24*30*12));

var age= currnentSeconds- birthSeconds;
if(age<0){
    console.log(`please enter valid Date of birth `)
}
else{
    var currentYears = Math.floor(age/(3600*24*30*12));
    var remainingSeconds = age%(3600*24*30*12);
    var currentMonth = Math.floor(remainingSeconds/(3600*24*30));
        remainingSeconds = remainingSeconds%(3600*24*30);
    var currentDays = Math.floor(remainingSeconds/(3600*24));
    remainingSeconds = remainingSeconds % (3600 * 24);
    var currentHours = Math.floor(remainingSeconds / 3600);
    remainingSeconds = remainingSeconds % 3600;
    var currentMins = Math.floor(remainingSeconds/60);
    var currentSecs = remainingSeconds%60;

}
//27.12.2023...00:04:00
//31.08.1998....08:30:00
//