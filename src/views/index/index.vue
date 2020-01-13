<template>
  <div>
    <headerO />
    <router-view></router-view>

    <footerO />
  </div>
</template>

<script>
import headerO from "../../components/common/header";
import footerO from "../../components/common/footer";
export default {
  components: {
    headerO,
    footerO
  }
};
</script>
