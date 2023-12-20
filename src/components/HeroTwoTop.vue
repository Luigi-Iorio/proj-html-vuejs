<script>
export default {
  data() {
    return {
      courses: {
        badge: "new",
        title: "Courses",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium labore sapiente, odit, ipsum laboriosam error maiores.",
        buttonText: "Course Information",
      },
      pass: [
        {
          img: "src/assets/img/courses-passplus-200x200.jpg",
          text: "Pass Plus",
          buttonText: "Learn More",
        },
        {
          img: "src/assets/img/course-intensive-200x200.jpg",
          text: "Intensive Course",
          buttonText: "Learn More",
        },
        {
          img: "src/assets/img/courses-instructor-200x200.jpg",
          text: "Instructors",
          buttonText: "Learn More",
        },
      ],
    };
  },
};
</script>

<template>
  <!-- top -->
  <div class="top">
    <!-- card courses -->
    <div class="courses">
      <div class="new">
        <h4>{{ courses.badge }}</h4>
      </div>
      <h2>{{ courses.title }}</h2>
      <p>{{ courses.text }}</p>
      <button>{{ courses.buttonText }}</button>
    </div>
    <!-- /card courses -->

    <!-- card pass -->
    <div v-for="card in pass" class="pass">
      <img :src="card.img" :alt="card.text" />
      <h4>{{ card.text }}</h4>
      <button>{{ card.buttonText }}</button>
    </div>
    <!-- /card pass -->
  </div>
  <!-- /top -->
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;

.top {
  height: 600px;
  width: 1180px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  gap: 50px;

  .courses {
    margin-top: -25px;
    overflow: hidden;
    position: relative;
    width: 40%;
    height: 450px;
    text-align: center;
    gap: 50px;
    padding: 60px 50px 0 50px;
    border-radius: 10px;
    background-color: $white;
    box-shadow: 0px 10px 15px 8px rgba(0, 0, 0, 0.1);

    button {
      @include buttonOne;
    }

    .new {
      top: 0;
      left: 0;
      padding: 45px 40px 10px 40px;
      margin: -25px -50px;
      color: $white;
      transform: rotate(-50deg);
      background-color: $bay;
      position: absolute;
      text-transform: uppercase;
    }

    h2 {
      font-size: 32px;
    }

    p {
      line-height: 35px;
      color: $gumbo;
      margin: 50px 0 40px 0;
    }
  }

  .pass {
    width: 20%;
    text-align: center;
    margin-top: 80px;

    h4 {
      margin: 25px 0 20px 0;
      font-size: 22px;
      color: $gumbo;
    }

    img {
      height: 200px;
      display: block;
    }

    button {
      @include buttonTwo;
    }
  }
}
</style>
