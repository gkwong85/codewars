// Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
// The first word within the output should be capitalized only if the original word was capitalized.

// Examples:

// returns "theStealthWarrior"
// toCamelCase("the-stealth-warrior") 

// returns "TheStealthWarrior"
// toCamelCase("The_Stealth_Warrior")

function toCamelCase(str){

  for(var i = 0; i < str.length; i++){ 
    if(str[i] == "-" || str[i] == "_"){
      str = str.replace("-", "").replace("_", "");
      str = str.replace(str.charAt(i), str.charAt(i).toUpperCase());
    }
  }
  return str;
}