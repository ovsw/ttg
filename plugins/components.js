import Vue from 'vue'
import Page from '~/components/pages/Page.vue'
import Blog from '~/components/pages/Blog.vue'
import Tour from '~/components/pages/Tour.vue'

import Teaser from '~/components/sections/Teaser.vue'
import Grid from '~/components/sections/Grid.vue'
import Markdownsection from '~/components/sections/Markdownsection.vue'
import Gallery from '~/components/sections/Gallery.vue'
import Tourslist from '~/components/sections/Tourslist.vue'

import Feature from '~/components/elements/Feature.vue'
import Slide from '~/components/elements/Slide.vue'
import Markdowntext from '~/components/elements/Markdowntext.vue'

import SitemapItem from '~/components/SitemapItem.vue'

Vue.component('page', Page)
Vue.component('blog', Blog)
Vue.component('tour', Tour)

Vue.component('teaser', Teaser)
Vue.component('grid', Grid)
Vue.component('markdownsection', Markdownsection)
Vue.component('gallery', Gallery)
Vue.component('tourslist', Tourslist)

Vue.component('feature', Feature)
Vue.component('slide', Slide)
Vue.component('markdowntext', Markdowntext)

Vue.component('sitemap-item', SitemapItem)
