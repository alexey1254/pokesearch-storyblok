<template>
    <StoryblokComponent 
v-if="story" 
:blok="story.content">

</StoryblokComponent>
</template>



<script setup>
const story = await useStoryblok(
    'home', { version: "draft"})
</script>