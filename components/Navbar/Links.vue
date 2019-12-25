<template>
  <ul>
    <nuxt-link to="/" tag="li">
      <font-awesome-icon icon="store" />
      Shopping
    </nuxt-link>
    <nuxt-link to="/login" tag="li">
      <font-awesome-icon icon="sign-in-alt" /> Login
    </nuxt-link>
    <li
      @click="checkNotEmpty()"
      class="btn secondary"
      :style="{ border: listCart ? '1px solid #fdcb6e' : 'none' }"
    >
      <font-awesome-icon icon="shopping-cart" /> Cart
    </li>

    <div class="cartList" v-if="listCart">
      <h3>Cart List :</h3>
      <ul>
        <li
          class="d-flex"
          @click="deleteItemCart(item.title)"
          v-for="(item, i) in fillterSelected"
          :key="'item' + i"
        >
          <h3>{{ item.title }}</h3>
          <h4 class="ml-auto">{{ item.cost }}$</h4>
        </li>
      </ul>
      <div v-if="allCost" class="d-flex flex-column justify-content-center">
        <h4 class="my-2">
          <font-awesome-icon icon="money-bill-alt"></font-awesome-icon>
          Total Cost {{ allCost }} $ / Balance {{ myMoney }}
        </h4>
        <button @click="payMe(fillterSelected)" class="btn secondary smoothely">
          Pay Now
        </button>
      </div>
    </div>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      listCart: false
    };
  },
  methods: {
    deleteItemCart(title) {
      return this.$store.dispatch("fetchAndDeleteSelected", {
        title: title,
        changeIn: false
      });
    },
    checkNotEmpty() {
      if (!this.fillterSelected.length > 0 && !this.listCart) {
        const alertMsg = {
          body: "You don't have any item, try add one",
          class: ["alert", "danger"]
        };
        this.$store.dispatch("alerts/alertAdd", alertMsg);
        this.listCart = false;
      } else {
        this.listCart = !this.listCart;
      }
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
        if (this.myMoney < this.allCost) {
          const alertMsg = {
            body: "Sorry, you don't have enough money",
            class: ["alert", "danger"]
          };
          this.$store.dispatch("alerts/alertAdd", alertMsg);
        } else {
          this.$store.dispatch("user/paymenytHistory", Items);
          this.$store.dispatch("user/minusMoney", this.allCost);
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
    allCost() {
      return this.$store.getters.allCostedInCart;
    },
    fillterSelected() {
      const getAllClothes = this.$store.state.clothes,
        miniArr = [];
      getAllClothes.forEach(element => {
        if (element.inCart) {
          miniArr.push(element);
        }
      });
      return miniArr;
    },
    myName() {
      return this.$store.getters["user/getUsername"];
    },
    myMoney() {
      return this.$store.getters["user/getMyMoney"];
    }
  }
};
</script>
<style lang="scss" scoped>
.primary {
  &:hover {
    color: #000 !important;
    border: none;
  }
}
.smoothely {
  box-shadow: 1px 1px 10px #000;
  &:hover {
    background-color: #000 !important;
    border: none !important;
    box-shadow: 1px 1px 2px #000;
  }
}
</style>
