const createPerson = (name, age) => {
    const getName = () => {return name};
    const setName = (newName) => {name = newName};
    const getAge = () => {return age};
    const setAge = (newAge) => {age = newAge};
    const toString = () => `Name: ${name} Age: ${age}`;
    const equals = (Person) => {
       return Person.getAge() === age && Person.getName() === name;
    }

    return {getName, setAge, setName, getAge, toString}
}

const createEmployee = ({name, age, salary}) => {
    const employee = createPerson(name, age);
    
    const getSalary = () => {return salary};
    const setSalary = (newSalary) => {salary = newSalary};
    const toString = () => `${employee.toString()}, Salary: ${salary}`;
     const equals = (Employee) => {
         return employee.equals(Employee) && Employee.getSalary() === salary;
     }

    return { ...employee, getSalary, setSalary, toString}
}

const santa = createEmployee({ name: "Santa Clause", age: 1752, salary: 0 })

console.log(santa.toString())
// → Name: Santa Clause, Age: 1752, Salary: 0