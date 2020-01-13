<template>
  <div>
    <headerO />
    <h1>信息化大恒</h1>
    <div class="messageDh">
      <div class="messageDh-left">
        <p style="width:180px;height:70px" @click="dialogVisible = true">行政办公</p>
        <p style="width:100px " @click="dialogVisible = true">信息管理</p>
        <p style="width:100px " @click="dialogVisible = true">车辆管理</p>
        <p style="width:180px" @click="dialogVisible = true">资料管理</p>
        <div style="width:200px">
          <p style="width:200px" @click="dialogVisible = true">考勤管理</p>
          <p style="width:200px" @click="dialogVisible = true">个人事务</p>
        </div>
        <p
          style="height:150px; width:80px;  writing-mode:tb-rl; transform: translate(209px,-160px);"
          @click="dialogVisible = true"
        >行政事务</p>
      </div>

      <div class="messageDh-right">
        <p style="width:100px " @click="dialogVisible = true">餐饮管理</p>
        <p style="width:180px" @click="dialogVisible = true">采购管理</p>
        <p style="width:180px" @click="dialogVisible = true">基础设置</p>
        <p style="width:100px " @click="dialogVisible = true">菜品管理</p>
        <p style="width:100px " @click="dialogVisible = true">购物车管理</p>
        <p style="width:180px" @click="dialogVisible = true">订单管理</p>
        <p style="width:180px" @click="dialogVisible = true">查询分析</p>
        <p style="width:100px " @click="dialogVisible = true">饭堂管理</p>
      </div>

      <div>
        <p style="width:280px" @click="dialogVisible = true">人力资源</p>
        <p style="width:280px" @click="dialogVisible = true">形象工程</p>
        <p style="width:280px" @click="dialogVisible = true">员工之声</p>
        <p style="width:280px" @click="dialogVisible = true">基础设置</p>
      </div>
    </div>
    <el-button type="success" @click="goMf">马上体验</el-button>

    <el-dialog :visible.sync="dialogVisible">
      <img src="../../assets/img/xx01.png" alt />
    </el-dialog>

    <footerO />
  </div>
</template>

<script>
import headerO from "../../components/common/header";
import footerO from "../../components/common/footer";
export default {
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {
    goMf() {
      window.open("http://www.dahengzh.com:8080/oa/userinfo/login");
    }
  },
  components: {
    headerO,
    footerO
  }
};
</script>

<style lang="less" scoped>
.messageDh {
  width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;

  > div {
    width: 400px;
    flex-wrap: wrap;
  }
  p {
    display: inline-block;
    background-color: var(--g);
    text-align: center;
    line-height: 70px;
    color: #fff;
    margin: 10px 10px 0 0;
  }
  p:hover {
    background-color: var(--y);
    cursor: pointer;
  }
}
h1 {
  text-align: center;
}
.el-button {
  width: 150px;
  font-size: 20px;
  margin-left: 900px;
  transform: translateY(-80px);
}
.el-dialog {
  img {
    width: 100%;
  }
}
</style>