<template>
  <section class="section content">
    <div 
      v-editable="blok" 
      class="container">
      <h1>{{ blok.name }}</h1>
      <p>{{ blok.short_description }}</p>
      <p>{{ blok.duration }}</p>
      <p>{{ blok.size }}</p>
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
