async function printTotalWeight() {

    const responses = await Promise.all([
    getPokemon("pikachu"),
    getPokemon("bulbasaur"),
    getPokemon("charmander"),
    getPokemon("squirtle"),
    getPokemon("butterfree"),
    getPokemon("pidgeotto"),
])
//"responses" variable is passed and dealt with only AFTER all the promises - getPokemon() - are fulfilled.


//We use map and json to convert the response into JavaScript objects, 
//but since json returns a Promise, we use Promise.all twice - once to retrieve the responses and again to retrieve the 
//list of pokémon from the responses.
    
const promises = responses.map(response => response.json())
const pokemonList = await Promise.all(promises);

//We use reduce to reduce the list of pokémon into their total weight. 

//weight of a pokémon in hectogram(hg), which means you have to divide the result with 10 to get it in kilograms(kg).
const totalWeight = pokemonList.reduce((weightSum, {weight}) => weightSum + weight, 0) / 10

console.log(totalWeight) // → 92.4
}

function getPokemon(name) {
    return fetch("https://pokeapi.co/api/v2/pokemon/" + name)
}

printTotalWeight();