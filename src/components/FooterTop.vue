<script>
import Logo from "./Logo.vue";
import FooterTopMenu from "./FooterTopMenu.vue";

export default {
  data() {
    return {
      textcol:
        "Avada Driving School is the right choice for experienced drivers looking for a refresher course, or the brand new driver waiting to pass first time",
      img: "src/assets/img/footer-ad-grid-400x357.png",
      cols: [
        {
          title: "Contact Details",
          elements: [
            {
              icon: "house",
              text: "12345 North Main Street, New York, NY 5555555",
            },
            {
              icon: "phone-flip",
              text: "1.800.555.6789",
            },
            {
              icon: "envelope",
              text: "info@your-domain.com",
            },
            {
              icon: "link",
              text: "them-fusion.com",
            },
          ],
        },
        {
          title: "Courses",
          elements: [
            {
              icon: "circle-right",
              text: "Pass Plus",
            },
            {
              icon: "circle-right",
              text: "Intensive Course",
            },
            {
              icon: "circle-right",
              text: "Automatic",
            },
            {
              icon: "circle-right",
              text: "Instructor Training",
            },
          ],
        },
      ],
    };
  },
  components: {
    Logo,
    FooterTopMenu,
  },
};
</script>

<template>
  <!-- top -->
  <div class="top">
    <div class="cont">
      <!-- left -->
      <div class="left">
        <div class="col">
          <Logo />
          <p>{{ textcol }}</p>
        </div>
        <FooterTopMenu :cols="cols" />
      </div>
      <!-- left -->
      <!-- right -->
      <div class="right">
        <div class="image">
          <img :src="img" alt="grid" />
        </div>
        <button>Book Now</button>
      </div>
      <!-- right -->
    </div>
  </div>
  <!-- /top -->
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;
.top {
  background-image: url("src/assets/img/footer-background-color.jpg");
  background-position: center;
  background-size: cover;
  .cont {
    color: $athens;
    width: 1180px;
    margin: 0 auto;
    padding: 60px 0;
    display: flex;

    .left {
      display: flex;
      gap: 30px;
      width: 80%;

      .col {
        width: 40%;
      }

      p {
        margin-top: 20px;
        line-height: 35px;
        font-size: 14px;
      }
    }

    .right {
      width: 20%;
      text-align: center;

      .image {
        height: 200px;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      button {
        margin-top: 20px;
        @include buttonOne;
      }
    }
  }
}
</style>
