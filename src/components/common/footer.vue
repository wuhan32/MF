<template>
  <div>
    <div class="footer-F" />

    <div class="footer-ff w">
      <p>版权所有：大恒建设集团有限公司 备案号：豫ICP备10010710号-1 地址：珠海市香洲区银桦路8号1505</p>
    </div>

    <el-backtop :right="10" :bottom="130">
      <div
        style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: var(--g);
      }"
      >Top</div>
    </el-backtop>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.footer-F {
  margin: 10px 0;
  height: 40px;
  background: var(--g);
}
.footer-ff {
  p {
    text-align: center;
    line-height: 55px;
  }
}

</style>