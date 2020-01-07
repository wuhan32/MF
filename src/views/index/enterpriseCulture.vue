<template>
  <div class="w body">
    <div class="body-header">
      <h3>企业理念</h3>
    </div>

    <div class="body-B">
      <div>
        <img src="../../assets/img/qysm01.jpg" alt />
      </div>
      <div class="body-C">
        <h5>以企业人为自豪</h5>
        <p>企业的目标是追求利润，企业人的价值观不同于社会人；企业有明确的方向，行动的组织性和统一性常常需要员工放弃某些个性。作为企业人，我们的自豪是：为社会创造财富，为社会贡献智慧。</p>
      </div>
    </div>

    <div class="body-B">
      <div>
        <img src="../../assets/img/qyyj03.jpg" alt />
      </div>
      <div class="body-C">
        <h5>要胸怀理想，更应脚踏实地</h5>
        <p>每个人都渴望成就，但成功来源于一步步脚踏实地的工作，不积跬步，无以致千里。当我们具有使命感，胸怀理想的时候，就需要每一位员工在岗位上尽心尽责，把身边的每一件事做好。</p>
      </div>
    </div>

    <div class="body-B">
      <div>
        <img src="../../assets/img/qyjs02.jpg" alt />
      </div>
      <div class="body-C">
        <h5>要有市场意识和服务意识</h5>
        <p>市场需要是企业生存的基础，客户满意是企业发展的动力。市场意识体现在各项工作都要适应市场的需要，服务意识体现在企业各环节要密切配合，以客户为中心，为客户提供准确、细致、高效和满意的产品和服务。</p>
      </div>
    </div>

    <div class="body-B">
      <div>
        <img src="../../assets/img/qywh1.jpg" alt />
      </div>
      <div class="body-C">
        <h5>要树立先贡献后获得的价值观</h5>
        <p>在社会的观念中，往往将资历和能力跟贡献划等号。我们打破这种观念，确立贡献是获得分配的原则，反对以报酬作为贡献的前提，反对仅凭资历与能力就能获得个人的利益。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.body {
  .body-header {
    border-bottom: 2px solid var(--y);
    margin-bottom: 15px;
    h3 {
      display: inline-block;
      background-color: var(--y);
      color: #fff;
      line-height: 25px;
      padding: 8px;
    }
  }
  .body-B:hover {
    transform: translateX(20px);
    transition: 0.4s;
  }
  .body-B {
    display: flex;
    margin-top: 15px;
    height: 150px;
    border: 1px solid var(--y);
    img {
      height: 100%;
      width: 250px;
    }
    .body-C {
      h5 {
        margin-left: 30px;
        font-size: 20px;
        line-height: 50px;
      }
      p {
        margin-left: 60px;

        line-height: 25px;
      }
    }
  }
}
</style>