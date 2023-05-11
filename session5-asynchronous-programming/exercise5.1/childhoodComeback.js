
const xhr = new XMLHttpRequest()


function getPokemon(pokemon){
    if (pokemon === ""){
        return;
    }
xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/" + pokemon)
xhr.onload = () => {
    if (xhr.status == 200) {
    pokeData = JSON.parse(xhr.responseText);
    document.querySelector("#message").innerText = ""
    document.querySelector("#name").innerText = pokeData.name;
    document.querySelector("#image").src = pokeData.sprites.front_default;
    document.querySelector("#id").innerText = pokeData.id;

    const primaryType = pokeData.types[0].type.name
    const secondaryType = pokeData.types[1]?.type.name
    document.querySelector("#type").innerText = secondaryType ? `${primaryType}/${secondaryType}` : primaryType
    }
    else{
        displayError("Response was not OK!")
    }
}
xhr.onerror = () => console.log("Network Error!")
xhr.send()
}

function displayError(message) {
    document.querySelector("#message").innerText = message
    document.querySelector("#id").innerText = ""
    document.querySelector("#name").innerText = ""
    document.querySelector("img").src = ""
    document.querySelector("#type").innerText = ""
}
