function loop(value, testFunc, updFunc, bodyFunc){

    for(let i = value; testFunc(i); i = updFunc(i)){
        bodyFunc(i);
    }
}

loop(
    3,
    n => n > 0,
    n => n - 1,
    console.log
)
// → 3
// → 2
// → 1