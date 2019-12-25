<template>
  <div>
    <!-- NavBar -->
    <nav id="myNav">
      <div class="container-fluid d-flex align-items-center">
        <div class="myLogo mr-auto">Fashion Store</div>
        <div class="containList">
          <button class="navBtn" @click="openDrawer = !openDrawer">
            &#9776;
          </button>
          <nav-links />
        </div>
      </div>
      <div id="drawerMobile" v-if="openDrawer">
        <nav-links />
      </div>
    </nav>
    <!-- alerts -->
    <template v-if="allAlerts.length > 0">
      <div class="containAlerts">
        <div
          v-for="(oneAlert, index) in allAlerts"
          :key="'al' + index"
          :class="[oneAlert.class]"
        >
          <p class="mr-auto">
            {{ oneAlert.body }}
          </p>
          <div class="icon">
            <font-awesome-icon
              icon="trash"
              @click="deleteMe(index)"
            ></font-awesome-icon>
          </div>
        </div>
      </div>
    </template>
    <!-- page view -->
    <div id="pageView">
      <nuxt />
    </div>
    <!-- footer -->
    <footer
      id="myFooter"
      class="d-flex justify-content-center align-items-center my-5"
    >
      <h1>Fashion Store</h1>
      <div>
        Created By
        <a href="https://developers99.com/" target="_blank">Developers99</a>
      </div>
    </footer>
  </div>
</template>
<script>
import NavLinks from "~/components/Navbar/Links";
export default {
  data() {
    return {
      openDrawer: false
    };
  },
  methods: {
    handleScroll(event) {
      let myNav = document.getElementById("myNav");
      if (window.scrollY > 400) {
        myNav.classList.add("navScroll");
      } else {
        myNav.classList.remove("navScroll");
      }
    },
    deleteMe(index) {
      return this.$store.dispatch("alerts/deleteAlert", { index });
    }
  },
  computed: {
    allAlerts() {
      return this.$store.getters["alerts/allAlerts"];
    }
  },
  components: {
    "nav-links": NavLinks
  },
  created() {
    if (process.client) {
      window.addEventListener("scroll", this.handleScroll);
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss">
.navBtn {
  padding: 10px;
  display: none;
  background-color: #000;
  border: none;
  font-size: 33px;
  color: #ffffff;
  border-radius: 20px;
  @media screen and (max-width: 600px) {
    display: block;
  }
  &:active,
  &:focus {
    border: none;
    outline: none;
  }
}
@media screen and (max-width: 600px) {
  .containList {
    ul {
      li {
        display: none;
      }
    }
  }
}
</style>
