<template>
  <nav id="main-menu">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about/">About us</a></li>
      <li><a href="/contact/">Contact</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  mounted() {
    $(document).ready(function() {
      $('#main-menu').mmenu(
        {
          // options
          extensions: [
            'position-bottom',
            'fullscreen',
            'theme-black',
            'listview-50',
            'fx-panels-slide-up',
            'fx-listitems-drop',
            'border-offset'
          ],
          navbar: {
            title: ''
          },
          navbars: [
            {
              height: 2,
              content: [
                '<a href="#/" class="fa fa-phone">phone</a>',
                '<img src="https://instagram.ftsr1-1.fna.fbcdn.net/vp/237f9e96504d653aeb6b5d2b09f0ebf4/5CB03D07/t51.2885-19/s150x150/36960898_675782029433464_5257079222010118144_n.jpg" />',
                '<a href="#/" class="fa fa-envelope">emvelope</a>'
              ]
            },
            {
              content: ['prev', 'title']
            }
          ]
        },
        {
          // configuration
          clone: false,
          offCanvas: {
            pageSelector: '#__nuxt'
          }
        }
      )
    })
  }
}
</script>


<style lang="scss">
#main-menu:not(.mm-menu) {
  display: none;
}
.mm-menu {
  height: calc(100% - 108px) !important;
  --mm-color-background: #4bb5ef;
}

.mm-navbar_size-2 {
  text-align: center;
  position: relative;
  border-bottom: none;
  display: block !important;
}
.mm-navbar_size-2:before {
  content: '';
  display: inline-block;
  vertical-align: middle;
  height: 100%;
  width: 1px;
}
.mm-navbar_size-2 > * {
  color: #fff !important;
  display: inline-block;
  vertical-align: middle;
}
.mm-navbar_size-2 img {
  opacity: 0.6;
  border: 1px solid #fff;
  border-radius: 60px;
  width: 60px;
  height: 60px;
  padding: 10px;
  margin: 0 10px;
}
.mm-navbar_size-2 a {
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 40px;
  color: rgba(255, 255, 255, 0.8) !important;
  font-size: 16px !important;
  line-height: 40px;
  width: 40px;
  height: 40px;
  padding: 0;
}
.mm-navbar_size-2 a:hover {
  border-color: #fff;
  color: #fff !important;
}

.mm-panels > .mm-panel:after {
  content: none;
  display: none;
}
.mm-panels > .mm-panel > .mm-listview {
  margin: 0;
}

.mm-listview {
  text-transform: uppercase;
}
.mm-listitem:last-child:after {
  content: none;
  display: none;
}
.mm-listitem a,
.mm-listitem span {
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  padding-right: 20px !important;
}
.mm-listitem a:hover,
.mm-listitem a:hover + span {
  color: #fff;
}
</style>
