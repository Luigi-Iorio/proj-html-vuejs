<script>
export default {
  props: ["cols"],
};
</script>

<template>
  <!-- menu -->
  <ul v-for="col in cols" class="col">
    <li v-for="element in col.elements">
      <h4>{{ element }}</h4>
    </li>
  </ul>
  <!-- menu -->
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;
.col {
  color: $athens;
  width: calc(60% / 2);

  li {
    margin-bottom: 10px;
  }

  li:first-child {
    h4 {
      font-size: 22px;
      margin-bottom: 30px;
      text-transform: uppercase;
    }
  }
}

ul:last-child {
  li:first-child {
    h4 {
      color: $athens;
    }
  }

  h4 {
    color: $bay;
  }
}
</style>
