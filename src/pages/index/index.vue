<template>
  <el-row  :gutter="12">
    <el-col :span="4"  v-for="item in 40" :key="item" class="col">
        <el-skeleton style="width: 240px" :loading="loading" animated>
      <template #template>
        <el-skeleton-item variant="image" style="width: 240px; height: 240px" />
        <div style="padding: 14px">
          <el-skeleton-item variant="h3" style="width: 50%" />
          <div
            style="
              display: flex;
              align-items: center;
              justify-items: space-between;
              margin-top: 16px;
              height: 16px;
            "
          >
            <el-skeleton-item variant="text" style="margin-right: 16px" />
            <el-skeleton-item variant="text" style="width: 30%" />
          </div>
        </div>
      </template>
      <template #default>
        <el-card :body-style="{ padding: '0px', marginBottom: '1px' }">
            <el-image class="card-img"   :src="url" fit="fill" />
          <div  class="card-bottom">
            <div  class="text--style-overflow card-bottom-label" style="font-size:var(--el-font-size-base)">
                 <span class="text--style-color__primary" >
                     Vue 被设计为可以自底向上逐层应用层应用层应用层应用
                 </span>
            </div>
            <div  class="card-bottom--time" style="font-size:var(--el-font-size-extra-small)" >
                <span class="text--style-color__secondary" >2020-12-23 10:12:33</span>
            </div>
          </div>
        </el-card>
      </template>
    </el-skeleton>
    </el-col>
  </el-row>
 
  
</template>


 
<script  setup>
import { ref} from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const loading  = ref(false)
 
const url ='https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'



setTimeout(() => {
loading.value = false
}, 2000);
// route.path
// console.log("打印----> ~ file: index.vue ~ line 14 ~ route.path", route.path)
</script>

<style scoped>
.col{
    margin-bottom: 20px;
}
.card-img{
    height: 198px;
}
.card-bottom{
    padding: 8px;
}
.card-bottom--time{
    margin-top: 8px;
}
.card-bottom--label{

}
</style>