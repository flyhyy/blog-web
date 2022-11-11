<template>
  <el-backtop  target=".app-main" :right="20" :bottom="100" />

  <el-container class="app-container">
    <el-aside>
      <Aside></Aside>
    </el-aside>
    <el-container>
      <el-header class="border-bottom"> 
        <Header ></Header>  
      </el-header>
      <el-main class="app-main">
        <router-view v-slot="{ Component, route }">
          <transition :name="'fade'" mode="out-in">
            <keep-alive>
              <component
                :is="Component"
                :key=" route.path"
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
