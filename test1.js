function calculateAge() {
    // Your existing age calculation logic
    // ...
    //calculate age on days basis.
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

// var dob = promt("Enter your Date of Birth in YYYY-MM-DD format");
var dob = "1998-08-31";
dob = new Date(dob);

var birthDate = dob.getDate();
var birthMonth = dob.getMonth() + 1; // Add 1 to get the human-readable month
var birthYear = dob.getFullYear();

// var birthTime = promt("Enter the time in 24 hour format as HH:MM:SS format");
var birthTime = "08:30:00";
birthTime = birthTime.split(":");
var birthHour = parseInt(birthTime[0]);
var birthMinute = parseInt(birthTime[1]);
var birthSecond = parseInt(birthTime[2]);

// convert into days
// count leap years
var countLeap=0;
    for(let i= birthYear;i< todayYear; i++)
     if(i % 4 == 0 && (i % 100 != 0 || i % 400 == 0))
        {
            countLeap++;
        }
// month calculate
var mon = [31,28,31,30,31,30,31,31,30,31,30,31];
var monleap = [31,29,31,30,31,30,31,31,30,31,30,31];

// count days 
var countDay=0
if(birthYear%4==0){
    for(let j=birthDate; j<monleap[birthMonth-1];j++)
    {
        countDay++;
    }
    for(let k= birthMonth+1; k<monleap.length; k++){
        countDay += mon[k];
    }
}
else{
    for(let n=birthDate; n<mon[birthMonth-1];n++)
    {
        countDay++;
    }
    for(let p= birthMonth+1; p<mon.length; p++){
        countDay += mon[p];
    }
}

if(birthYear%4==0){
   
    for(let l= 0 ; l<todayMonth; l++){
        countDay += monleap[l];
    }
}
else{
    
    for(let m= 0 ; m<todayMonth; m++){
        countDay += mon[m];
    }
}

var numberOfDays= ( countDay+ (todayYear-birthYear-1)*365 + countLeap + todayDate);
// console.log(numberOfDays);
console.log(numberOfDays);
//time calculation 24 hrs format


     var numberOfSecond = seconds- birthSecond;
    if(numberOfSecond<0){
        numberOfSecond = numberOfSecond+ 60;
        birthMinute--;
    }
    var numberOfMinute = minutes- birthMinute;
    if(numberOfMinute<0){
        numberOfMinute = numberOfMinute+ 60;
        birthHour--;
    }
    var numberOfHour = hours- birthHour;
    if(numberOfHour<0){
        numberOfHour = numberOfHour+ 24;
        numberOfDays--;
    }
    // console.log(`${numberOfHour}:${numberOfMinute}:${numberOfSecond}`);
    // now output

    console.log(`${numberOfHour}:${numberOfMinute}:${numberOfSecond}`);// time
    var numberOfYears = Math.floor(numberOfDays/365.25);
    numberOfDays = Math.floor(numberOfDays%365.25);
    // console.log(numberOfDays);
    var numberOfMonths= Math.floor(numberOfDays/30);
    numberOfDays = numberOfDays % 30;
    console.log(`${numberOfYears} years, ${numberOfMonths} months and ${numberOfDays} days`);



    // Display the calculated age on the watch
    var ageText = `${numberOfYears} years, ${numberOfMonths} months and ${numberOfDays} days`;
    
}

// Initial calculation
calculateAge();


setInterval(calculateAge, 1000); // 1000 milliseconds = 1 second

  
