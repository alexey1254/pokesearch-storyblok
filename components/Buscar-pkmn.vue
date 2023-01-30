<template>
    <div class="d-flex justify-content-center mt-1 mb-3">
        <input @keyup.enter="click" 
        style="width:300px" 
        class="me-2 form-control" 
        type="input" 
        placeholder="Id / nombre pokemon" 
        v-model="usrInput"
        aria-label="Buscar">

        <button 
        @click="click" 
        id="buscar" 
        class="btn btn-outline-success" 
        type="button">Buscar</button>
    </div>

    <div class="container-fluid mt-3 d-flex align-items-center justify-content-center vh-90">
        <div class="row">
            <div class="col">
                <div v-if="Object.entries(pokemon).length <= 0">
                    <h3>Introduce el pokemon a buscar</h3>
                </div>
                <div v-else class="card mt-3 d-inline-flex justify-content-center shadow-lg p-3 mb-5 bg-white rounded" style="width: 18rem;">
                    <h3>{{ pokemon.name }}</h3>
                    <img :src="pokemon.imgDefault">
                    <p>
                        {{ pokemon.txt.es }}
                    </p>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
let pokemon = {};



const usrInput = ref();

// Funciones:
async function click() {
    pokemon = await search();
    console.log(pokemon)
}

//Busca en el idioma indicado una pequeña descripcion del pokemon
async function searcDesc(language, pkmnText) {
    for (const key in pkmnText.flavor_text_entries) {
        if (Object.hasOwnProperty.call(pkmnText.flavor_text_entries, key)) {
            if(pkmnText.flavor_text_entries[key].language.name == language) {
                return pkmnText.flavor_text_entries[key].flavor_text;
            }
        }
    }
}

// Busca el pokemon y devuelve un objeto pokemon
async function search() {
        // Primer fetch para buscar los datos del pokemon
    try {
        const { data, error } = await useFetch(`https://pokeapi.co/api/v2/pokemon/${usrInput.value}`)
        let pkmnData = data._rawValue;
        console.log(error)
        // Devolvemos los datos del pokemon ordenadamente
        return {
            id: pkmnData.id,
            name: pkmnData.name,
            imgDefault: pkmnData.sprites.front_default,
            imgShiny: pkmnData.sprites.front_shiny,
            txt: await secondFetch(pkmnData.id)
        }

    } catch (error) {
        console.log(error)
    }
}

    // Segundo fetch para buscar un texto del pokemon, devuelve la descripcion en español e inglés
async function secondFetch(id) {
    try {
        const {data} = await useFetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
        let pkmnText = data._rawValue;

        return {
            es: await searcDesc("es", pkmnText),
            en: await searcDesc("en", pkmnText)
        } 
    } catch (error){
        console.log(error)
    }
}

</script>