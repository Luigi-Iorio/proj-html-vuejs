<script>
import MainHeroOne from "./MainHeroOne.vue";
import MainBanner from "./MainBanner.vue";
import MainHeroTwo from "./MainHeroTwo.vue";
import MainHeroThree from "./MainHeroThree.vue";
import MainHeroFour from "./MainHeroFour.vue";
import MainHeroFive from "./MainHeroFive.vue";

export default {
  components: {
    MainHeroOne,
    MainBanner,
    MainHeroTwo,
    MainHeroThree,
    MainHeroFour,
    MainHeroFive,
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
</template>

<style lang="scss" scoped></style>
