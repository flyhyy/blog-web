<template>
  <el-menu :default-active="defaultActive" class="menu-vertical" router>
    <el-menu-item v-for="(item, index) in menu" :index="item.path" :key="index">
      {{ item.meta.name }}
    </el-menu-item> 
  </el-menu>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
// 使用 ref 声明的 变量 需通过  变量名.value  = val  来赋值
let defaultActive = ref("");
const route = useRoute();
const router = useRouter();
const menu = computed(() => {
  console.log(router.getRoutes());
  return router.getRoutes();
});

watch(
  route,
  (nv, ov) => {
    defaultActive.value = nv.path;
  },
  { deep: true }
);
</script>

<style lang="css">
.menu-vertical {
  height: 100%;
}
</style>
