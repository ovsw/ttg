<template>
  <div>
    <homepage/>
    <section class="section">
      <div class="container columns">
        <!-- <h1>{{ tours_uuids_list }}</h1> -->
        <div 
          v-for="tour in stories" 
          :key="tour.id" 
          class="column">
          {{ tour.name }}
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Homepage from '@/pages/index.vue'

export default {
  components: {
    homepage: Homepage
  },
  props: {
    blok: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data() {
    return { stories: [] }
  },
  asyncData(context) {
    let version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'
    console.log('running query')
    return context.app.$storyapi
      .get('cdn/stories', {
        version: version,
        by_uuids:
          'a0f2508e-3b0c-40ea-b7a7-0365b678f38d,ee245e8d-1d6a-4d8b-8a00-b3c64d5dc9ab',
        // starts_with: `${context.store.state.language}/blog/`,
        cv: context.store.state.cacheVersion
      })
      .then(res => {
        console.log(res)
        return res
      })
      .catch(res => {
        context.error({
          statusCode: res.response.status,
          message: res.response.data
        })
      })
  },
  computed: {
    tours_uuids_list: function() {
      return this.blok.tours_collection.join()
    }
  }
}
</script>
