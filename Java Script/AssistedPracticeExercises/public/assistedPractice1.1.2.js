/**
 * 
 */
var x = "Declared outside the function";

someFunction();

function someFunction() {
   console.log("Inside the function");
   console.log(x);
}

console.log("Outside the function");
console.log(x);
