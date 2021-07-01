const numbers = [1, 2, 3, 4, 5];

// using a for loop
const squared = [];

for (let i = 0; i < numbers.length; i++){
  squared.push(numbers[i] * numbers[i])
}

console.log(squared) // [1, 4, 9, 16, 25]

// using map
const squared1 = numbers.map(number => number * number);
console.log(squared1)

//-----------------Example 2:---------------------//
var numberss = [1,2,3];

var timesTwo = numberss.map(function(number) {
    return number * 2;
});

console.log(timesTwo);