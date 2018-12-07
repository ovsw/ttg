<template>
  <div class="buttons">
    <nuxt-link 
      :class="[$store.state.language == 'en' ? 'active' : '', 'button', 'langBtn']"
      to="/en/">
      en
    </nuxt-link>
    <nuxt-link 
      :class="[$store.state.language == 'es' ? 'active' : '', 'button', 'langBtn']" 
      to="/es/">
      es
    </nuxt-link>
    <nuxt-link 
      :class="[$store.state.language == 'ro' ? 'active' : '', 'button', 'langBtn']" 
      to="/ro/">
      ro
    </nuxt-link>
  </div>
</template>

<style lang="scss">
.langBtn {
  border: none;
  background-color: transparent;

  &.active {
    font-weight: bold;
    color: $ttgRed;
  }
}
</style>
