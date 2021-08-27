<template>
  <div class="header">
    <a href="/" class="header__logo">
      Mi Empresa
    </a>
    <h3 class="header__amount">
      Monto: $ 200.50
    </h3>
    <div v-if="userData">
      <v-foto-perfil :imagen="userData.picture" :name="userData.name" />
    </div>
    <h3 v-if="userData" class="header__text">{{ userData.email }}</h3>
  </div>
</template>

<script>
import apiUsers from "@/api/users";
import { mapGetters, mapActions } from "vuex";
import VFotoPerfil from "@/components/base/VFotoPerfil.vue";

export default {
  name: "HeaderMain",
  components: {
    VFotoPerfil,
  },
  computed: {
    ...mapGetters({
      userData: "userData",
    }),
  },
  methods: {
    ...mapActions({
      retrieveUser: "retrieveUser",
    }),
  },
  beforeMount() {
    if (this.isLoggedIn) {
      this.retrieveUser();
    }
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em 10px;
  background: $color-1;
  @include desde($medium) {
    padding: 2em;
  }
  &__logo {
    font-family: $ff-1;
    font-size: 15px;
    font-weight: bold;
    text-decoration: none;
    color: $color-5;
    @include desde($medium) {
      font-size: 30px;
    }
  }
  &__amount {
    font-size: 14px;
    font-weight: bold;
    color: $color-5;
    font-family: $ff-2;
    margin: 0px;
    @include desde($medium) {
      font-size: 35px;
    }
  }
  &__text {
    font-size: 14px;
    font-family: $ff-3;
    color: $color-5;
    margin: 0px;
    @include desde($medium) {
      font-size: 30px;
    }
  }
}
</style>
