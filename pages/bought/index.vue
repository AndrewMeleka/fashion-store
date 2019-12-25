<template>
  <div id="boughtItems">
    <div class="container">
      <template v-if="historyBuy.length > 0">
        <h2 style="margin-top:50px">I Have</h2>
        <ul>
          <li v-for="item in historyBuy" :key="item">
            <img :src="item.imageSrc" />
            <div class="textItem">
              <h2>{{ item.title }}</h2>
              <p>{{item.body}}</p>
            </div>
          </li>
        </ul>
      </template>
      <div v-else class="containAlerts">
        <div class="alert danger">
          <p class="mr-auto">Ops, you don't have any items</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      historyBuy: this.$store.getters["user/getHistory"]
    };
  }
};
</script>

<style lang="scss" scoped>
ul {
  margin: 5% 0;
  li {
    display: flex;
    font-size: 35px;
    padding: 20px;
    border-bottom: 2px dashed #fdcb6e;
    img {
      width: 150px;
      height: 150px;
      margin-right: 25px;
      border-radius: 200%;
    }
    .textItem {
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      h2 {
        font-size: 24px;
      }
      p {
        font-size: 18px;
      }
    }
  }
}
.containAlerts {
  position: relative;
  margin-top: 5%;
  .alert {
    width: 100% !important;
  }
}
</style>
