<template>
  <div class="w">
    <div class="body-b">
      <h2>项目地点</h2>
    </div>
    <div class="body-c">
      <div>
        <h3>唐家小学</h3>
        <p>地址：</p>
        <p>电话：</p>
        <p>传真：</p>
      </div>
      <div>
        <h3>档案馆</h3>
      </div>
      <div>
        <h3>农产品</h3>
      </div>
      <div>
        <h3>世纪城农贸市场</h3>
      </div>
      <div>
        <h3>海誉雅阁</h3>
      </div>
      <div>
        <h3>航空城中学</h3>
      </div>
      <div>
        <h3>公安分局</h3>
      </div>
      <div>
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
  div {
    width: 345px;
    height: 250px;
    border: 1px solid #f5f6f7;
    margin: 20px 20px;
    background-color: #f5f6f7;
    padding: 0 40px;
    h3 {
      width: 150px;
      font-size: 18px;
      margin: 0 auto;
      margin-top: 20px;
      text-align: center;
      color: #524d4e;
    }
    :nth-child(2) {
      margin-top: 20px;
    }
    p {
      font-size: 15px;
      line-height: 2;
      color: #524d4e;
    }
  }
  
}
</style>