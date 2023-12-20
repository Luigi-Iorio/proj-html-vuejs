<script>
import MainHeroOne from "./MainHeroOne.vue";
import MainBanner from "./MainBanner.vue";
import MainHeroTwo from "./MainHeroTwo.vue";
import MainHeroThree from "./MainHeroThree.vue";
import MainHeroFour from "./MainHeroFour.vue";

export default {
  components: {
    MainHeroOne,
    MainBanner,
    MainHeroTwo,
    MainHeroThree,
    MainHeroFour,
  },
};
</script>

<template>
  <MainHeroOne />
  <MainBanner />
  <MainHeroTwo />
  <MainHeroThree />
  <MainHeroFour />
</template>

<style lang="scss" scoped></style>
