const countBs = (word) =>{
    let counter =0;
    for( let i = word.length;i>=0; i--){
        if(word[i] === "B"){
            counter += 1;
        }
    }
    return counter;
}

console.log(countBs("BBSB"))

const countChar = (word, param) =>{
    let counter =0;
    for( let i = word.length;i>=0; i--){
        if(word[i] === param){
            counter += 1;
        }
    }
    return counter;
}

console.log(countChar("kakkerlakkk", "k"))