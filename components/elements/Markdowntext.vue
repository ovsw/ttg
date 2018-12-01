<template>
  <div 
    v-editable="blok"
    class="content" 
    v-html="body"/>
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
