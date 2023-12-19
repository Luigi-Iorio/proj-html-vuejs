<script>
export default {
  data() {
    return {
      title: "Get Behind The Weel",
      paragraphOne:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sit amet justo donec enim diam. Eget nunc lobortis mattis aliquam faucibus purus.",
      paragraphTwo:
        "Maecenas sed enim ut sem viverra aliquet. A iaculis at erat pellentesque. Dis parturient montes nascetur ridiculus mus mauris. Ornare suspendisse sed nisi lacus sed viverra tellus in. Mattis nunc sed blandit libero volutpat sed cras. Tellus cras adipiscing enim eu turpis egestas pretium aenean. ",
    };
  },
};
</script>

<template>
  <!-- left -->
  <div class="left">
    <h2>{{ title }}</h2>
    <p class="big">{{ paragraphOne }}</p>
    <p>{{ paragraphTwo }}</p>
  </div>
  <!-- /left -->
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;
.left {
  width: 50%;

  h2 {
    font-size: 38px;
    margin-bottom: 50px;
  }

  p {
    font-size: 18px;
    color: $gumbo;
    line-height: 35px;
  }

  .big {
    font-size: 22px;
    margin-bottom: 40px;
  }
}
</style>
