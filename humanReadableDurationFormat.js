// Your task in order to complete this Kata is to write a function which formats a duration, given
// as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise,
// the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// formatDuration(62)    // returns "1 minute and 2 seconds"
// formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
// Note that spaces are important.

// Detailed rules

// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive
// integer and one of the valid units of time, separated by a space. The unit of time is used in plural
// if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is
// separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second
// and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds
// and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is
// not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61
// seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must
// not be greater than any valid more significant unit of time.

// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

function formatDuration(seconds) {
  
  var arr = [];
  var str = "";
    
  function plural(number){
    if(number > 1){
      return 's';
    }
    else{
      return "";
    }
  }
  
  if(seconds === 0){
    return "now";
  }
  else{
    var years = Math.floor(seconds / (365*24*60*60));
    var days = Math.floor(seconds % (365*24*60*60) / (24*60*60));
    var hours = Math.floor(seconds % (365*24*60*60) % (24*60*60) / (60*60));
    var minutes = Math.floor(seconds % (365*24*60*60) % (24*60*60) % (60*60) / 60);
    seconds = seconds - (365*24*60*60)*years - (24*60*60)*days - (60*60)*hours - 60*minutes
    var y = years + " year" + plural(years);
    var d = days + " day" + plural(days);
    var h = hours + " hour" + plural(hours);
    var m = minutes + " minute" + plural(minutes);
    var s = seconds + " second" + plural(seconds);
    if(years === 0){y = "";}else{arr.push(y);}
    if(days === 0){d = "";}else{arr.push(d);}
    if(hours === 0){h = "";}else{arr.push(h);}
    if(minutes === 0){m = "";}else{arr.push(m);}
    if(seconds === 0){s = "";}else{arr.push(s);}

    if(arr.length > 1){
      while(arr.length){
        if(arr.length > 2){
          str += arr[0] + ", ";
        }
        else if(arr.length != 1){
          str += arr[0] + " ";
        }
        else{
          str += "and " + arr[0];
        }
        arr.shift();
      }  
      return str;
    }
    else{
      return arr[0];
    }    
  }
}