
async function getPokemon(pokemon){

    if (pokemon === ""){
        return;
    }
    try{
        const url = "https://pokeapi.co/api/v2/pokemon/" + pokemon;
        const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Response was not OK!");
    }

    let pokeData = await response.json();

    document.querySelector("#message").innerText = "";
    document.querySelector("#name").innerText = pokeData.name;
    document.querySelector("#image").src = pokeData.sprites.front_default;
    document.querySelector("#id").innerText = pokeData.id;

    const primaryType = pokeData.types[0].type.name;
    const secondaryType = pokeData.types[1]?.type.name;
    document.querySelector("#type").innerText = secondaryType ? `${primaryType}/${secondaryType}` : primaryType;

    }catch(err){
    document.querySelector("#message").innerText = err;
    document.querySelector("#id").innerText = "";
    document.querySelector("#name").innerText = "";
    document.querySelector("img").src = "";
    document.querySelector("#type").innerText = "";

    }

    
}
