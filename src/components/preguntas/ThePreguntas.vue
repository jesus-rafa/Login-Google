<template>
  <div class="preguntas">
    <ul class="preguntas__lista">
      <li
        class="preguntas__lista__item"
        v-for="pregunta in listaPreguntas"
        :key="pregunta.id"
      >
        <a
          @click="seleccionarPregunta(pregunta)"
          href="#"
          class="preguntas__lista__item__link"
        >
          {{ pregunta.pregunta }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import apiPreguntas from "@/api/preguntas.js";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ThePreguntas",
  computed: {
    ...mapGetters({
      preguntas: "preguntas",
    }),
  },
  methods: {
    ...mapActions({
      listaPreguntas: "listaPreguntas",
      seleccionarPregunta: "seleccionarPregunta",
    }),
    cargarPreguntas: function() {
      apiPreguntas.listaPreguntas().then((response) => {
        this.listaPreguntas(response.data);
      });
    },
  },
  beforeMount() {
    this.cargarPreguntas();
  },
};
</script>

<style lang="scss" scoped>
.preguntas {
  padding-top: 1em;
  padding-bottom: 1em;
  overflow-y: auto;
  border-right: solid 1px $color-1;
  min-height: 85vh;
  margin: 0px;
  &__lista {
    list-style: none;
    padding-left: 2em;
    padding-right: 2em;
    &__item {
      display: block;
      &__link {
        display: block;
        padding: 10px 10px;
        text-decoration: none;
        color: $color-5;
        font-weight: bold;
        font-family: $ff-3;
        font-size: 18px;
        &:hover {
          background: $color-2;
        }
      }
    }
  }
}
</style>
