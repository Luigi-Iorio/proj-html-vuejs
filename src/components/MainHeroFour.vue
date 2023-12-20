<script>
import Slider from "./Slider.vue";

export default {
  components: {
    Slider,
  },
};
</script>

<template>
  <!-- hero four -->
  <div class="hero four">
    <!-- title -->
    <h2>Testimonials</h2>
    <!-- /title -->
    <!-- subtitle -->
    <p>Here's what our happy drivers had to say abou our services</p>
    <!-- /subtitle -->
    <Slider />
  </div>
  <!-- /hero four -->
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;

.four {
  margin-top: -100px;
  height: 870px;
  background-image: url("src/assets/img/testimonial-background.jpg");
  background-position: center;
  background-size: cover;
  text-align: center;

  h2 {
    padding-top: 150px;
    font-size: 32px;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 50px;
    color: $gumbo;
  }
}
</style>
