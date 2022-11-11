<template>
  <el-skeleton />
  <br />
  <el-skeleton style="--el-skeleton-circle-size: 100px">
    <template #template>
      <el-skeleton-item variant="circle" />
    </template>
  </el-skeleton>
</template>


 
<script  setup>
import { useRoute } from 'vue-router';
const route = useRoute()

// route.path
// console.log("打印----> ~ file: index.vue ~ line 14 ~ route.path", route.path)

</script>