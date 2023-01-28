<template>
    <div class="d-flex justify-content-center mt-1">
        <input @keyup.enter="click" 
        style="width:300px" 
        class="me-2 form-control" 
        type="input" 
        placeholder="Id / nombre pokemon" 
        v-model="pokemonID"
        aria-label="Buscar">

        <button 
        @click="click" 
        id="buscar" 
        class="btn btn-outline-success" 
        type="button">Buscar</button>

    </div>

</template>

<script setup>


</script>