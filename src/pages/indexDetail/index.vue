<template>

<div  v-html="markerDownHTML">

</div>

</template>

<script setup>
import { ref } from 'vue';
import {marked} from 'marked'

let markerDownHTML = ref('')

markerDownHTML.value = marked.parse('# 这是marker down 解析')

</script>