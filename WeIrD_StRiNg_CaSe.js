Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string
with all even indexed characters in each word upper cased, and all odd indexed characters in each
word lower cased. The indexing just explained is zero based, so the zero-ith index is even, 
therefore that character should be upper cased.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only
be present if there are multiple words. Words will be separated by a single space(' ').

function toWeirdCase(string){
  
  var array = [];
  var count = 0;
  
  for(var i = 0; i < string.length; i++){
    if(count % 2 == 0){
      array.push(string[i].toUpperCase());
    }
    else{
      array.push(string[i]);
    }
    count++;
    if(string[i] == " "){
      count = 0;
    }
  }
  
  return array.join("");
}