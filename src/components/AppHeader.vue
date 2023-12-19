<script>
import HeaderTop from "./HeaderTop.vue";
import HeaderBottom from "./HeaderBottom.vue";

export default {
  components: {
    HeaderTop,
    HeaderBottom,
  },
};
</script>

<template>
  <!-- header -->
  <header>
    <HeaderTop />
    <HeaderBottom />
  </header>
  <!-- /header -->
</template>

<style lang="scss" scoped></style>
