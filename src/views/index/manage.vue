<template>
  <div class="w">
    <div class="body-c">
      <div>
        <i class="iconfont icon-cjapp"></i>
        <h3>市政公用工程</h3>
      </div>
      <div>
        <i class="iconfont icon-fangwujianzhu"></i>
        <h3>房屋建筑工程</h3>
      </div>
      <div>
        <i class="iconfont icon-huanbao"></i>
        <h3>环保工程</h3>
      </div>
      <div>
        <i class="iconfont icon-zhuangxiujiajuketingchangshafashuangrenqijushi"></i>
        <h3>建筑装饰装修设计与施工</h3>
      </div>
      <div>
        <i class="iconfont icon-xiaofang"></i>
        <h3>消防工程</h3>
      </div>
      <div>
        <i class="iconfont icon-ludeng"></i>
        <h3>城市及道路照明工程</h3>
      </div>
      <div>
        <i class="iconfont icon-yuanlin"></i>
        <h3>园林绿化工程</h3>
      </div>
      <div>
        <i class="iconfont icon-gengduo"></i>
        <h3>更多</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.body-b {
  line-height: 150px;
  text-align: center;
  color: #524d4e;
  h2 {
    font-weight: 400;
    color: var(--y);
    font-size: 35px;
  }
}
.body-c {
  display: flex;
  flex-wrap: wrap;
  div:hover {
    transform: translateY(-20px);
    transition: 0.4s;
  }
  div {
    width: 345px;
    height: 250px;
    border: 1px solid #f5f6f7;
    margin: 20px 20px;
    background-color: #f5f6f7;
    padding: 20px 40px;
    box-shadow: 1px 0px 5px var(--y);
    h3 {
      width: 150px;
      font-size: 18px;
      margin: 0 auto;
      margin-top: 20px;
      text-align: center;
      color: #524d4e;
    }
    .iconfont {
      display: inline-block;
      font-size: 130px;
      color: var(--y);
      text-align: center;
      width: 250px;
    }
    :nth-child(2) {
      margin-top: 20px;
    }
  }
}
</style>