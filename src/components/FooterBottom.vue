<script>
export default {
  data() {
    return {
      icons: ["facebook-f", "twitter", "youtube", "instagram"],
    };
  },
};
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
      <div class="icon">
        <ul>
          <li v-for="icon in icons">
            <a href="#"><font-awesome-icon :icon="['fab', icon]" /></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="arrow">
      <div class="icon">
        <font-awesome-icon :icon="['fas', 'chevron-up']" />
      </div>
    </div>
  </div>
  <!-- bottom -->
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;
.bottom {
  position: relative;
  padding: 70px 0;
  background-color: $black;
  color: $athens;

  .arrow {
    text-align: center;
    position: absolute;
    bottom: 0;
    right: 40px;
    height: 40px;
    width: 50px;
    padding: 10px;
    background-color: $tundora;
    cursor: pointer;
  }

  .cont {
    width: 1180px;
    margin: 0 auto;
    @include flex-row-center;
    justify-content: space-between;

    a {
      color: $bay;
    }

    .icon {
      ul {
        @include flex-row-center;
        gap: 20px;

        a {
          color: $athens;
        }
      }
    }
  }
}
</style>
