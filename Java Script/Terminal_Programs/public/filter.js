/* Get male or female names from the array using filter */
var genderNames = [
 { name: 'Howard', gender: 'male' },
 { name: 'Lisa', gender: 'female' },
 { name: 'Ronnie', gender: 'male' },
 { name: 'Robin', gender: 'female' },
 { name: 'Gary', gender: 'male'}
];

var filterGender = genderNames.filter(function(name) {
 return name.gender === 'male';
});

console.log(filterGender);

//---------------Example 2:---------------------//
const numbers = [1, 2, 3, 4, 5, 13, 14, 21, 20];

// using a for loop
const filtered1 = [];

for (let i = 0; i < numbers.length; i++){
  if (numbers[i] % 2 === 0) {
    filtered1.push(numbers[i])
  }
}

console.log(filtered1); // [2, 4, 14, 20]

// using filter 
const filtered = numbers.filter( number => {
  if (number % 2 === 0){
    return true;
  }
});

console.log(filtered);