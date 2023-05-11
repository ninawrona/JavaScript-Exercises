const range = (a, b) =>{
    let array = [];
    for(let i = a; i<=b; i++){
        array.push(i);
    }
    console.log(array)
}

console.log(range(1, 10))

const range2 = (a, b, c) =>{
    let array = [];
    for(let i = a; i<=b; i+=c){
        array.push(i);
    
    }
    console.log(array)
}

console.log(range2(1, 10, 2))