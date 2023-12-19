<script>
export default {
  data() {
    return {
      imgLogo: "/img/avada-drivers-logo-2x-300x58.png",
      altLogo: "logo avada",
    };
  },
};
</script>

<template>
  <!-- logo -->
  <div class="logo">
    <img :src="imgLogo" :alt="altLogo" />
  </div>
  <!-- /logo -->
</template>

<style lang="scss" scoped>
img {
  height: 100%;
  display: block;
}
</style>
