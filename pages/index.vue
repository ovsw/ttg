<template>
  <div>
    <hero
      title="&nbsp;&nbsp;Unique <br> &nbsp;&nbsp;&nbsp; guided <br>TourS" 
      of="of" 
      subtitle="Timisoara, Banat &amp; Transylvania"
      paragraph="An experience that'll shock your pants off <br> and leave you coming back for more!"
    />
    <!-- <component
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
      :is="story.content.component"
    /> -->
  </div>
</template>

<script>
import storyblokLivePreview from '@/mixins/storyblokLivePreview'
import Hero from '@/components/elements/Hero'

export default {
  components: {
    Hero
  },
  mixins: [storyblokLivePreview],
  data() {
    return { story: { content: {} } }
  },
  asyncData(context) {
    // Check if we are in the editor mode
    let version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'

    // Load the JSON from the API
    return context.app.$storyapi
      .get('cdn/stories/en', {
        version: version,
        cv: context.store.state.cacheVersion
      })
      .then(res => {
        return res.data
      })
      .catch(res => {
        context.error({
          statusCode: res.response.status,
          message: res.response.data
        })
      })
  }
}
</script>
