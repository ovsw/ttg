<template>
  <section class="section">
    <div class="container">
      <div 
        v-editable="blok" 
        class="columns">
        <component 
          v-for="blok in blok.columns" 
          :key="blok._uid" 
          :blok="blok" 
          :is="blok.component"/>
      </div>
    </div>
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
  }
}
</script>
