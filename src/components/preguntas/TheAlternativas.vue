<template>
  <div class="alternativas">
    <ul v-if="preguntaSeleccionada" class="alternativas__lista">
      <li
        class="alternativas__lista__item"
        v-for="respuesta in preguntaSeleccionada.respuestas"
        :key="respuesta.id"
      >
        <a href="#" class="alternativas__lista__item__link">
          <span class="alternativas__lista__item__link__text">
            {{ respuesta.respuesta }}
          </span>
          <span class="alternativas__lista__item__link__amount">
            $ {{ respuesta.price }}
          </span>
          <span class="alternativas__lista__item__link__action">
            Seleccionar
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TheAlternativas",
  computed: {
    ...mapGetters({
      preguntaSeleccionada: "preguntaSeleccionada",
    }),
  },
};
</script>

<style lang="scss" scoped>
.alternativas {
  display: flex;
  justify-content: center;
  align-items: center;
  &__lista {
    list-style: none;
    &__item {
      display: block;
      &__link {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        margin: 1em;
        text-decoration: none;
        color: $color-5;
        &:hover {
          background: $color-1;
        }
        &__text {
          font-family: $ff-3;
          font-weight: bold;
          margin-right: 2em;
        }
        &__amount {
          font-weight: bold;
          font-size: 25px;
          margin-right: 2em;
          color: $color-2;
          font-family: $ff-2;
        }
        &__action {
          padding: 5px 20px;
          background: $color-2;
          color: $color-5;
          font-weight: bold;
          border-radius: 5px;
          font-family: $ff-3;
        }
      }
    }
  }
}
</style>
