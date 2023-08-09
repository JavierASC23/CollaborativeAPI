
let requestURL = "https://pokeapi.co/api/v2/pokemon/"

let randInt1 = Math.floor(Math.random() * 1010)
let randInt2 = Math.floor(Math.random() * 1010)

let FirstPokemon = document.getElementById("first_pokemon");
let SecondPokemon = document.getElementById("second_pokemon");

let FirstPokemonImage = document.getElementById("Pokemon1Image")
let SecondPokemonImage = document.getElementById("Pokemon2Image")



while(randInt1 == randInt2){
    randInt1 = Math.floor(Math.random() * 1010)
}

let randomPokemon1 ="https://pokeapi.co/api/v2/pokemon/" + randInt1
let randomPokemon2 ="https://pokeapi.co/api/v2/pokemon/" + randInt2


fetch(randomPokemon1)
.then(function(response) {
    return response.json();
})
.then(function(myJson) {
    let Pokemon1 = myJson.forms[0].name;
    let Pokemon1Img = myJson.sprites.front_default;
    FirstPokemon.innerHTML = Pokemon1;
    FirstPokemonImage.src = Pokemon1Img;
    console.log(myJson);
});

fetch(randomPokemon2)
.then(function(response) {
    return response.json();
})
.then(function(myJson) {
    let Pokemon2 = myJson.forms[0].name;
    let Pokemon2Img = myJson.sprites.front_default;
    SecondPokemon.innerHTML = Pokemon2;
    SecondPokemonImage.src = Pokemon2Img;
    console.log(myJson);
});




console.log(randomPokemon1)
console.log(randomPokemon2)


