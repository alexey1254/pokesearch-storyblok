<template>
    <input @keyup.enter="click" class="form-control me-2" type="input" placeholder="Id / nombre pokemon" v-model="pokemonID"  aria-label="Buscar">
    <button @click="click" id="buscar" class="btn btn-outline-success" type="button">Buscar</button>
</template>

<script setup>
const pokemonID = ref();

const click = () => {
    return pokemonID.value;
}

export function click


</script>