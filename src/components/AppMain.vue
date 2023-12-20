<script>
import MainHeroOne from "./MainHeroOne.vue";
import MainBanner from "./MainBanner.vue";
import MainHeroTwo from "./MainHeroTwo.vue";
import MainHeroThree from "./MainHeroThree.vue";
import MainHeroFour from "./MainHeroFour.vue";
import MainHeroFive from "./MainHeroFive.vue";
import MainHeroSix from "./MainHeroSix.vue";

export default {
  components: {
    MainHeroOne,
    MainBanner,
    MainHeroTwo,
    MainHeroThree,
    MainHeroFour,
    MainHeroFive,
    MainHeroSix,
  },
};
</script>

<template>
  <MainHeroOne />
  <MainBanner />
  <MainHeroTwo />
  <MainHeroThree />
  <MainHeroFour />
  <MainHeroFive />
  <MainHeroSix />
</template>

<style lang="scss" scoped></style>
