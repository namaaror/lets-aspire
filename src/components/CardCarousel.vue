<template>
    <section class="carousel-wrapper">
        <div>
            <TabView>
                <TabPanel header="My debit cards">
                    <Carousel
                        :value="cards"
                        :numVisible="2"
                        :numScroll="cardsCount"
                        :showNavigators="false"
                        :showIndicators="true"
                        :responsiveOptions="responsiveOptions"
                        @update:page="cardSwipe"
                    >
                        <template #item="slotProps">
                            <Card 
                                :card-holder-name="slotProps.data.cardHolderName"
                                :card-color="slotProps.data.cardColor"
                                :is-frozen="slotProps.data.isFrozen"
                            />
                        </template>
                    </Carousel>
                </TabPanel>
                <TabPanel header="All company cards">
                    <Carousel
                        :value="cards"
                        :numVisible="1"
                        :numScroll="cardsCount"
                        :showNavigators="false"
                        :showIndicators="true"
                        :responsiveOptions="responsiveOptions"
                    >
                        <template #item="slotProps">
                            <Card 
                                :card-holder-name="slotProps.data.cardHolderName"
                                :card-color="slotProps.data.cardColor"
                            />
                        </template>
                    </Carousel>
                </TabPanel>
            </TabView>
        </div>
    </section>
</template>

<script lang="ts">
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Card from '@/components/Card.vue';
import Carousel from 'primevue/carousel';
import { Component, Vue, toNative, Setup } from 'vue-facing-decorator';
import Cards from '@/resources/Cards.json';
import LocalStorageService from '@/services/LocalStorageService';
import { type Product } from '@/types/CardType';

@Component({
    components: {
        Card,
        TabView,
        TabPanel,
        Carousel,
    }
})
class CardCarousel extends Vue {
    cards: Product[] = [];

    cardsCount = Cards.length;

    responsiveOptions = [
    {
        breakpoint: '1399px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '899px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '500px',
        numVisible: 1,
        numScroll: 1
    }];

    cardSwipe(pageNum: any) {
        LocalStorageService.set('pageNum', pageNum);
        this.emitter.emit('page_change');
    }

    created() {
        this.emitter.on('card_list_updated', this.setCards);
        // this.emitter.on('get_card_details', this.emitCardDetails);
    }

    mounted() {
        this.setCards();
    }

    setCards() {
        this.cards = LocalStorageService.get('cards');
    }

    // emitCardDetails() {
    //     this.emitter.emit('card_details', () => {
    //         LocalStorageService.get()
    //     })
    // }
}

export default toNative(CardCarousel);
</script>

<style lang="scss" scoped>
.carousel-wrapper {
    margin: 30px 0px 0px 20px;
}
</style>

<style lang="scss">
.p-carousel-items-container {
    gap: 10px;
}

.p-carousel-indicators.p-reset {
    list-style: disc;
    color: #01D167;
    font-size: 20px;
}

.p-tabview-header {
    font-family: 'Open Sans';
    color: white;
    font-size: 13px;
    font-weight: 800;
    width: 110px;
    height: 18px;
}
</style>