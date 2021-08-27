<template>
  <div class="grid-x">
    <div class="cell small-12 medium-4 large-3">
      <the-preguntas />
    </div>
    <div class="cell small-12 medium-8 large-9">
      <h3 class="cell title">Selecciona una respuesta:</h3>
      <the-alternativas />
    </div>
  </div>
</template>

<script>
import ThePreguntas from "@/components/preguntas/ThePreguntas.vue";
import TheAlternativas from "@/components/preguntas/TheAlternativas.vue";

export default {
  name: " PanelPreguntaView",
  components: {
    ThePreguntas,
    TheAlternativas,
  },
};
</script>

<style lang="scss" scoped></style>
