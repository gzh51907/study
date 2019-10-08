<template >
  <div>
    <div class="block">
      <div class="demo-input-size">
        <el-input
          style=" width:550px;   margin-top: 10px;"
          size="medium"
          placeholder="请输入内容"
          suffix-icon="el-icon-search"
          v-model="input1"
          maxlength
        ></el-input>
      </div>
      <el-carousel class="lunban" height="280px" style=" width:600px">
        <el-carousel-item v-for="item in menus" :key="item.src">
          <el-image style="width:100%" :src="item.src"></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-row :gutter="20">
      <el-col :span="4">
        <img src="../assets/hot.png" style="width:100%" />
      </el-col>
      <el-col :span="20">
        <el-carousel height="20px" direction="vertical" :autoplay="false">
          <el-carousel-item v-for="item in 5" :key="item">
            <h3 class="medium" style="height:20px">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
    <div class="demo-image">
      <div class="block" v-for="item in recommend" :key="item.id">
        <el-image style="width: 230px; height: 150px" :src="item.Pic"></el-image>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input1: "",
      recommend: [],
      menus: [
        {
          id: 1,
          src:
            "http://img0.gjw.com/famous/2019/0829/5f1891411428456a8124d0ab59088329.jpg"
        },
        {
          id: 2,
          src:
            "http://img0.gjw.com/famous/2019/1006/04ea4b0e68aa48bdac8b4ab637005aa0.jpg"
        },
        {
          id: 3,
          src:
            "http://img0.gjw.com/famous/2019/0903/91c7294745134d2ca597ca8abd4ca694.jpg"
        },
        {
          id: 4,
          src:
            "http://img0.gjw.com/famous/2019/1006/77fde386f1d748b3823a98ad158179ad.jpg"
        }
      ]
    };
  },
  methods: {
    goto(id) {
      this.$router.push({ name: "goods", params: { id } });
    }
  },
  async created() {
    let {
      data: { data }
    } = await this.$axios.get("http://m.gjw.com/BtCApi/Home/GetHomePageImg");

    this.recommend = data.map(item => {
      return item;
    });

    console.log(this.recommend);
  }
};
</script>
<style>
.lunban {
  z-index: 0;
}

.demo-input-size {
  position: absolute;
  z-index: 1;
  /* top: 10px; */
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
