<template>
  <div class="grid-x">
    <h3 class="cell title">Solicitar Producto</h3>
    <the-solicitud />
  </div>
</template>

<script>

  import TheSolicitud from '@/components/users/TheSolicitud.vue'

  export default {
    name: 'SolicitudPage',
    components: {
      TheSolicitud
    }
  }
</script>

<style lang="scss" scoped>

</style>