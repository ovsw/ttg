<template>
  <div>
    
    <hero
      v-if="$store.state.language == 'en'"
      title="&nbsp;&nbsp;Unique <br> &nbsp;&nbsp;&nbsp; guided <br>TourS" 
      of="of" 
      subtitle="Timisoara, Banat &amp; Transylvania"
      paragraph="An experience that'll shock your pants off <br> and leave you coming back for more!"
      cta_button_text="Find your tour"
    />
    <hero
      v-if="$store.state.language == 'es'"
      title="&nbsp;&nbsp;Único <br> &nbsp;&nbsp;&nbsp; guiado <br>Viajes" 
      of="de" 
      subtitle="Timisoara, Banat y Transilvania"
      paragraph="¡Una experiencia que te quitará los pantalones <br> y te hará volver por más!"
      cta_button_text="Encuentra tu tour"
    />
    <hero
      v-if="$store.state.language == 'ro'"
      title="Tururi <br> &nbsp;&nbsp;turistice <br>Unice" 
      of="prin" 
      subtitle="Timisoara, Banat &amp; Transilvania"
      paragraph="Experiente ce te vor lasa lat si doritor de mai mult!"
      cta_button_text="Descopera Turul Tau"
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
  // data() {
  //   return { story: { content: {} } }
  // },
  asyncData(context) {
    // Check if we are in the editor mode
    let version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'
    let endpoint = `cdn/stories/${context.params.language}`

    // Load the JSON from the API
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
