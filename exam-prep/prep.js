const person = {
    name: "Nina",
    sayName: function(){
        console.log(this.name)
    }
}

const call = person.sayName.bind(person)
call();