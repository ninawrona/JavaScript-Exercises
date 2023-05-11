

function deepEqual (obj1, obj2) {
    if( typeof(obj1)===typeof(obj2) && obj1 != null && obj2 != null) {

       let array1 = Object.keys(obj1);
       let array2= Object.keys(obj2);

       let IsLength = array1.length === array2.length;
       let areTheSameKeys = array1.every((element, index) => element === array2[index]); 

       values1 = Object.values(obj1);
       values2 = Object.values(obj2);

       let areTheSameValues = JSON.stringify(values1) === JSON.stringify(values2);

       return IsLength && areTheSameKeys && areTheSameValues;
    }
    return false;
}



let obj = { here: { is: "an" }, object: 2 }
console.log(deepEqual(obj, obj))
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }))
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }))
// → true