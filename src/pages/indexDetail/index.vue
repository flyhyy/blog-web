<template>

<div  v-html="markerDownHTML">

</div>

</template>

<script setup>
import { ref } from 'vue';
import {marked} from 'marked'

let markerDownHTML = ref('')

markerDownHTML.value = marked.parse('# hello world')

</script>