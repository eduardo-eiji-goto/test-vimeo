<script setup>
import { ref } from "vue";

let video_id = ref("1087183197");
let share_id = ref("af96c600c3");
</script>

<template>
    <a
        :href="`https://vimeo.com/${video_id}/${share_id}`"
        target="_blank"
        rel="noopener noreferrer"
    >
        Share Link
    </a>

    <br />

    <iframe
        :src="`https://player.vimeo.com/video/${video_id}?h=${share_id}`"
        frameborder="0"
    />
</template>

<style scoped></style>
