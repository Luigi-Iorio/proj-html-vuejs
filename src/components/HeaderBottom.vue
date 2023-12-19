<script>
import HeaderBottomNav from "./HeaderBottomNav.vue";
import HeaderBottomMain from "./HeaderBottomMain.vue";

export default {
  components: {
    HeaderBottomNav,
    HeaderBottomMain,
  },
};
</script>

<template>
  <!-- bottom -->
  <div class="bottom">
    <div class="cont">
      <HeaderBottomNav />
    </div>
    <HeaderBottomMain />
  </div>
  <!-- /bottom -->
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;

.bottom {
  background-image: url("src/assets/img/homepage-hero-background.jpg");
  background-position: center;
  background-size: cover;
  height: 720px;
  display: flex;
  flex-direction: column;
}

.cont {
  background-color: $tundora-tras;
}
</style>
