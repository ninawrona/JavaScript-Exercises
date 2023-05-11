function alphabeticalOrder(array) {
    let newArr = [];

    for(let i = 0; i< array.length; i++){
        newArr.push(array[i]);
    }

    return newArr.sort();
}

const letters = ["a", "d", "c", "a", "z", "g"]

console.log(alphabeticalOrder(letters))
// → ["a", "a", "c", "d", "g", "z"]
console.log(letters)
// → [ "a", "d", "c", "a", "z", "g"]