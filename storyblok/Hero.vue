<script setup>
defineProps({
    blok: Object,

})

definePageMeta({
  layout: false,
});


</script>

<template>
    <div class="hero">
        <div class="container">
            <div class="col">
                <h1>{{ blok.heading }}</h1>
                <h2>{{ blok.subheading }}</h2>
            </div>
            <div class="col">
                <img :src="blok.image.filename" />
            </div>

        </div>
    </div>
</template>

