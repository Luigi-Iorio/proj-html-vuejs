<script>
import HeroTwoTop from "./HeroTwoTop.vue";
import HeroTwoBottom from "./HeroTwoBottom.vue";

export default {
  components: {
    HeroTwoTop,
    HeroTwoBottom,
  },
};
</script>

<template>
  <!-- hero two -->
  <div class="hero two">
    <div class="cont">
      <HeroTwoTop />
    </div>
    <div class="container">
      <HeroTwoBottom />
    </div>
  </div>
  <!-- /hero two -->
</template>

<style lang="scss" scoped>
.cont {
  background-image: url("src/assets/img/promise-background.jpg");
  background-position: left;
  background-size: cover;
  border-radius: 0 0 40% 40%;
}
</style>
