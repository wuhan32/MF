<template>
  <div>
    <headerO />
    <div class="videoInfo w">
      <h2>{{ videoInfo.title }}</h2>
      <video-player
        class="video-player vjs-custom-skin"
        ref="videoPlayer"
        :playsinline="true"
        :options="playerOptions"
      ></video-player>
      <div v-html="videoInfo.content " class="videoInfo-F"></div>
    </div>

    <footerO />
  </div>
</template>

<script>
import { findById } from "../../network/home";
import headerO from "../../components/common/header";
import footerO from "../../components/common/footer";
export default {
  data() {
    return {
      id: this.$route.query.id,
      videoInfo: "",
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        sources: [
          {
            type: "", //这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
            src: "" //url地址
          }
        ],
        poster: "", //你的封面地址
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true //全屏按钮
        }
      }
    };
  },
  created() {
    this.findById();
  },
  methods: {
    async findById() {
      const { data: res } = await findById(this.id).then();
      this.videoInfo = res.data;
      this.playerOptions.sources[0].src = res.data.resource.resource_url;
      this.playerOptions.poster = res.data.resource.fetch_pic;

      console.log(this.videoInfo);
    }
  },
  components: {
    headerO,
    footerO
  }
};
</script>

<style lang="less" scoped>
.videoInfo {
  min-height: 600px;
}
h2 {
  text-align: center;
  margin: 50px 0;
}
.videoInfo-F {
  text-align: center;
  margin: 50px 0;
}
.video-player {
  margin-left: 300px;
  width: 900px;
}

</style>