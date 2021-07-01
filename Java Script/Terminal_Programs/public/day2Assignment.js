/**
 * 
 */

class Employee{
	
	// constructor
	constructor(empname, age, gender, deptname, designation){
		this.empname = empname;
		this.age = age;
		this.gender = gender;
		this.deptname =  deptname;
		this.designation = designation;
	}
	
	
	// getters
	get getEmpName(){
		return this.empname;
	}
	
	get getAge(){
		return this.age;
	}
	
	get getgender(){
		return this.gender;
	}
	
	get getDeptName(){
		return this.deptname;
	}
	
	get getDesignation(){
		return this.designation;
	}
	
	
	// setters
	set setEmpName(name){
		this.empname = name;
	}
	
	set setAge(age){
		this.age = age;
	}
	
	set setGender(gender){
		this.gender = gender;
	}
	
	set setDeptName(name){
		this.name = name;
	}
	
	set setDesignation(desig){
		this.designation = desig;
	}
	
	
	printDetails(){
 const info = `Name: ${this.empname}
Age : ${this.age}
Gender : ${this.gender}
Department: ${this.deptname}
Designation: ${this.designation}
		`
		console.log(info);
	}
	
	static empDesig(emp){
		let i=1;
		for(var e of emp){
			console.log(`Employee ${i++}:-
			Name: ${e.empname}, 
			Department: ${e.deptname}
			`);
			
		}
	}
	
}

const emp1 = new Employee("John Cena", 56, "Male", "HR", "Associate");
const emp2 = new Employee("James Cena", 34, "Male", "Operations", "Manager");

console.log(emp1.getDesignation);
emp2.setAge  = 38;
console.log(emp2.getAge);
emp1.printDetails();

empArr = [emp1, emp2];
Employee.empDesig(empArr);
 