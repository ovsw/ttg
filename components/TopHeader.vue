<template>
  <div>
    <header>
      <mobile-nav/>

      <nav class="topmenuLevel level is-mobile">

        <main-menu-dropdown 
          v-for="(navitem, index) in $store.state.settings.main_navi" 
          v-if="index < 3"
          :key="index" 
          :navitem="navitem"
        />

        <a 
          class="level-item has-text-centered " 
          href="/">
          
          <img 
            src="//a.storyblok.com/f/50764/255x77/778bcd845b/ttg-logo-web.png" 
            alt="" 
            style="height: 60px;">
        </a>
        
        <main-menu-dropdown 
          v-for="(navitem, index) in $store.state.settings.main_navi" 
          v-if="index > 2"
          :key="navitem.name" 
          :navitem="navitem"
        />

        <p class="level-right has-text-centered is-hidden-desktop">
          <mobile-burger />
        </p>

      </nav>
      <nav class="level is-mobile topbar">
        <!-- Left side -->
        <div class="level-left"/>

        <!-- Right side -->
        <div class="level-right">
          <div class="level-item">
            <language-buttons/>
          </div>
      </div></nav>
    
    </header>
    
  </div>
</template>

<script>
import MobileNav from '@/components/elements/MobileNav.vue'
import MobileBurger from '@/components/elements/MobileBurger.vue'
import MainMenuDropdown from '@/components/elements/MainMenuDropdown.vue'
import LanguageButtons from '@/components/elements/LanguageButtons.vue'

export default {
  components: {
    MobileNav,
    MobileBurger,
    MainMenuDropdown,
    LanguageButtons
  }
}
</script>

<style lang="scss">
.level.topmenuLevel {
  padding-top: 1.5rem;
}

@media only screen and (max-width: 1023px) {
  .level.topmenuLevel {
    margin-bottom: 0;
    padding-top: 0;
  }
}

// @media screen and (min-width: 1088px) {
//   .navbar-burger {
//     display: block;
//   }
// }

// @media only screen and (max-width: 600px) {
//   .mm-menu {
//     height: calc(100% - 108px) !important;
//   }
// }
.topbar {
  background-color: $ttgLightRed;
}
</style>
