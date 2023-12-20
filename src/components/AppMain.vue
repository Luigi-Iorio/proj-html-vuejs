<script>
import MainHeroOne from "./MainHeroOne.vue";
import MainBanner from "./MainBanner.vue";
import MainHeroTwo from "./MainHeroTwo.vue";
import MainHeroThree from "./MainHeroThree.vue";

export default {
  components: {
    MainHeroOne,
    MainBanner,
    MainHeroTwo,
    MainHeroThree,
  },
};
</script>

<template>
  <MainHeroOne />
  <MainBanner />
  <MainHeroTwo />
  <MainHeroThree />
</template>

<style lang="scss" scoped></style>
