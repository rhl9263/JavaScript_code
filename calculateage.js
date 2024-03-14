function calculateAge(birthDate) {
    var now = new Date();
    var birth = new Date(birthDate);
  
    // Calculate the difference in milliseconds
    var ageInMilliseconds = now - birth;
  
    // Calculate age details
    var ageInSeconds = Math.floor(ageInMilliseconds / 1000);
    var ageInMinutes = Math.floor(ageInSeconds / 60);
    var ageInHours = Math.floor(ageInMinutes / 60);
  
    // Extract remaining minutes and seconds
    var remainingMinutes = ageInMinutes % 60;
    var remainingSeconds = ageInSeconds % 60;
  
    return {
      years: now.getFullYear() - birth.getFullYear(),
      months: now.getMonth() - birth.getMonth(),
      days: now.getDate() - birth.getDate(),
      hours: ageInHours,
      minutes: remainingMinutes,
      seconds: remainingSeconds
    };
  }
  
  // Example usage:
  var birthDate = "1990-01-01"; // Replace with the actual birthdate
  var ageDetails = calculateAge(birthDate);
  
  console.log('Age Details:', ageDetails);
  