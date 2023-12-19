<script>
export default {
  data() {
    return {
      title: "Drive with Avada",
      paragraph: "We offer the finest driving tuition money can buy",
    };
  },
};
</script>

<template>
  <!-- main -->
  <div class="container">
    <div class="header-bottom-main">
      <h1>{{ title }}</h1>
      <p>{{ paragraph }}</p>
    </div>
    <!-- quadrati -->
    <div class="square">
      <div class="box">
        <font-awesome-icon icon="fa-solid fa-square-minus" />
        <h6>Demos</h6>
      </div>
      <div class="box">
        <h2><sup>$</sup>39</h2>
        <h6>On sale</h6>
      </div>
    </div>
    <!-- /quadrati -->
  </div>
  <!-- /main -->
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;
.container {
  height: 100%;
  position: relative;
  .square {
    margin-top: -10px;
    position: absolute;
    top: 0;
    right: 15px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .box {
      padding: 10px 15px;
      border-radius: 10px;
      background-color: $white;
      color: black;
      box-shadow: 0px 0px 10px 9px rgba(0, 0, 0, 0.1);
      height: 70px;

      svg {
        height: 30px;
      }

      h2 {
        color: $bay;
      }
    }
  }
}
.header-bottom-main {
  height: 100%;
  color: $white;
  width: 1180px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;

  h1 {
    font-size: 58px;
  }

  p {
    font-size: 24px;
  }
}
</style>
