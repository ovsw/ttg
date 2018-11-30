<template>
  <div class="buttons">
    <nuxt-link 
      :class="[$store.state.language == 'en' ? 'is-active' : '', 'button', 'is-primary']"
      to="/en/">
      en
    </nuxt-link>
    <nuxt-link 
      :class="[$store.state.language == 'es' ? 'is-active' : '', 'button', 'is-primary']" 
      to="/es/">
      es
    </nuxt-link>
    <nuxt-link 
      :class="[$store.state.language == 'ro' ? 'is-active' : '', 'button', 'is-primary']" 
      to="/ro/">
      ro
    </nuxt-link>
  </div>
</template>
