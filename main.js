
let requestURL = "https://pokeapi.co/api/v2/pokemon/"

let randInt1 = Math.floor(Math.random() * 1010)
let randInt2 = Math.floor(Math.random() * 1010)

let FirstPokemon = document.getElementById("first_pokemon");
let SecondPokemon = document.getElementById("second_pokemon");

let FirstPokemonImage = document.getElementById("Pokemon1Image")
let SecondPokemonImage = document.getElementById("Pokemon2Image")

let FirstPokemonPower = document.getElementById("first_pokemon_strenght")
let SecondPokemonPower = document.getElementById("second_pokemon_strenght")

let FirstPokemonSpeed = document.getElementById("first_pokemon_speed")
let SecondPokemonSpeed = document.getElementById("second_pokemon_speed")

let FirstPokemonDefense;
let SecondPokemonDefense;

let Pokemon1Attack;
let Pokemon2Attack;

let Results = document.getElementById("Results")


while (randInt1 == randInt2) {
    randInt1 = Math.floor(Math.random() * 1010)
}

let randomPokemon1 = "https://pokeapi.co/api/v2/pokemon/" + randInt1
let randomPokemon2 = "https://pokeapi.co/api/v2/pokemon/" + randInt2


fetch(randomPokemon1)
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        let Pokemon1 = myJson.forms[0].name;
        let Pokemon1Img = myJson.sprites.front_default;
        let Pokemon1Attack = myJson.stats[1].base_stat;
        let Pokemon1Speed =  myJson.stats[5].base_stat;
        FirstPokemon.innerHTML = Pokemon1;
        FirstPokemonImage.src = Pokemon1Img;
        FirstPokemonPower.innerHTML = "Strength: " + Pokemon1Attack
        FirstPokemonSpeed.innerHTML = "Speed: " + Pokemon1Speed
        console.log(myJson);
        return(Pokemon1Attack);
    });

fetch(randomPokemon2)
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        let Pokemon2 = myJson.forms[0].name;
        let Pokemon2Img = myJson.sprites.front_default;
        let Pokemon2Attack = myJson.stats[1].base_stat
        let Pokemon2Speed =  myJson.stats[5].base_stat;
        SecondPokemon.innerHTML = Pokemon2;
        SecondPokemonImage.src = Pokemon2Img;
        SecondPokemonPower.innerHTML = "Strength: " + Pokemon2Attack
        SecondPokemonSpeed.innerHTML = "Speed: " + Pokemon2Speed
        console.log(myJson);
        return(Pokemon2Attack)
    });


if (Pokemon1Attack > Pokemon2Attack) {
    Results.innerHTML = "Pokemon 1 is VICTORIOUS!!!";
}


