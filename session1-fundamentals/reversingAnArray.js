
const reverseArray = (array) => {
    let newArray = [];
    for(let i = array.length-1; i>=0; i--){
        newArray.push(array[i]);
    }
    return newArray;
}

//The trick is to swap the first and last elements, then the second and second-to-last, and so on. You can do this by looping over half the length of the array 
//(use Math.floor to round down—you don’t need to touch the middle element in an array with an odd number of elements) and swapping the element at position i with the one
// at position array.length - 1 - i. You can use a local
// binding to briefly hold on to one of the elements, overwrite that one with its mirror image, and then put the value from the local binding in the place where the mirror image used to be.

const reverseArrayInPlace = (array)=>{
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let old = array[i]
        array[i] = array[array.length - 1 - i]
        array[array.length - 1 - i] = old
    }
    return array
}


console.log(reverseArray(["A", "B", "C"]))
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5]
reverseArrayInPlace(arrayValue)
console.log(arrayValue)
// → [5, 4, 3, 2, 1]