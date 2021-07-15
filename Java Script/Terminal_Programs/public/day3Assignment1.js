/**
 * 
 */

const age =  21;// prompt("Please enter your age");
let percentage = 87;

let p1 = new Promise(function(resolve, reject){
	if(age>18 && age<30){
		resolve("resolved p1");
	}else{
		reject("rejected p1");
	}
});

let p2 = new Promise((resolve, reject)=>{
	if(percentage>50 && percentage<70){
		resolve("resolved p2");
	}else{
		reject("rejected p2");
	}
});

Promise.all([p1,p2])
                    .then(function successValue(result){
	console.log(result);
})
                    .catch(function errorValue(result){
	console.log(reuslt);
})
                    .finally(()=>console.log("we are inside finally block"));



