
let obj = { one: true, two: true, hasOwnProperty: true }

// An object’s hasOwnProperty can be used as a more robust alternative to the in operator when you want to ignore the prototype’s properties.
console.log(Object.prototype.hasOwnProperty.call(obj, "one"));
// → true