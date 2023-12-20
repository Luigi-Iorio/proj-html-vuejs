<script>
export default {
  data() {
    return {
      title: "Sign up to our Newsetter",
      textButton: "Subscribe",
      paragraph:
        "(We do not share your data with anybody, and only use it for itsn intended purpose)",
    };
  },
};
</script>

<template>
  <!-- hero six -->
  <div class="hero six">
    <div class="cont">
      <!-- title -->
      <h2>{{ title }}</h2>
      <!-- /title -->
      <!-- form -->
      <form action="#">
        <label hidden for="newsletter"></label>
        <input type="email" name="newsletter" id="newsletter" />
      </form>
      <!-- /form -->
      <!-- button -->
      <button>{{ textButton }}</button>
      <!-- /button -->
      <!-- paragraph -->
      <p>{{ paragraph }}</p>
      <!-- /paragraph -->
    </div>
  </div>
  <!-- /hero six -->
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;
.six {
  background-image: url("src/assets/img/newsletter_background.jpg");
  background-position: top;
  background-size: cover;

  .cont {
    text-align: center;
    width: 600px;
    margin: 0 auto;
    padding: 60px 0;

    h2 {
      font-size: 30px;
    }

    input {
      width: 100%;
      height: 50px;
      margin-top: 50px;
    }

    button {
      @include buttonOne;
      width: 100%;
      margin: 30px 0;
    }

    p {
      font-size: 14px;
      color: $gumbo;
    }
  }
}
</style>
