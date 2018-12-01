<template>
  
  <section 
    v-editable="story.content" 
    class="section blog">
    <div class="container">
      <h1 class="title is-1">{{ story.content.name }}</h1>
    
    
      <component
        v-if="story.content.component"
        :key="story.content._uid"
        :blok="story.content"
        :is="story.content.component"
      />
    </div>
  </section>

</template>

<script>
import storyblokLivePreview from '@/mixins/storyblokLivePreview'

export default {
  mixins: [storyblokLivePreview],
  // data() {
  //   return { story: { content: { body: '' } } }
  // },
  asyncData(context) {
    let version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'
    let endpoint = `cdn/stories/${context.params.language}/blog/${
      context.params.slug
    }`

    return context.app.$storyapi
      .get(endpoint, {
        version: version,
        cv: context.store.state.cacheVersion
      })
      .then(res => {
        console.log(res)
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
</style>
