<template>
  <div class="level-item  is-hidden-touch">
    <div class="dropdown is-hoverable">
      <div class="main-menu-item dropdown-trigger">
        <nuxt-link 
          :to="'/' + navitem.link.cached_url"
          :class="[ navitem.subitems.length == 0 ? 'is-arrowless': '','button','is-rounded']" 
          aria-haspopup="true" 
          aria-controls="dropdown-menu">
          <span>{{ navitem.name }}</span>
        </nuxt-link>
      </div>
      <div 
        v-if="navitem.subitems.length > 0"
        id="dropdown-menu" 
        class="dropdown-menu" 
        role="menu">
        <div class="dropdown-content">

          <nuxt-link 
            v-for="subitem in navitem.subitems"
            :key="subitem.name"
            :to="'/' + subitem.link.cached_url"
            class="dropdown-item">
            {{ subitem.name }}
          </nuxt-link>
                
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    navitem: {
      type: Object,
      default: function() {
        return {}
      }
    }
  }
}
</script>

<style lang="scss">
.main-menu-item a.button.is-rounded:not(.is-arrowless) {
  padding-right: 2.5em;
  text-decoration: none;
}
.main-menu-item a:not(.is-arrowless)::after {
  border: 3px solid transparent;
  border-radius: 2px;
  border-right: 0;
  border-top: 0;
  content: ' ';
  display: block;
  height: 0.625em;
  margin-top: -0.4375em;
  pointer-events: none;
  position: absolute;
  top: 50%;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-transform-origin: center;
  transform-origin: center;
  width: 0.625em;
  border-color: red;
  margin-top: -0.375em;
  right: 1.125em;
}
</style>
