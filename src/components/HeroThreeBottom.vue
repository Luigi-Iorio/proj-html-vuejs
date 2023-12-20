<script>
export default {
  data() {
    return {
      cardInstructors: [
        {
          img: "src/assets/img/instructor-mikehart-200x127.jpg",
          name: "Mike Hart",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          img: "src/assets/img/instructor-johnsmith-200x127.jpg",
          name: "John Smith",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          img: "src/assets/img/instructor-angelahart-200x127.jpg",
          name: "Angela Hart",
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
              <!-- //TODO importare fontawesome -->
              <li v-for="n in 3">
                <a href="#">i</a>
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
        height: 450px;

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
          ul {
            display: flex;
            justify-content: center;

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
        height: 470px;
      }
    }
  }
}
</style>
