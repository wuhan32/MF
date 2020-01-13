<template>
  <div>
    <headerO />
    <div class="w swipertInfo" v-html="swipertInfo.remark"></div>
    <footerO />
  </div>
</template>

<script>
import { getImgInfo } from "../../network/home";
import headerO from "../../components/common/header";
import footerO from "../../components/common/footer";
export default {
  data() {
    return {
      id: this.$route.query.id,
      swipertInfo: ""
    };
  },
  created() {
    console.log(this.id);

    this.getImgInfo();
  },
  methods: {
    async getImgInfo() {
      const { data: res } = await getImgInfo(this.id).then();
      console.log(res);
      this.swipertInfo = res;
    }
  },
  components: {
    headerO,
    footerO
  }
};
</script>

<style lang="less" scoped>
.swipertInfo {
  min-height: 600px;
}
</style>