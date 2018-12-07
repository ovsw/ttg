<template>
  <section class="hero hompage-hero">
    <div class="hero-head"/>

    <div class="hero-body">
      <div class="columns">
        <div class="column is-5 is-offset-1  is-4-widescreen is-3-fullhd  is-offset-2-fullhd hompage-hero__content has-text-centered-fullhd">
          <h1 class="title">
            <span 
              class="gradient" 
              v-html="title"/> <span class="of">{{ of }}</span> <br> <span class="secondLine">{{ subtitle }}</span>
          </h1>
          <p 
            class="subtitle has-text-grey is-size-6 " 
            v-html="paragraph"/>
          <br><br>
          <a 
            href="/en/tours/" 
            class="is-large button is-primary is-fullwidth hompage-hero__cta">{{ cta_button_text }}</a>

            
        </div>

        <div class="column hpImageBg"/>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'aaa'
    },
    of: {
      type: String,
      default: 'of'
    },
    subtitle: {
      type: String,
      default: 'of'
    },
    paragraph: {
      type: String,
      default: 'cathphrase'
    },
    cta_button_text: {
      type: String,
      default: 'Find Tours'
    }
  }
}
</script>
<style lang="scss">
.hompage-hero {
  &__content {
    padding: 6rem 0;
  }
}

.hpImageBg {
  background: url('/images/ttg-home.jpg') no-repeat center center;
  background-size: 33em;
}
.hompage-hero {
  .hero-body {
    padding: 12px;
  }

  .title {
    margin-bottom: 3rem;
    font-family: $family-heading;
    font-size: 2rem;
    color: $ttgBlue;
    font-weight: 700;
    font-style: italic;

    .gradient {
      text-shadow: 2px 3px 20px rgba(243, 191, 191, 0.45);
      // rgba(247, 147, 235, 0.45)
      font-size: 6rem;
      background: linear-gradient(
        to right,
        rgba(0, 39, 128, 1) 0%,
        rgba(252, 210, 14, 1) 44%,
        rgba(252, 210, 14, 1) 44%,
        rgba(252, 210, 14, 1) 49%,
        rgba(252, 210, 14, 1) 61%,
        rgba(252, 210, 14, 1) 61%,
        rgba(207, 9, 33, 1) 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      line-height: 0.7;
    }

    .of {
      font-family: $family-body;
      color: #e5714e;
      font-style: italic;
      font-size: 1.125rem;
    }

    .secondLine {
      color: #5c7079;
      padding-top: 1.5rem;
      display: inline-block;
      font-weight: 400;
    }

    span {
      // font-size: 3rem;
    }
  }

  .subtitle {
    border-bottom: 1px solid $ttgRed;
    padding-bottom: 3rem;
  }
  &__cta {
    box-shadow: 2px 3px 20px rgba(243, 191, 191, 0.95),
      2px 3px 10px rgba(243, 191, 191, 0.95);

    border: 1px solid #ff6262;
    border-radius: 3px;
    text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.3);

    background-color: #ff9a9a;
    background-image: linear-gradient(to bottom, #ff9a9a, #ff4040);
    // filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#ff9a9a, endColorstr=#ff4040);

    &:hover {
      border: 1px solid #ff3434;
      background-color: #ff6767;
      background-image: linear-gradient(to bottom, #ff6767, #ff0d0d);
      filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#ff6767, endColorstr=#ff0d0d);
    }
  }
}
</style>
