//Exercise 1
//what will be printed out in the console?

var num = 10;

console.log(num == "10")

console.log(num === "10")

//Exercise 2
//what will be printed out in the console.
//Is this a higher order function?

function range(a){
    return function (b){
        let array = [];
    for(let i = a; i<=b; i++){
        array.push(i);
    }
    console.log(array)
    }
}


let rangeFrom3To = range(3)
let rangeFrom7To = range(7)

//a
console.log(rangeFrom3To(3))
//b
console.log(rangeFrom3To(8))
//c
console.log(rangeFrom7To(9))

//Exercise 3
//Is this pure?

var data = [1, 2, 3, 4]

function func1(mydata){
    return mydata.map(val => val*2);
}

func1(data);

//Exercise 4
//Explain what Person.prototype.nationality(...) do.
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  
  Person.prototype.nationality = "English";

  //Exercise 5
  //What are these functions returning after execution?

  function fool1(){
    return {
        bar: "hello"
    };
  }

  function fool2(){
    return 
    {
        bar: "hello"
    };
  }

  //Exercise 6
  //what will be printed out in the console

  let var1
  console.log(typeof var1)

  let var2 = null
  console.log(typeof var2)

  //Exercise 7
  //What is going to be displayed on the console>

  const xhr = new XMLHttpRequest()

  function getPokemon(pokemon){
    if (pokemon === ""){
        return;
    }
    xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/" + pokemon)
    xhr.onload = () => {
        if (xhr.status == 200) {
        pokeData = JSON.parse(xhr.responseText);
        
        console.log(pokeData.name)

    }
    }
  }

  getPokemon(bulbasaur)

  //Exercise 8
  //What will be returned by the function after code execution


  function printTotalWeight() {
    const responses = Promise.all([
    getPokemon("pikachu"),
    getPokemon("bulbasaur"),
    getPokemon("charmander"),
    getPokemon("squirtle"),
    getPokemon("butterfree"),
    getPokemon("pidgeotto"),
    ])

    return responses;
}

    printTotalWeight()


    //Exercise 9
    //Is this code going to execute?
    foo()
    function foo(){
        console.log("hi there")
    }

    //How about this?
    goo()
    const goo = function(){
        console.log("hi there")
    }

    //Exercise 10
    //what is going to be printed out in the console
    const person = {
        name: "Nina",
        sayName: function(){
            console.log(this.name)
        }
    }

    const call = person.sayName
    call();

    //Exercise 11
    //Typescript
    //Is this a valid syntax? What does it mean?

    function func2(arg1:String, arg2?:Number){
    }


    //Exercise 12 - TYPESCRIPT
    let discount = function (price: number, rate: number = 0.50) {
        return price * rate;
        }
        discount(500); 
        discount(500, 1); 