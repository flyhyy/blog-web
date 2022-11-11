<template>
  <el-container class="app-container">
    <el-aside>
      <Aside></Aside>
    </el-aside>
    <el-container>
      <el-header class="border-bottom"> 
        <Header ></Header>  
      </el-header>
      <el-main>
        <router-view v-slot="{ Component, route }">
          <transition :name="route.meta.transition || 'fade'" mode="out-in">
            <keep-alive>
              <component
                :is="Component"
                :key="route.meta.usePathKey ? route.path : undefined"
              />
            </keep-alive>
          </transition>
        </router-view>
      </el-main>
      <el-footer class="border-top"> footer </el-footer>
    </el-container>
  </el-container>
</template>

<script setup>
import Aside from "./components/aside/index.vue";
import Header from './components/header/index.vue'
</script>
<style module>
.foo {
  color: #fff;
}
</style>

<style lang="css">
#app {
  height: 100vh;
}
.app-container {
  height: 100%;
}
.border-bottom{
  border-bottom: 1px solid var(--el-border-color);
}
.border-top{
  border-top: 1px solid var(--el-border-color);

}
</style>
