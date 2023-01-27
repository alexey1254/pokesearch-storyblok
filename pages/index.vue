<template>
        <div class="container-fluid mt-3 d-flex align-items-center justify-content-center vh-90">
        <div class="row d-flex align-items-center">
            <div class="col" id="pkmn-cont" >
            <div v-if="Object.entries(pokemonData).length <= 0">
                <div class="card mt-3 d-inline-flex justify-content-center shadow-lg p-3 mb-5 bg-white rounded" style="width: 18rem;">
                    <img src="" class="card-img-top" alt="">
                    <div class="card-body">
                        <h3 class="text-center">{{buscaPokemon}}</h3>
                        <p class="card-text text-center"></p>
                    </div>
                </div>
            </div>
                <div v-else class="card mt-3 d-inline-flex justify-content-center shadow-lg p-3 mb-5 bg-white rounded" style="width: 18rem;">
                    
                    <img v-if="!shinyFlag" :src="pokemonData.sprites.front_default" class="card-img-top" :alt="pokemonData.name">
                    <img v-else :src="pokemonData.sprites.front_shiny" class="card-img-top" :alt="pokemonData.name">
                    
                    <div class="card-body">
                        <h3 class="text-center">{{ pokemonData.name[0].toUpperCase() + pokemonData.name.slice(1) }}</h3>
                        <p class="card-text text-center">{{spanishDesc}}</p>
                    </div>
                    <button @click="shiny" class="btn btn-outline-success" type="button">{{textShiny}}</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>

let pokemonData = {}
let pokemonID = ""
let pokemonPage = {}
let pokemonSpecie = {}
let pokemonImage = ""
let spanishDesc = ""
let textShiny ="Ver shiny"
let buscaPokemon ="Busca un pokemon"
let shinyFlag =false

async function searchPokemon() {
try {
    const pokemonToFind = await fetch(`${pokeapi}/${this.pokemonID}`);
    const pokemon = await pokemonToFind.json();
    this.pokemonData = pokemon;
    
    return pokemon;
} catch (error) {
    console.log("Pokemon no encontrado");
    this.buscaPokemon="Pokemon no encontrado";
}
}

async function pokemonSpecies() {
try {
    const specie = await fetch(`${pokeapi}-species/${this.pokemonID}`);
    const specieJson = await specie.json();
    this.pokemonSpecie = specieJson;
} catch (error) {
    
}
}

async function click() {
this.pokemonID = this.pokemonID.toLowerCase();
await this.pokemonSpecies()
await this.searchPokemon()
this.searcDescSpanish()
}


function searcDescSpanish() {
for (const key in this.pokemonSpecie.flavor_text_entries) {
    if (Object.hasOwnProperty.call(this.pokemonSpecie.flavor_text_entries, key)) {
    if(this.pokemonSpecie.flavor_text_entries[key].language.name == "es") {
        this.spanishDesc = this.pokemonSpecie.flavor_text_entries[key].flavor_text;
        break;
    }
    }
}
}

function imgPokemon(src) {
this.pokemonImage = src;
}

function shiny() {
    if(this.shinyFlag) {
        this.textShiny = "Ver shiny";
        this.shinyFlag = false;
    } else if(!this.shinyFlag){
        this.textShiny = "Ver normal";
        this.shinyFlag = true;
    }
}

</script>