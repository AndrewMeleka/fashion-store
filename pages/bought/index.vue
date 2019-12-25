<template>
  <div id="boughtItems">
    <div class="container">
      <h2 style="margin-top:10px">All Clothes I Have</h2>
      <ul>
        <li v-for="item in historyBuy" :key="item">
          {{ item }}
        </li>
      </ul>
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
    font-size: 35px;
    padding: 15px;
    border: 1px solid #fdcb6e;
  }
}
</style>
