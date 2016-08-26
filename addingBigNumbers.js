// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example

// add("123", "321"); -> "444"
// add("11", "99"); -> "110"
// Notes

// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

function add(a, b) {

  var count = 0;

  if(a.length >= b.length){
    var arr = a.split("").map(Number);
    var arr2 = b.split("").map(Number);
  }
  
  else{
    var arr = b.split("").map(Number);
    var arr2 = a.split("").map(Number);
  }
  
  if(arr.length >= arr2.length){
    for(var i = arr.length-1; i >= 0; i--){
      var c = arr[i] + arr2[arr2.length-1];
      var d = c.toString().split("").map(Number);
      if(arr2.length){ 
        if(i != 0 && c > 9){
          arr[i] = d[d.length-1];
          arr2.pop();
          arr[i-1] += 1;
        }    
        else{
          arr[i] = c;
          arr2.pop();
        } 
      }

      // below is to account for scenario where 999999 + 1 should = 1000000

      if(arr[i] == 10 && i != 0){
        arr[i] = 0;
        arr[i-1] += 1;
      }
    }
  }
  return arr.join("");
}