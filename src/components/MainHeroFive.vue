<script>
export default {
  data() {
    return {
      title: "Latest News",
      buttonText: "More From The Blog",
      imgTriangolo: "src/assets/img/latestnews-bottom-1200x105.png",
      news: [
        {
          img: "src/assets/img/blog-choosecar-320x202.jpg",
          title: "What car to Start With?",
          date: "February 7th, 2019 |",
          comments: "0 comments",
          text: "Lorem ipsum dolor sit amet, consecteur adipiscing",
        },
        {
          img: "src/assets/img/blogpost-10and2-320x202.jpg",
          title: "Avada Driving School Expanding",
          date: "February 7th, 2019 |",
          comments: "0 comments",
          text: "Lorem ipsum dolor sit amet, consecteur adipiscing",
        },
      ],
    };
  },
};
</script>

<template>
  <!-- hero five -->
  <div class="hero five">
    <div class="cont">
      <!-- news -->
      <div class="news">
        <h2>Latest News</h2>
        <!-- news list -->
        <ul>
          <li v-for="card in news">
            <!-- card -->
            <div class="card">
              <img :src="card.img" :alt="card.title" />
              <h3>{{ card.title }}</h3>
              <div class="subtitle">
                <p>{{ card.date }}</p>
                <p class="comments">{{ card.comments }}</p>
              </div>
              <p>{{ card.text }}t</p>
            </div>
            <!-- /card -->
          </li>
        </ul>
        <!-- /news list -->
        <button>{{ buttonText }}</button>
      </div>
      <!-- /news -->
      <!-- triangolo -->
      <div class="triangolo">
        <img :src="imgTriangolo" alt="tringolo" />
      </div>
      <!-- /triangolo -->
    </div>
  </div>
  <!-- /hero five -->
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;

.five {
  background-image: url("src/assets/img/latestnews-background.jpg");
  background-position: bottom;
  background-size: cover;
  height: 880px;
  padding-top: 20px;
}

.cont {
  width: 1180px;
  margin: 0 auto;
  margin-top: -50px;

  .triangolo {
    width: 100%;

    img {
      width: 100%;
      display: block;
    }
  }
  .news {
    @include card;
    border-radius: 10px 10px 0 0;
    border-top: 5px solid $gumbo;

    button {
      @include buttonOne;
      margin-top: 70px;
    }

    h2 {
      font-size: 28px;
      margin-bottom: 70px;
    }
  }

  ul {
    @include flex-row-center;
    justify-content: center;
    gap: 30px;

    .card {
      width: 100%;

      img {
        width: 100%;
        display: block;
      }

      h3 {
        margin: 20px 0;
        color: $bay;
      }

      .subtitle {
        margin: 0 auto;
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
        gap: 5px;

        .comments {
          color: $bay;
        }
      }
    }
  }
}
</style>
