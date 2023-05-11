

async function getPokemon(pokemon){
    if (pokemon === ""){
        return;
    }
try{
    //await fakeFetch is awaiting a function that returns a promise.
    
    const pokeData = await fakeFetch("https://pokeapi.co/api/v2/pokemon/" + pokemon);

    document.querySelector("#message").innerText = ""
document.querySelector("#name").innerText = pokeData.name;
document.querySelector("#image").src = pokeData.sprites.front_default;
document.querySelector("#id").innerText = pokeData.id;

const primaryType = pokeData.types[0].type.name
const secondaryType = pokeData.types[1]?.type.name
document.querySelector("#type").innerText = secondaryType ? `${primaryType}/${secondaryType}` : primaryType
}catch(err){
    document.querySelector("#message").innerText = err
    document.querySelector("#id").innerText = ""
    document.querySelector("#name").innerText = ""
    document.querySelector("img").src = ""
    document.querySelector("#type").innerText = ""
}
    
}

//we return a promise for error handling
function fakeFetch(url){
    const myPromise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
            xhr.open("GET", url)
            xhr.onload = () => {

                //this is a part that is relevant for making your own promise
                //resolve is a method that is returned when the positive outcome happens
                //reject is a method that is returned when something goes wrong
                if (xhr.status == 200) {
                    resolve(JSON.parse(xhr.responseText))
                } else {
                    reject(new Error("Response was not OK!"))
                }
                //

            }
            xhr.onerror = () => reject(new Error("Network Error!"))
            xhr.send()
    })

    return myPromise;
}
