<template>
  <section class="section">
    <div class="container">
      <h2 
        v-if="blok.title" 
        class="title is-2">{{ blok.title }}</h2>
    
      <no-ssr>
        <vue-gallery 
          :images="images" 
          :index="index" 
          :options="vuegalleryoptions"
          @close="index = null"/>
      </no-ssr>
      <div 
        v-editable="blok" 
        class="columns is-gapless is-multiline gallery">
      
        <div
          v-for="(image, imageIndex) in images"
          :key="imageIndex"
          :class="['column', images.length > 4 ? 'is-one-third-tablet  is-one-quarter-widescreen is-one-fifth-fullhd' : '' ,'gallery__item']"
          @click="index = imageIndex"
        >
          <div class="hovereffect">
            <img 
              :src="image.poster | resize('768x500/smart/filters:quality(20)')" 
              class="gallery__thumbnail-image" >

            <div class="overlay">
              
              <p>
                <span>{{ image.title }}</span>
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data: function() {
    return {
      vuegalleryoptions: { closeOnSlideClick: true },
      index: null
    }
  },
  computed: {
    images: function() {
      return this.blok.items.map(e => {
        return {
          title: e.title,
          description: e.description,
          poster: e.image,
          href: e.image
        }
      })
    }
  }
}
</script>

<style lang="scss">
.blueimp-gallery > .description {
  top: 3rem !important;
  left: 1rem !important;
}
.gallery {
  &__item {
    line-height: 0;
    cursor: pointer;
  }
}
.adsasd {
  box-sizing: border-box;
  display: inline-block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  // border: 1px solid #ebebeb;
  // margin: 5px;
}
.hovereffect {
  width: 100%;
  height: 100%;
  float: left;
  overflow: hidden;
  position: relative;
  text-align: center;
}

.hovereffect .overlay {
  position: absolute;
  overflow: hidden;
  width: 80%;
  height: 80%;
  left: 10%;
  top: 10%;
  border-bottom: 5px solid #d2232a;
  // border-top: 1px solid red;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: scale(0, 1);
  -ms-transform: scale(0, 1);
  transform: scale(0, 1);
}

.hovereffect:hover .overlay {
  opacity: 1;
  filter: alpha(opacity=100);
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}

.hovereffect img {
  display: block;
  position: relative;
  -webkit-transition: all 0.35s;
  transition: all 0.35s;
}

.hovereffect:hover img {
  filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="0.6" /><feFuncG type="linear" slope="0.6" /><feFuncB type="linear" slope="0.6" /></feComponentTransfer></filter></svg>#filter');
  filter: brightness(0.6);
  -webkit-filter: brightness(0.6);
}

// .hovereffect h2 {
//   text-transform: uppercase;
//   text-align: center;
//   position: relative;
//   font-size: 17px;
//   background-color: transparent;
//   color: #fff;
//   padding: 1em 0;
//   opacity: 0;
//   filter: alpha(opacity=0);
//   -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
//   transition: opacity 0.35s, transform 0.35s;
//   -webkit-transform: translate3d(0, -100%, 0);
//   transform: translate3d(0, -100%, 0);
// }

.hovereffect a,
.hovereffect p {
  color: #fff;
  font-weight: bold;
  padding: 1em 0;
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
}

.hovereffect p {
  position: absolute;
  bottom: 0;
  left: 0;
}

.hovereffect:hover a,
.hovereffect:hover p,
.hovereffect:hover h2 {
  opacity: 1;
  filter: alpha(opacity=100);
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
</style>
