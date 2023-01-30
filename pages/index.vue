<template>
    <StoryblokComponent 
v-if="story" 
:blok="story.content">

</StoryblokComponent>
<pre>{{ story.content }}</pre>
</template>



<script setup>
const story = await useStoryblok(
    'home', { version: "draft"})

    
</script>

