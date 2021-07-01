const numbers = [1, 2, 3, 4, 5, 10, 13, 14];

// using a for loop
let answer1;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10){
    answer1 = numbers[i];
    break;
  }
}

console.log(answer1); // 13

// using find
const answer = numbers.find( number => number > 10);

console.log(answer);

//-----------------------Example 2:----------------------//
var users = [
 { loginName: 'Howard' },
 { loginName: 'Robin' },
 { loginName: 'Fred' },
 { loginName: 'Robin' }
];

var user = users.find(function(user){
 return user.loginName === 'Robin';
});

console.log(user);