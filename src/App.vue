<script setup>
import { computed, ref } from "vue";

const video_id = ref("");
const share_id = ref("");
const url = ref("");
const share_url = computed(() => {
    return `https://vimeo.com/${video_id.value}/${share_id.value}`;
});
const embed_url = computed(() => {
    return `https://player.vimeo.com/video/${video_id.value}?h=${share_id.value}`;
});

const err = ref("");

function processInput(url) {
    try {
        video_id.value = "";
        share_id.value = "";
        err.value = "";

        let urlLocal = new URL(url);
        console.log(urlLocal);

        if (urlLocal.host !== "vimeo.com") {
            throw new Error("URL provided is not Vimeo!!!");
        }

        let pathRoute = urlLocal.pathname.split("/").reverse();

        if (pathRoute.length !== 3) {
            throw new Error("URL provided is malformed!!!");
        }

        video_id.value = pathRoute[1];
        share_id.value = pathRoute[0];
    } catch (error) {
        err.value = error;
    }
}
</script>

<template>
    <h1>Awesome Vimeo URL Generator</h1>

    <input v-model="url" type="url" name="url-input" id="url-input" />

    <button @click="processInput(url)">Generate</button>

    <template v-if="share_id && video_id">
        <h2>Share Link:</h2>
        <a :href="share_url" target="_blank" rel="noopener noreferrer">
            {{ share_url }}
        </a>

        <br />

        <h2>Embed Link:</h2>
        <a :href="embed_url" target="_blank" rel="noopener noreferrer">
            {{ embed_url }}
        </a>

        <iframe :src="embed_url" frameborder="0"></iframe>
    </template>

    <template v-if="err">
        <span>ERROR: {{ err }}</span>
    </template>
</template>

<style scoped>
#url-input {
    width: 100%;
    height: 2rem;
}

button {
    margin: 0;
    border: 0;
    margin-top: 1rem;
    width: 100%;
}
</style>
