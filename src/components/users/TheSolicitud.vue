<template>
  <div class="cell grid-x solicitud">
    <p class="solicitud__email">E-mail: neunapp.servicios@gmail.com</p>
    <input 
      type="text"
      class="solicitud__input"
      placeholder="Usuario telegram">
    <input 
      type="text"
      class="solicitud__input"
      placeholder="Nombres">
    <textarea 
      cols="30" 
      rows="10"
      class="solicitud__mensaje"
      placeholder="Escribe un mensaje"></textarea>
    
    <button class="solicitud__btn">Solicitar Producto</button>
  </div>
</template>

<script>
  export default {
    name: 'TheSolicitud'
  }
</script>

<style lang="scss" scoped>
  .solicitud {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &__email {
      font-size: 18px;
      font-family: $ff-2;
      color: $color-2;
      font-weight: bold;
      margin: 10px;
    }
    &__input {
      height: 35px;
      padding-left: 10px;
      font-size: 18px;
      font-family: $ff-3;
      margin: 1em;
      border-radius: 5px $color-1;
    }
    &__mensaje {
      font-family: $ff-3;
      font-size: 18px;
      color: $color-5;
      padding: 10px;
      margin: 1em;
    }
    &__btn {
      padding: 10px 30px;
      background: $color-2;
      color: $color-5;
      border-radius: 5px;
      &:hover {
        opacity: 0.6;
        cursor: pointer;
      }
    }
  }
</style>