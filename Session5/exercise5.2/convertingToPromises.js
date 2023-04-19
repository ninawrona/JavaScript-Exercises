
function getPokemon(pokemon){

    if (pokemon === ""){
        return;
    }

    const url = "https://pokeapi.co/api/v2/pokemon/" + pokemon;

fetch(url)
.then(response => {

    if (response.ok) {
        return response.json();
    }
    else{
        throw new Error("Response was not OK!")
    }
})
.then(pokeData => {document.querySelector("#message").innerText = ""
document.querySelector("#name").innerText = pokeData.name;
document.querySelector("#image").src = pokeData.sprites.front_default;
document.querySelector("#id").innerText = pokeData.id;

const primaryType = pokeData.types[0].type.name
const secondaryType = pokeData.types[1]?.type.name
document.querySelector("#type").innerText = secondaryType ? `${primaryType}/${secondaryType}` : primaryType
})
.catch(err => {
    document.querySelector("#message").innerText = err
    document.querySelector("#id").innerText = ""
    document.querySelector("#name").innerText = ""
    document.querySelector("img").src = ""
    document.querySelector("#type").innerText = ""
})
}
