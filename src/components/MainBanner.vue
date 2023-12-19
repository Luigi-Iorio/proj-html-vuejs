<script>
export default {
  data() {
    return {
      title: "Start Learning to Drive Today",
      paragraph: "Give us a call schedule your first driving lessons",
      number: "1-800-555-555",
    };
  },
};
</script>

<template>
  <!-- banner -->
  <div class="banner">
    <div class="cont">
      <!-- left -->
      <div class="left">
        <h2>{{ title }}</h2>
        <p>{{ paragraph }}</p>
      </div>
      <!-- /left -->

      <!-- right -->
      <div class="right">
        <h3>
          <font-awesome-icon icon="fa-solid fa-phone-flip" /> {{ number }}
        </h3>
      </div>
      <!-- /right -->
    </div>
  </div>
  <!-- /banner -->
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;
.banner {
  height: 270px;
  color: $white;
  background-image: url("src/assets/img/horizontal-cta-background.jpg");
  background-position: center;
  background-size: cover;

  .cont {
    @include flex-row-center;
    justify-content: space-between;
    height: 100%;
    width: 1180px;
    margin: 0 auto;

    h2 {
      font-size: 32px;
      margin-bottom: 20px;
    }

    h3 {
      font-size: 28px;
    }
  }

  .left,
  .right {
    width: 50%;
  }

  .right {
    text-align: right;
  }
}
</style>
