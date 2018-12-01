<template>
  <div 
    v-editable="blok" 
    class="column feature">
    <img 
      :src="resizedIcon" 
      class="feature__icon">
    <h1 class="title is-3">{{ blok.name }}</h1>
    <div class="feature__description">
      {{ blok.description }}
    </div>
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
  },
  computed: {
    resizedIcon() {
      if (typeof this.blok.icon !== 'undefined') {
        return (
          '//img2.storyblok.com/80x80/filters:fill(transparent):format(png)' +
          this.blok.icon.replace('//a.storyblok.com', '')
        )
      } else {
        return 'https://via.placeholder.com/80', ''
      }
      return null
    }
  }
}
</script>

<style lang="scss">
.feature {
  text-align: center;
  padding: 30px 10px 100px;
}

.feature__icon {
  max-width: 80px;
}
</style>
