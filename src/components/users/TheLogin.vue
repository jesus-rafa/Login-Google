<template>
  <div class="login">
    <h3 class="login__title">
      Accede para comenzar
    </h3>
    <button class="login__btn" @click="loginGoogle()">
      Entrar con google
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import firebase from "firebase/app";
import "firebase/auth";
import { config } from "@/firebaseKeys.js";

export default {
  name: "TheLogin",
  components: {
    ...mapGetters({
      isLoggedIn: "isLoggedIn",
    }),
  },
  methods: {
    ...mapActions({
      toLogin: "toLogin",
    }),
    loginGoogle: function() {
      firebase.initializeApp(config);

      var provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth().useDeviceLanguage();

      var self = this;
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
          //console.log(result);

          var user = result.user;
          let usuario = {
            email: user.email,
            name: user.displayName,
            picture: user.photoURL,
          };
          var credential = result.credential;
          var token = credential.accessToken;
          localStorage.setItem("token", token);

          self.toLogin(usuario);

          self.$router.push({ name: "panel-pregunta" });
        });
    },
  },
  beforeMount() {
    if (this.isLoggedIn) {
      this.$router.push({ name: "panel-pregunta" });
    }
  },
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &__title {
    font-family: $ff-2;
    font-size: 24px;
    font-weight: bold;
    color: $color-3;
    margin-bottom: 1em;
  }
  &__btn {
    background: $color-4;
    padding: 10px 30px;
    border-radius: 10px;
    font-family: $ff-2;
    font-weight: bold;
    &:hover {
      cursor: pointer;
      opacity: 0.6;
    }
  }
}
</style>
