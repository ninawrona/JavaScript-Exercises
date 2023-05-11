// For the next exercises you will need to place the scripts.js file next to your solutions and run your solutions using node.js. 
// This file contains a SCRIPTS constant with an array of objects, each of which describes a script:

// {
//     name: "Coptic",
//     ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
//     direction: "ltr",
//     year: -200,
//     living: false,
//     link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
//   }

// Write a function that takes an array of scripts as input and returns the oldest script that is not dead.

require("./scripts.js")

// my solution

function oldestLivingScript(scripts) {
    return scripts.filter(({living}) => living === true).map(scripts => scripts.name);
}

// teacher solution

function oldestLivingScript(scripts) {
    return scripts.filter(s => s.living).reduce((res, s) => (res.year < s.year ? res : s))
}

console.log(oldestLivingScript(SCRIPTS))
// → [ "Adlam", "Arabic", "Imperial Aramaic", ... ]