<template>
  <section class="section">
    <div class="container">
      <div 
        v-for="blogPost in data.stories" 
        :key="blogPost.content._uid" 
        class="blog__overview">
        <h2 class="title is-2">
          <nuxt-link 
            :to="'/' + blogPost.full_slug" 
            class="blog__detail-link">
            {{ blogPost.content.name }}
          </nuxt-link>
        </h2>
        <small>
          {{ blogPost.published_at }}
        </small>
        <p>
          {{ blogPost.content.intro }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  // data() {
  //   return { total: 0, data: { stories: [] } }
  // },
  asyncData(context) {
    let version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'

    return context.app.$storyapi
      .get('cdn/stories', {
        version: version,
        starts_with: `${context.store.state.language}/blog/`,
        cv: context.store.state.cacheVersion
      })
      .then(res => {
        //console.log(res)
        return res
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
