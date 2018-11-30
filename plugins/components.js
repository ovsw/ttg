import Vue from 'vue'
import Page from '~/components/pages/Page.vue'
import Blog from '~/components/pages/Blog.vue'
import Teaser from '~/components/bloks/Teaser.vue'
import Grid from '~/components/bloks/Grid.vue'
import Feature from '~/components/bloks/Feature.vue'
import Slide from '~/components/bloks/Slide.vue'
import Markdown from '~/components/bloks/Markdown.vue'
import SitemapItem from '~/components/SitemapItem.vue'

Vue.component('page', Page)
Vue.component('blog', Blog)
Vue.component('teaser', Teaser)
Vue.component('grid', Grid)
Vue.component('feature', Feature)
Vue.component('slide', Slide)
Vue.component('markdown', Markdown)
Vue.component('sitemap-item', SitemapItem)
