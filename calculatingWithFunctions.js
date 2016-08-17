This time we want to write calculations using functions and get the results. Here are some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand

function evaluate(num, func){
   if(func === undefined){
     return num;
   }
   else{
     return func(num);
   }
}

function zero(func) {return evaluate(0,func)}
function one(func) {return evaluate(1,func)}
function two(func) {return evaluate(2,func)}
function three(func) {return evaluate(3,func)}
function four(func) {return evaluate(4,func)}
function five(func) {return evaluate(5,func)}
function six(func) {return evaluate(6,func)}
function seven(func) {return evaluate(7,func)}
function eight(func) {return evaluate(8,func)}
function nine(func) {return evaluate(9,func)}

function plus(right) {
  return function(left){
    return left + right;
  }
}
  
function minus(right) {
  return function(left) {
    return left - right;
  }
}

function times(right) {
  return function(left) {
    return left * right;
  }
}

function dividedBy(right) {
  return function(left) {
    return left / right;
  }
}