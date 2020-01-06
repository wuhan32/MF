<template>
  <div class="w">
    <div class="body-a">
      <img src="../../assets/img/lxwm01.jpg" alt />
    </div>
    <div class="body-b">
      <h1>联系方式</h1>
      <h2>大恒建设集团有限公司</h2>
      <p>地址：珠海市香洲区银桦路8号1505</p>
      <p>电话：（0756） 3668888</p>
      <p></p>
    </div>

    <!-- 地图 -->
    <baidu-map :center="center" :zoom="zoom" @ready="handler" class="footer-l-m">
      <bm-marker
        :position="{lng: 113.571898, lat:22.283535}"
        :dragging="true"
        :icon="{url: 'http://www.dahengzh.com:8888/group1/M00/00/02/rBLQ3V4SoYuAW3QJAAAImyek_mo492.jpg', size: {width: 300, height: 157}}"
      ></bm-marker>
    </baidu-map>
  </div>
</template>

<script>
export default {
  data() {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 19,
      labelStyle: { color: "var(--g)", fontSize: "12px", border: "none" }
    };
  },
  methods: {
    handler({ BMap, map }) {
      this.center.lng = 113.571898;
      this.center.lat = 22.283535;
      this.zoom = 18;
    }
  }
};
</script>

<style lang="less" scoped>
.body-a {
  > img {
    width: 100%;
  }
}
.body-b {
  margin-top: 20px;
  height: 400px;
  background-color: #f5f6f7;
  padding: 70px 0 74px 186px;
  h1 {
    font-weight: normal;
    font-size: 28px;
    color: #333;
    padding-bottom: 25px;
  }
  h2 {
    color: #424242;
    font-size: 20px;
    font-weight: normal;
    padding-bottom: 10px;
  }
  p {
    color: #757575;
    line-height: 2.1;
  }
}
.footer-l-m {
  margin-top: 20px;
  height: 350px;
  width: 100%;
}
</style>