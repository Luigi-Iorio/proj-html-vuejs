<script>
export default {
  data() {
    return {
      cardInstructors: [
        {
          img: "src/assets/img/instructor-mikehart-200x127.jpg",
          name: "Mike Hart",
          icons: ["facebook-f", "twitter", "instagram"],
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          img: "src/assets/img/instructor-johnsmith-200x127.jpg",
          name: "John Smith",
          icons: ["facebook-f", "twitter", "instagram"],
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          img: "src/assets/img/instructor-angelahart-200x127.jpg",
          name: "Angela Hart",
          icons: ["facebook-f", "twitter", "instagram"],
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      ],
    };
  },
};
</script>

<template>
  <!-- bottom -->
  <div class="bottom">
    <ul>
      <li v-for="card in cardInstructors">
        <!-- card -->
        <div class="card">
          <div class="img">
            <img :src="card.img" :alt="card.name" />
          </div>
          <h2>{{ card.name }}</h2>
          <div class="icon">
            <ul>
              <li v-for="icon in card.icons">
                <a href="#"><font-awesome-icon :icon="['fab', icon]" /></a>
              </li>
            </ul>
          </div>
          <div class="text">
            <p>{{ card.text }}</p>
          </div>
        </div>
        <!-- /card -->
      </li>
    </ul>
  </div>
  <!-- /bottom -->
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;

.bottom {
  width: 1180px;
  margin: 0 auto;
  margin-top: 90px;
  padding-bottom: 40px;

  ul {
    display: flex;
    gap: 10px;

    li {
      width: calc(100% / 3);

      .card {
        @include card;
        padding-right: 40px;
        padding-left: 40px;

        .img {
          margin-bottom: 30px;

          img {
            width: 100%;
            display: block;
          }
        }

        p {
          line-height: 35px;
        }

        .icon {
          margin: 20px 0;
          ul {
            display: flex;
            justify-content: center;
            gap: 20px;

            li {
              width: auto;
            }
          }
        }
      }
    }
    // seconodo elemento li
    li:nth-child(2) {
      .card {
        padding-bottom: 70px;
      }
    }
  }
}
</style>
