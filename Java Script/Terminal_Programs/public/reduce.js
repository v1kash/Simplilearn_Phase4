const numbers = [1, 2, 3, 4, 5];

// using a for loop
let sum = 0;

for (let i = 0; i < numbers.length; i++){
  sum += numbers[i];
}

console.log(sum) // 15

// reduce helper
numbers.reduce((sum, number) => sum + number, 0);


