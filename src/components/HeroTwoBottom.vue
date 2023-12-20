<script>
export default {
  data() {
    return {
      cardsPerc: [
        {
          class: "card95",
          number: "95%",
          text: "Pass Rate",
        },
        {
          class: "card100",
          number: "100%",
          text: "Referral Rate",
        },
        {
          class: "card0",
          number: "0%",
          text: "Accident Rate",
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
      <!-- cards -->
      <li v-for="card in cardsPerc">
        <div class="card" :class="card.class">
          <div class="circle">
            <h2>{{ card.number }}</h2>
          </div>
          <h4>{{ card.text }}</h4>
        </div>
      </li>
      <!-- /cards -->
    </ul>
  </div>
  <!-- /bottom -->
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;
.bottom {
  width: 1180px;
  margin: 0 auto;
  padding-bottom: 30px;
  margin-top: -100px;

  ul {
    @include flex-row-center;
    justify-content: center;
    gap: 10px;

    li {
      width: calc(100% / 3);

      .card {
        height: 420px;
        @include card;

        h4 {
          font-size: 18px;
          text-transform: uppercase;
          margin-top: 50px;
        }

        .circle {
          margin: 0 auto;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: radial-gradient(
              closest-side,
              white 90%,
              transparent 80% 100%
            ),
            conic-gradient($bay 100%, $athens 0);

          h2 {
            line-height: 200px;
          }
        }
      }

      .card95 {
        .circle {
          background: radial-gradient(
              closest-side,
              white 90%,
              transparent 80% 100%
            ),
            conic-gradient($bay 95%, $athens 0);
        }
      }
      .card0 {
        .circle {
          background: radial-gradient(
              closest-side,
              white 90%,
              transparent 80% 100%
            ),
            conic-gradient($bay 2%, $athens 0);
        }
      }
    }
  }
}
</style>
