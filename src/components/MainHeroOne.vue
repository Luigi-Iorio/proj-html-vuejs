<script>
import HeroOneLeft from "./HeroOneLeft.vue";
import HeroOneRight from "./HeroOneRight.vue";

export default {
  components: {
    HeroOneLeft,
    HeroOneRight,
  },
};
</script>

<template>
  <!-- hero one -->
  <div class="hero one">
    <HeroOneLeft />
    <HeroOneRight />
  </div>
  <!-- /hero one -->
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;
.one {
  @include flex-row-center;
  justify-content: space-between;
  gap: 50px;
  width: 1180px;
  margin: 0 auto;
}
</style>
