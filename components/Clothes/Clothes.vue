<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12 col-lg-4" v-for="(data, i) in passData" :key="i">
        <EachClothe :clotheData="data" />
      </div>
    </div>
  </div>
</template>

<script>
import EachClothe from "~/components/Clothes/Clothe.vue";
export default {
  props: ["passData"],
  components: {
    EachClothe
  }
};
</script>

<style></style>
