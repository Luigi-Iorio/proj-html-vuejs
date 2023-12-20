<script>
export default {
  data() {
    return {
      top: {
        title: "Your Instructors",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quas molestias doloremque et culpa alias maiores magnam vitae nobis quos iusto possimus.",
        buttonText: "More About Us",
      },
    };
  },
};
</script>

<template>
  <!-- top -->
  <div class="top">
    <h2>{{ top.title }}</h2>
    <div class="cont">
      <div class="left">
        <p>{{ top.text }}</p>
      </div>
      <div class="right">
        <button>{{ top.buttonText }}</button>
      </div>
    </div>
  </div>
  <!-- /top -->
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;

.top {
  width: 1180px;
  margin: 0 auto;
  margin-top: 200px;

  h2 {
    font-size: 32px;
    margin-bottom: 50px;
  }

  .cont {
    display: flex;
    gap: 50px;
  }

  .left {
    width: 70%;

    p {
      color: $gumbo;
      line-height: 35px;
    }
  }

  .right {
    width: 30%;

    button {
      width: 100%;
      @include buttonOne;
    }
  }
}
</style>
