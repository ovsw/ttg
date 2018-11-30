<template>
  <section class="util__container">
    Hello From Blog
    <component 
      v-for="blok in blok.body" 
      :key="blok._uid" 
      :blok="blok" 
      :is="blok.component"/>
  </section>
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
  },
  computed: {}
}
</script>
