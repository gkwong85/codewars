Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters that 
occur more than once in the given string. The given string can be assumed to contain only uppercase
and lowercase alphabets.

Example:

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabbcdeB" -> 2 # 'a' and 'b'
"indivisibility" -> 1 # 'i'
"Indivisibilities" -> 2 # 'i' and 's'

function duplicateCount(text){
  var text2 = text.toLowerCase();
  var check = [];
  var check2 = 0;
  
  for(var i=0; i<text2.length; i++){
    for(var j=i+1; j<text2.length; j++){
      if(text2[i] == text2[j] && check.length == 0){
        check.push(text2[j]);
      }
      else if(text2[i] == text2[j]){
        check2 = 0;
        for(var k=0; k<check.length; k++){
          if(text2[j] == check[k]){
            check2++;
          }
        }
        if(check2 == 0){
          check.push(text2[j]);
        }
      }
    }
  }
  return check.length;
}