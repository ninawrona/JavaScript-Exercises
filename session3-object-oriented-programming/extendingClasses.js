


class Person {
    #name;
    #age;
    constructor(name, age){
        this.#name = name;
        this.#age = age;
    }
     getName() {return this.#name};
     setName (newName) {this.#name = newName};
     getAge() {return this.#age};
     setAge(newAge) {this.#age = newAge};
     toString() {return `Name: ${this.#name} Age: ${this.#age}`};
     equals(Person) {
       return Person.getAge() === this.#age && Person.getName() ===  this.#name;
    }
}

class Employee extends Person{
    #salary;
    constructor({name, age, salary}){
        super(name, age);
        this.#salary = salary;
    }
    
     getSalary() {return this.#salary};
     setSalary(newSalary) {this.#salary = newSalary};
     toString () {return `${super.toString()}, Salary: ${this.#salary}`};
    equals(Employee) {
         return employee.equals(Employee) && Employee.getSalary() === this.#salary;
     }
}


const santa = new Employee({ name: "Santa Clause", age: 1752, salary: 0 })
console.log(santa.toString())
// → Name: Santa Clause, Age: 1752, Salary: 0