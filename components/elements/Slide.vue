<template>
  <div 
    v-editable="blok" 
    class="slide">
    <img :src="blok.image">
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      default: function() {
        return {}
      }
    }
  }
}
</script>

<style lang="scss">
.slide img {
  width: 100%;
}
</style>
