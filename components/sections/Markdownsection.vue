<template>
  <section class="section">
    <div 
      v-editable="blok"
      class="container content" 
      v-html="body"/>
  </section>
</template>

<script>
import marked from 'marked'

export default {
  props: {
    blok: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  computed: {
    body() {
      return marked(this.blok.text)
    }
  }
}
</script>
