const numbers = [1, 2, 3, 4, 5];

let isLessThanTen1 = true;

for (let i = 0; i < numbers.length; i++){
  if(numbers[i] >= 10) {
    isLessThanTen1 = false;
    break;
  }
}

console.log(isLessThanTen1); // true

let lessThanTen = number => number < 10;

// every helper
let isLessthan10 = numbers.every(lessThanTen); 

console.log(isLessthan10); 