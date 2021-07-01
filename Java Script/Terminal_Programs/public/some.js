const numbers = [1, 3, 4, 5];

// using a for loop
let evenNumber = false;

for (let i = 0; i < numbers.length; i++){
  if(numbers[i] % 2 === 0) {
    evenNumber= true;
    break;
  }
}

console.log(evenNumber); // true

// using some
const evenNumber1 = numbers.some( number => {
  if(number % 2 === 0) {
    return true;
  }
});

console.log(evenNumber1)