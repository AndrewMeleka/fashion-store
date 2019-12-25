<template>
  <div id="loginPage">
    <div class="container">
      <template v-if="!myName">
        <div class="containAlerts my-5 specailAlert">
          <div class="alert blue">
            Hello, Of course this website for testing only so you can enter
            email: test@dev99.com, password: test
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <input type="text" v-model="email" placeholder="Email" />
          </div>
          <div class="col-sm-12">
            <input type="password" v-model="password" placeholder="Password" />
          </div>
          <div class="col-sm-12">
            <button @click="letsLogin()" class="btn secondary">Login</button>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="containAlerts my-5 specailAlert">
          <div class="alert success">Hello {{ myName }}, your balance is {{ myMoney }}</div>
          <div class="my-4 actionBtns">
            <nuxt-link to="/" tag="button" class="btn secondary">
              <font-awesome-icon icon="store"></font-awesome-icon>Shopping Now !
            </nuxt-link>
            <nuxt-link to="/bought" tag="button" class="btn secondary">
              <font-awesome-icon icon="shopping-basket"></font-awesome-icon>View Items Bought
            </nuxt-link>
          </div>

          <button class="btn secondary my-4" @click="destoryUser()">
            <font-awesome-icon icon="sign-out-alt"></font-awesome-icon>Log out
          </button>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    letsLogin() {
      // you can post by axios to check user in database or no
      // do it later
      // now i will use simple if condation
      if (this.email === "test@dev99.com" && this.password === "test") {
        // if correct, collect all all user information and put it in store
        const myAllInfo = {
          name: "Test User",
          email: "test@@dev99.com",
          password: "test",
          moneyHave: 1200,
          historyBuy: []
        };
        this.$store.dispatch("user/fetchUserInfo", myAllInfo);
      } else {
        // wrong inputs
        const alertMsg = {
          body: "Wrong email or Password",
          class: ["alert", "danger"]
        };
        this.$store.dispatch("alerts/alertAdd", alertMsg);
      }
    },
    destoryUser() {
      this.$store.dispatch("user/destroyUser");
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

<style lang="scss" scoped>
.specailAlert {
  position: relative !important;
  z-index: 99;
}
#loginPage {
  margin-top: 10%;
}
.row {
  > div {
    margin-bottom: 2%;
    display: flex;
    justify-content: center;
  }
}
</style>
