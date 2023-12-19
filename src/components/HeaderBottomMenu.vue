<script>
export default {
  props: ["menuLinks"],
};
</script>

<template>
  <!-- menu list -->
  <ul>
    <li v-for="link in menuLinks" class="link">
      <a href="#">{{ link.textLink }}</a>
      <h5 v-show="link.textNew !== ''">{{ link.textNew }}</h5>
    </li>
  </ul>
  <!-- menu list -->
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;

ul {
  @include flex-row-center;
  gap: 45px;
  color: $white;
  text-transform: uppercase;

  .link {
    @include flex-row-center;
    gap: 10px;

    a {
      padding-bottom: 10px;
      border-bottom: 2px solid transparent;

      &:hover {
        border-bottom: 2px solid $bay;
        color: $bay;
      }
    }

    h5 {
      color: $white;
      background-color: $bay;
      border-radius: 5px;
      padding: 2px 5px;
      margin-bottom: 10px;
    }
  }
}
</style>
