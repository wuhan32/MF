<template>
  <div class="w socialDu">
    <ul class="socialDuT">
      <li
        v-for="(tab,index) in tabs"
        :class="{active:num==index}"
        @click="table(index)"
        :key="index"
      >{{tab}}</li>
    </ul>
    <div class="tabContent">
      <div v-show="num == 0">
        <img src="../../assets/img/sD01.jpg" alt />
        <p>
          “用心浇注您的满意”
          “浇注”混凝土是施工生产过程中的重要工序，为珠海大恒建设广大员工所熟悉，具有鲜明行业特色。“用心”是珠海大恒建设员工应有的工作态度，员工工作既要认真，也要热情，更要履责。“满意”是珠海大恒建设的工作准则，公司致力于让各利益相关方满意，即让客户满意、让员工满意、让股东满意，让社会相关方满意。“用心浇注您的满意”既是珠海大恒建设的责任理念，也是服务理念
        </p>
      </div>
      <div v-show="num == 1">2</div>
      <div v-show="num == 2">3</div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "app",
  data() {
    return {
      num: 0
    };
  },
  methods: {
    table(index) {
      this.num = index;
    }
  }
};
</script>
 
<style lang="less" scoped>
.socialDu {
  margin-right: -60px;
  .socialDuT {
    display: flex;
    li {
      margin-left: 10px;
      width: 300px;
      height: 40px;
      background: var(--g);
      cursor: pointer;
      color: #fff;
      border-radius: 5px;
      text-align: center;
      line-height: 40px;
    }
    li.active {
      background: var(--y);
    }
  }
  .tabContent {
    min-height: 500px;
    p {
      text-indent: 2em;
      width: 900px;
      line-height: 30px;
    }
  }
}
</style>
