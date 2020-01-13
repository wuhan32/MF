<template>
  <div>
    <headerO />
    <div v-html="infocontent" class="w"></div>
    <footerO />
  </div>
</template>

<script>
import headerO from "../../components/common/header";
import footerO from "../../components/common/footer";
import { getById } from "../../network/home";
export default {
  data() {
    return {
      infocontent: "",
      id: this.$route.query.id
    };
  },
  created() {
    this.getById();
  },
  methods: {
    //工程展示
    async getById() {
      const { data: res } = await getById(this.id).then();

      this.infocontent = res.data.infocontent;
    }
  },
  components: {
    headerO,
    footerO
  }
};
</script>

<style lang="less" scoped>
</style>