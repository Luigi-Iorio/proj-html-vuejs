<script>
import Logo from "./Logo.vue";
import HeaderBottomMenu from "./HeaderBottomMenu.vue";

export default {
  data() {
    return {
      menuLinks: [
        {
          textLink: "Home",
          textNew: "",
        },
        {
          textLink: "About",
          textNew: "",
        },
        {
          textLink: "Prices",
          textNew: "",
        },
        {
          textLink: "Courses",
          textNew: "New",
        },
        {
          textLink: "Locations",
          textNew: "",
        },
        {
          textLink: "Blog",
          textNew: "",
        },
      ],
    };
  },
  components: {
    Logo,
    HeaderBottomMenu,
  },
};
</script>

<template>
  <!-- nav -->
  <nav>
    <Logo />
    <HeaderBottomMenu :menuLinks="menuLinks" />
    <!-- button -->
    <button>Book Now</button>
    <!-- /button -->
  </nav>
  <!-- /nav -->
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;

nav {
  padding: 30px 0;
  max-width: 1180px;
  margin: 0 auto;
  @include flex-row-center;
  justify-content: space-between;

  button {
    @include buttonOne;
  }
}
</style>
