<template>
  <div id="myHome">
    <header id="headerCover">
      <div class="myOverlay"></div>
      <img src="~/static/images/header1.jpg" alt="Cover Image" />
      <div
        id="introContent"
        class="d-flex justify-content-center align-items-center"
      >
        <h2 class="mb-2">Welcome to fashion store</h2>
        <p>
          Here you can find the best clothes
          <br />fashion that's fit perfect on you
        </p>
        <p></p>
      </div>
    </header>
    <section id="someShoping" class="my-5">
      <Clothes :passData="proudcts" />
    </section>
  </div>
</template>

<script>
import Clothes from "~/components/Clothes/Clothes.vue";
export default {
  data() {
    return {
      proudcts: this.$store.state.clothes
    };
  },
  components: {
    Clothes
  }
};
</script>
<style lang="scss">
#headerCover {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 100%;
    height: 750px;
  }
  #introContent {
    color: #ffffff;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;
    h2 {
      @media screen and (max-width: 600px) {
        font-size: 22px;
      }
      text-transform: capitalize;
      font-size: 35px;
    }
  }
}
.myCloth {
  padding: 20px;
  border-right: 2px solid #ffffff;
  border-bottom: 2px solid #ffffff;
  margin-bottom: 20px;
  > img {
    width: 100%;
    height: 600px;
  }
  .textContent {
    h3 {
      text-transform: capitalize;
    }
  }
  .btnsActions {
    padding: 10px;
    > button {
      margin-right: 10px;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
}
</style>
