<template>
  <div>
    <section class="hero is-large hompage-hero">
      <div class="hero-head"/>

      <div class="hero-body">
        <div class="container">
          <p class="title">
            Guided Tours of Timisoara, Banat & Transylvania
          </p>
          <p class="subtitle">
            Contrasts which will shock your pants off and leave you wanting to come back for more!
          </p>
        </div>
      </div>

      <!-- <div class="hero-foot">
        <nav class="tabs is-boxed is-fullwidth">
          <div class="container">
            <ul>
              <li class="is-active">
                <a>City Tours</a>
              </li>
              <li>
                <a>Banat Tours</a>
              </li>
              <li>
                <a>Transylvania Tours</a>
              </li>
              
            </ul>
          </div>
        </nav>
      </div> -->
    </section>
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

export default {
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

<style lang="scss">
.hompage-hero {
  background: url('/images/ttg-home.jpg') no-repeat center right;
  background-size: 33em;
}
</style>
