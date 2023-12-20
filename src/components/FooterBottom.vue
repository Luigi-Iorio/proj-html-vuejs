<script>
export default {};
</script>

<template>
  <!-- bottom -->
  <div class="bottom">
    <div class="cont">
      <p>
        &copy; Copyright 2012 - 2020 | Avada Theme By
        <a href="#">ThemeFusion</a> | All Rights Reserved | Power by
        <a href="#">Wordpress</a>
      </p>
      <div class="icon">i i i i</div>
    </div>
  </div>
  <!-- bottom -->
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;
.bottom {
  padding: 70px 0;
  background-color: $black;
  color: $athens;

  .cont {
    width: 1180px;
    margin: 0 auto;
    @include flex-row-center;
    justify-content: space-between;

    a {
      color: $bay;
    }
  }
}
</style>
