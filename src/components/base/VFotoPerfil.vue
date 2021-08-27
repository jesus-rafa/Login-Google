<template>
  <div class="foto">
    <img :src="imagen" class="foto__img" />
    <span class="foto__name">{{ name }}</span>
  </div>
</template>

<script>
export default {
  name: "VFotoPerfil",
  props: {
    imagen: String,
    name: String,
  },
};
</script>

<style lang="scss" scoped>
.foto {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &__img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-bottom: 5px;
  }
  &__name {
    font-size: 14px;
    font-family: $ff-3;
  }
}
</style>
