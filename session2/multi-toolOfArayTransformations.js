// Use filter and map to write a function that takes an array of scripts as input 
// and returns an array with the names of the scripts with a right to left directionality.

// Since reduce can be used to express any array transformation, rewrite the function using it instead of filter and map.
// Reduce() explained - https://www.youtube.com/watch?v=s1XVfm5mIuU

require("./scripts.js")

function rtlScriptNames(scripts) {
    return scripts.reduce((arrayDirected, a) => {
        if(a.direction === "rtl"){
            arrayDirected.push(a.name);
            arrayDirected.sort();
        }
    return arrayDirected;
    }, []);
}

//teacher solution

// function rtlScriptNames(scripts) {
//     const rtlScripts = scripts.reduce((res, s) => (s.direction === "rtl" ? [...res, s] : [...res]), [])
//     return rtlScripts.reduce((res, s) => [...res, s.name], [])
// }

console.log(rtlScriptNames(SCRIPTS))
// → [ "Adlam", "Arabic", "Imperial Aramaic", ... ]