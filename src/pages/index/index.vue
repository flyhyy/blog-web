<template>
  <el-row class="height--100-pr" :gutter="12">
    <el-col :span="12" class="height--100-pr over-flow">
      <el-skeleton :loading="loading" animated>
        <template #template>
          <div class="skeleton-item-body">
            <el-skeleton-item variant="image" class="skeleton-item-img" />
            <el-skeleton-item variant="text" />
            <el-skeleton-item variant="text" />
          </div>
        </template>
        <template #default>
          <el-space wrap size="large" class="space">

            <el-card v-for="item in 20 " :key="item" class="card" :body-style="{ padding: '0px', marginBottom: '0px', }"
              shadow="hover" @click="onCard(item)">
              <div class="card-body">
                <el-image class="card-img" :src="url" fit="fill" />
                <div class="card-bottom">
                  <div class="text--style-overflow card-bottom-label" style="font-size: var(--el-font-size-base)">
                    <span class="text--style-color__primary">
                      Vue 被设计为可以自底向上逐层应用层应用层应用层应用
                    </span>
                  </div>
                  <div class="card-bottom--time" style="font-size: var(--el-font-size-extra-small)">
                    <span class="text--style-color__secondary">2020-12-23 10:12:33</span>
                  </div>
                </div>
              </div>
            </el-card>
          </el-space>
        </template>
      </el-skeleton>
    </el-col>
    <el-col :span="12">
      <el-calendar  >
        <template #header="{date}">
            <span>{{date}}</span>
        </template>
        </el-calendar>

    </el-col>
  </el-row>


</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import RouterConfig from "../../router/config";

const route = useRoute();
const router = useRouter();
const loading = ref(true);

const url =
  "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg";

setTimeout(() => {
  loading.value = false;
}, 2000);

function onCard(id) {
  router.push(RouterConfig.indexDetail.path);
}

// route.path
// console.log("打印----> ~ file: index.vue ~ line 14 ~ route.path", route.path)
</script>

<style scoped>
 
.skeleton-item-img {
  width: 240px;
  height: 240px
}

.card {
  display: inline-block;
}

.col {
  margin-bottom: 20px;
}

.skeleton-item-body {
  width: 220px;

}

.card-body {
  width: 220px;
}

.card-img {
  height: 198px;
}

.card-bottom {
  padding: 8px;
}

.card-bottom--time {
  margin-top: 8px;
}

.card-bottom--label {}
</style>
