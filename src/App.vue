<template>
  <div>
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="18">
            <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" router>
              <el-menu-item :index="item.path" v-for="item in menus" :key="item.name">{{item.text}}</el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span="6" class="txt-right"></el-col>
        </el-row>
      </el-header>
    </el-container>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      menus: [
        {
          name: "home",
          path: "/home",
          text: "首页"
        },
        {
          name: "car",
          path: "/car",
          text: "购物车"
        },
        {
          name: "classify",
          path: "/classify",
          text: "分类"
        },
        {
          name: "mine",
          path: "/mine",
          text: "我的"
        }
      ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    created() {
      //获取url地址参数
      console.log(this.$router);
      this.activeIndex = this.$route.path;
    }
  },

  components: {}
};
</script>
<style lang="scss">
.el-menu-demo {
  background-color: #fff;
}
</style>