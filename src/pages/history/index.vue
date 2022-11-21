<template>
    <el-row class="height--100-pr" :gutter="20">
        <el-col :span="8" class="height--100-pr over-flow">
            <el-timeline>
                <el-timeline-item timestamp="2018/4/12" placement="top" v-for="item in 10" :key="item">
                    <el-card>
                        <h4>Update Github template</h4>
                        <p>Tom committed 2018/4/12 20:46</p>
                    </el-card>
                </el-timeline-item>
            </el-timeline>
        </el-col>
        <el-col :span="16" class="height--100-pr over-flow">
            <el-skeleton :loading="skeletonLoading" :animated="true" :count="2"  >
                <template #template>
                    <el-space wrap size="default">
                        <el-skeleton-item class="skeleton-item" variant="image"></el-skeleton-item>

                    </el-space>
                </template>
                <template #default>
                    <el-space wrap :size="'default'"   >
                        <div class="history-img--wrapper" v-for="item in 40" :key="item">
                            <el-image fit="cover" :src="url" class="history-img--item"></el-image>
                        </div>
                    </el-space>
                </template>
            </el-skeleton>
        </el-col>
        <!-- <el-col :span="6">
            <el-skeleton>
                <template #template>

                    <el-skeleton-item  style="width: 200px;height: 180px;" variant="image">
    
                    </el-skeleton-item>
                </template>
            </el-skeleton>
        </el-col> -->
    </el-row>
</template>
<script setup>
import { ref } from "vue";

const skeletonLoading = ref(true);
setTimeout(() => {
    skeletonLoading.value = false;
}, 2000);
const url =
    "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg";
</script>

<style scoped>
 
.skeleton-item {
    width: 180px;
    height: 200px;
    /* display: inline-block; */
}

.history-img--wrapper {
    width: 180px;
    height: 200px;
    display: inline-block;
    margin-top: 10px;
    border-radius: 4px;
    overflow: hidden;
}

.history-img--item {
    height: 100%;
    width: 100%;
}
</style>
