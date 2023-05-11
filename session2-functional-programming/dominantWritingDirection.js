// Write a function that computes the dominant writing direction in a string of text.

// The dominant direction is the direction of a majority of the characters that have a script associated with them.
// The characterScript and countBy functions defined in the code below are probably useful here.

require("./scripts.js")

function dominantDirection(text) {
    let counted = countBy(text, char => {
        let script = characterScript(char.codePointAt(0))

        //The conditional operator is the only JavaScript operator that takes three operands. 
        //The operator can have one of two values based on a condition. The syntax is: condition ? val1 : val2
        //If condition is true, the operator has the value of val1. Otherwise it has the value of val2. You can use the conditional operator anywhere you would use a standard operator.
        //For example,
        //const status = age >= 18 ? "adult" : "minor";
        // This statement assigns the value "adult" to the variable status if age is eighteen or more. Otherwise, it assigns the value "minor" to status.

        return script ? script.direction : "none"
    }).filter(({ name }) => name !== "none")

    if (counted.length === 0) return "ltr"

    return counted.reduce((a, b) => (a.count > b.count ? a : b)).name
}

function countBy(items, groupName) {
    let counts = []
    for (let item of items) {
        let name = groupName(item)
        let known = counts.findIndex(c => c.name === name)
        if (known === -1) {
            counts.push({ name, count: 1 })
        } else {
            counts[known].count++
        }
    }
    return counts
}

function characterScript(code) {
    for (let script of SCRIPTS) {
        if (
            script.ranges.some(([from, to]) => {
                return code >= from && code < to
            })
        ) {
            return script
        }
    }
    return null
}

console.log(dominantDirection("Hello!"))
// → ltr
console.log(dominantDirection("Hey, مساء الخير"))
// → rtl