<template>
  <div class="main-container">
    <header class="container-header">
      <Header></Header>
    </header>
    <section class="card-carousel-wrapper">
      <CardCarousel></CardCarousel>
    </section>
    <section class="card-control-wrapper">
      <CardControl></CardControl>
    </section>
    <footer class="footer-wrapper">
      <FooterItems></FooterItems>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator';
import CardCarousel from '@/components/CardCarousel.vue';
import CardControl from '@/components/CardControlCenter.vue'
import FooterItems from '@/components/FooterItems.vue';
import Header from '@/components/Header.vue';
import LocalStorageService from './services/LocalStorageService';
import { CardsService } from './services/CardsService';

@Component({
  components: {
    CardCarousel,
    CardControl,
    FooterItems,
    Header
  }
})
class App extends Vue {
  created() {
    if (!LocalStorageService.get('cards')) {
      CardsService.getCards().then((data) => {
        LocalStorageService.set('cards', data);
      });
    }
  }
}

export default toNative(App);
</script>

<style scoped lang="scss">
@media all and (min-width:375px) and (max-width: 768px) {
  .main-container {
  padding: 20px 20px 0px 0px;
  background-color: #0C365A;
  min-height: calc(100vh - 70px);
  min-width: 100vw;
  position: relative;

  .container-header {
    position: sticky;
    top: 22px;
  }

  .card-carousel-wrapper {
    position: sticky;
    top: 136px;
  }

  .footer-wrapper {
    position: sticky;
    bottom: 0px;
    z-index: 5;
  }

  .card-control-wrapper {
    position: relative;
    z-index: 4;
  }
}
}</style>
