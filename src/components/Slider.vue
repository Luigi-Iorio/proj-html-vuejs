<script>
export default {
  data() {
    return {
      testimonials: [
        {
          image: "src/assets/img/testimonial-grant.png",
          text: "Avada driving school really helped build my confidence behind the wheel and with driving in general, and they got me the first time pass! Highly recommended",
          name: "Grant Johns",
        },
        {
          image: "src/assets/img/testimonial-harold.png",
          text: "Avada driving school really helped build my confidence behind the wheel and with driving in general, and they got me the first time pass! Highly recommended",
          name: "Harold Morant",
        },
        {
          image: "src/assets/img/testimonial-kate.png",
          text: "Avada driving school really helped build my confidence behind the wheel and with driving in general, and they got me the first time pass! Highly recommended",
          name: "Kate Doncic",
        },
        {
          image: "src/assets/img/testimonial-kelly.png",
          text: "Avada driving school really helped build my confidence behind the wheel and with driving in general, and they got me the first time pass! Highly recommended",
          name: "Kelly Jokic",
        },
        {
          image: "src/assets/img/testimonial-sophia.png",
          text: "Avada driving school really helped build my confidence behind the wheel and with driving in general, and they got me the first time pass! Highly recommended",
          name: "Sophia Ball",
        },
      ],
      activeTestimonial: 0,
    };
  },
  methods: {
    setActiveTestimonial(index) {
      this.activeTestimonial = index;
    },
  },
};
</script>

<template>
  <!-- slider -->
  <div class="cont">
    <!-- testimonials -->
    <ul>
      <li v-for="(testimonial, index) in testimonials">
        <div class="testimonials" v-show="activeTestimonial === index">
          <img :src="testimonial.image" alt="" />
          <p>{{ testimonial.text }}</p>
          <h3>{{ testimonial.name }}</h3>
        </div>
      </li>
      <!-- buttons -->
      <div class="button">
        <ul>
          <li v-for="(testimonial, index) in testimonials">
            <div
              class="circle"
              :class="activeTestimonial === index ? 'active' : ''"
              @click="setActiveTestimonial(index)"
            ></div>
          </li>
        </ul>
      </div>
      <!-- /buttons -->
    </ul>
    <!-- /testimonials -->
  </div>
  <!-- /slider -->
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;

.cont {
  width: 1180px;
  margin: 0 auto;

  .testimonials {
    color: $gumbo;

    h3 {
      font-size: 26px;
      margin: 40px 0;
    }

    img {
      margin: 0 auto;
      margin-bottom: 30px;
      width: 150px;
      display: block;
    }

    p {
      width: 50%;
      margin: 0 auto;
    }
  }

  .button {
    margin-top: 20px;
    ul {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 10px;
    }
    .circle {
      height: 15px;
      width: 15px;
      border-radius: 50%;
      border: 3px solid $gumbo;
      cursor: pointer;
      transition: 0.4s;

      &.active {
        background-color: $gumbo;
      }
    }
  }
}
</style>
