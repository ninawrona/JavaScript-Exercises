

const arrayToList = (array) =>{
    let list= null;

    for(let i=0; i<array.length; i++){
            list = {value:array[i], rest:list}
    }
    return list;
}

const listToArray = (list) =>{
    let array = []
    for (let node = list; node; node = node.rest) {
        array.push(node.value)
    }
    return array;
}

const prepend = (a, list)=>{
     let newList = {
        value: a,
        rest:list
     }
     return newList;
}

const nth = (list, n) =>{
        if(!list) return undefined
        else if(n==0) return list.value
        else return nth(list.rest, n-1)

}

console.log(arrayToList([10, 20]))
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])))
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)))
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1))
// → 20