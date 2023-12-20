<script>
export default {};
</script>

<template>
  <!-- right -->
  <div class="right">
    <!-- form -->
    <form>
      <h2>First Lessons Free!</h2>
      <p>
        When you make a block booking whith us your first lessons is included
        free.
      </p>
      <div class="input">
        <label hidden for="name">name</label>
        <div class="name">
          <input type="text" name="name" id="name" placeholder="Your name*" />
          <font-awesome-icon icon="fa-regular fa-id-badge" />
        </div>
      </div>
      <div class="input">
        <label hidden for="email">email</label>
        <input type="email" name="email" id="email" placeholder="Email*" />
      </div>
      <div class="input">
        <label hidden for="telephone">Telephone</label>
        <input
          type="tel"
          name="telephone"
          id="telephone"
          placeholder="Telephonee"
        />
      </div>
      <div class="input">
        <label hidden for="location">Location</label>
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Location"
        />
      </div>
      <!-- button -->
      <button>Request a callback</button>
      <!-- /button -->
    </form>
    <!-- /form -->
  </div>
  <!-- /right -->
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;
.right {
  margin-top: -80px;
  width: 50%;

  h2 {
    color: $bay;
  }

  form {
    text-align: center;
    padding: 50px 40px;
    background-color: white;
    border-radius: 15px;
    margin-bottom: 80px;
    box-shadow: 0px 10px 15px 8px rgba(0, 0, 0, 0.1);

    p {
      color: $gumbo;
      margin-top: 50px;
      margin-bottom: 40px;
      line-height: 35px;
    }

    input {
      width: 100%;
      padding: 15px 10px;
      margin-bottom: 30px;
      border: 1px solid $gumbo;
      border-radius: 10px;
      background-color: $athens;
      outline: none;
    }

    button {
      @include buttonOne;
    }
    .name {
      @include flex-row-center;
      border: 1px solid $gumbo;
      background-color: $athens;
      border-radius: 10px;
      margin-bottom: 30px;

      input {
        width: 100%;
        padding: 15px 10px;
        margin-bottom: 0;
        border: none;
        background-color: $athens;
      }

      svg {
        padding-right: 10px;
        color: $gumbo;
      }
    }
  }
}
</style>
