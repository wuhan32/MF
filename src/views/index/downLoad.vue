<template>
  <div id="dowm">
    <div class="dowm-body w">
      <div class="dowm-body-l">
        <img src="../../assets/img/dowI.png" alt />
      </div>
      <div class="dowm-body-r">
        <ul>
          <li @mouseenter="iconfontP" @mouseleave="leave">
            <div class="iPhoneO" v-show="!iconfontEye">
              <img src="../../assets/img/APPdow.png" alt />
              <p>扫二维码下载</p>
            </div>
            <div class="iPhone" v-show="iconfontEye">
              <img src="../../assets/img/downP.png" alt />
              <p>iPhone</p>
            </div>
          </li>
          <li @mouseenter="iconfontPS" @mouseleave="leaveS">
            <div class="AndroidO" v-show="!iconfontEyeS">
              <img src="../../assets/img/APPdow.png" alt />
              <p>扫二维码下载</p>
            </div>
            <div class="Android" v-show="iconfontEyeS">
              <img src="../../assets/img/downA.png" alt />
              <p>Android</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iconfontEye: true,
      iconfontEyeS: true
    };
  },
  methods: {
    iconfontP() {
      this.iconfontEye = !this.iconfontEye;
    },
    iconfontPS() {
      this.iconfontEyeS = !this.iconfontEyeS;
    },
    leave() {
      this.iconfontEye = !this.iconfontEye;
    },
    leaveS() {
      this.iconfontEyeS = !this.iconfontEyeS;
    }
  }
};
</script>

<style lang="less" scoped>
#dowm {
  margin: 200px 0 200px 400px;
  .dowm-body {
    height: 500px;
    display: flex;
    .dowm-body-r {
      ul {
        margin: 134px 0 0 150px;
        display: flex;

        li {
          width: 250px;
          height: 250px;
          border: 1px solid #ccc;
          margin-left: 25px;
          text-align: center;
          .Android {
            img {
              margin-top: 45px;
            }
          }
          .iPhone {
            img {
              margin-top: 45px;
            }
          }
          .iPhoneO {
            img {
              width: 100%;
            }
          }
          .AndroidO {
            img {
              width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>