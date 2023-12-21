<script>
export default {
  props: ["cols"],
};
</script>

<template>
  <!-- menu -->
  <ul v-for="col in cols" class="col">
    <h4>{{ col.title }}</h4>
    <li v-for="element in col.elements">
      <h3>
        <font-awesome-icon :icon="['fas', element.icon]" />
      </h3>
      <a href="#">{{ element.text }}</a>
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
    display: flex;
    gap: 15px;
  }

  h4 {
    font-size: 22px;
    margin-bottom: 30px;
    text-transform: uppercase;
  }

  a {
    display: inline-block;
  }
}

ul:last-child {
  h4 {
    color: $athens;
  }

  a,
  h3 {
    color: $bay;
  }
}
</style>
