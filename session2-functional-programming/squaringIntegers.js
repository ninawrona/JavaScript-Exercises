
//Create a pure function that returns a new array containing the squares of only the positive
//integers when an array of real numbers is passed to it.

function squareList(array) {
    const result = array.filter(p => p>0 && p%1 === 0).map(x => x*x)
    return result;
}

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2])
console.log(squaredIntegers)
// → [25, 9]