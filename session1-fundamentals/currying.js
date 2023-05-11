

//Currying a function means to convert a function of N arity into N functions of arity 1. In other words, 
//it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.

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

console.log(rangeFrom3To(3))
// → [3]
console.log(rangeFrom3To(8))
// → [3,4,5,6,7,8]
console.log(rangeFrom7To(9))
// → [7,8,9]