<template >
  <el-col :span="6" class="txt-right">
    <el-button type="text" @click="where('/login')">登录</el-button>
    <el-button type="text" @click="where('/register')">注册</el-button>
  </el-col>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    where(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style lang="scss" scoped>
.txt-righ {
  width: 200px;
}
</style>
