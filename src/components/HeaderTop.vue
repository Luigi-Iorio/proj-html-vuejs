<script>
export default {
  data() {
    return {
      topText: "We have a 95% Successful Pass Rate!",
      topPhone: "Give us a call to book your tuition! 1-800-555-555",
    };
  },
};
</script>

<template>
  <!-- top -->
  <div class="top">
    <div class="cont">
      <span>{{ topText }}</span>
      <a href="#"
        ><font-awesome-icon icon="fa-solid fa-phone-flip" /> {{ topPhone }}</a
      >
    </div>
  </div>
  <!-- /top -->
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;

.top {
  background-color: $tundora;
  color: $gumbo;
  font-size: 14px;

  h5 {
    font-weight: normal;
  }

  .cont {
    max-width: 1180px;
    margin: 0 auto;
    padding: 15px 0;
    @include flex-row-center;
    justify-content: space-between;
  }
}
</style>
