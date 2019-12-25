<template>
  <div class="myCloth">
    <img :src="clotheData.imageSrc" alt="test clothes" />
    <div class="textContent mt-3">
      <h3>
        <span style="font-weight:bold">{{ clotheData.title }}</span>
        <span class="cost">{{ clotheData.cost }}$</span>
      </h3>
      <p>{{ clotheData.body }}</p>
    </div>
    <div class="btnsActions mt-3">
      <button
        class="btn secondary"
        @click="ToCart(clotheData.title, !clotheData.inCart)"
      >{{ clotheData.inCart ? "Delete From Cart" : "Add To Cart" }}</button>
      <button class="btn primary" @click="payMe(clotheData)">Buy Now !</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["clotheData"],
  methods: {
    ToCart(title, status) {
      const alertMsg = {
        body: `This item ${status ? "Added" : "Removed"} to your cart`,
        class: ["alert", "success"]
      };
      this.$store
        .dispatch("fetchAndDeleteSelected", {
          title: title,
          changeIn: status
        })
        .then(this.$store.dispatch("alerts/alertAdd", alertMsg));
    },
    payMe(Items) {
      if (!this.myName) {
        // user need to login first to can pay
        const alertMsg = {
          body: "Please Login first to can pay",
          class: ["alert", "danger"]
        };
        this.$store.dispatch("alerts/alertAdd", alertMsg);
        this.$router.push("/login");
      } else {
        //user already logged in
        // user doesn't have enough money
        if (this.myMoney < this.clotheData.cost) {
          const alertMsg = {
            body: "Sorry, you don't have enough money",
            class: ["alert", "danger"]
          };
          this.$store.dispatch("alerts/alertAdd", alertMsg);
        } else {
          this.$store.dispatch("user/paymenytHistory", Items);
          this.$store.dispatch("user/minusMoney", this.clotheData.cost);
          const alertMsg = {
            body: "Congrats, payment success view your bought items now",
            class: ["alert", "success"]
          };
          this.$store.dispatch("alerts/alertAdd", alertMsg);
        }
      }
    }
  },
  computed: {
    myName() {
      return this.$store.getters["user/getUsername"];
    },
    myMoney() {
      return this.$store.getters["user/getMyMoney"];
    }
  }
};
</script>

<style></style>
