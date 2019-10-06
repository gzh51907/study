<template >
  <div>
    <el-header>
      <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input2"></el-input>
      <!-- banert -->
      <el-carousel :interval="5000" arrow>
        <el-carousel-item v-for="item in 6" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </el-header>
    <!-- <el-mian></el-mian> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      input2: ""
    };
  }
};
</script>
<style>
.el-carousel__container {
  margin-top: 20px;
}

.el-input .el-input--prefix {
  margin-bottom: 10px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
