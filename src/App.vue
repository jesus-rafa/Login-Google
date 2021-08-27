<template>
  <header-main />
  <router-view/>
</template>

<script>

import HeaderMain from '@/components/includes/HeaderMain.vue'


export default {
  name: 'App',
  components: {
    HeaderMain
  }
}
</script>

<style lang="scss">
* {
  padding: 0px;
  margin: 0px;
}
</style>
