<template>
    <section class="card-actions-container">
        <div @click="freezeCardHandler" class="card-action-logo">
            <img class="freeze-card" :src="freezeCard" alt="Freeze">
            <p class="card-action-label freeze-card-label">{{ freezeLabel }}</p>
        </div>
        <div class="card-action-logo">
            <img class="set-spend-limit" :src="setSpendLimit" alt="SpendLimit">
            <p class="card-action-label set-spend-limit-label">Set spend limit</p>
        </div>
        <div class="card-action-logo">
            <img class="g-pay" :src="gPay" alt="GooglePay">
            <p class="card-action-label add-to-gpay-label">Add to GPay</p>
        </div>
        <div class="card-action-logo">
            <img class="replace-card" :src="replaceCard" alt="Replace">
            <p class="card-action-label replace-card-label">Replace card</p>
        </div>
        <div @click="cancelCardHandler" class="card-action-logo">
            <img  class="cancel-card" :src="cancelCard" alt="Cancel">
            <p class="card-action-label cancel-card-label">Cancel card</p>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator';
import gPay from '@/assets/icons/GPay.png';
import replaceCard from '@/assets/icons/replace_card.png';
import freezeCard from '@/assets/icons/freeze_card.png';
import setSpendLimit from '@/assets/icons/set_spend_limit.png';
import cancelCard from '@/assets/icons/deactivate_card.png';
import LocalStorageService from '@/services/LocalStorageService';

@Component
class CardActions extends Vue {
    gPay = gPay;
    replaceCard = replaceCard;
    freezeCard = freezeCard;
    setSpendLimit = setSpendLimit;
    cancelCard = cancelCard;
    freezeLabel = 'Freeze Card'

    created() {
        this.updateFreezeLabel();
        this.emitter.on('page_change', this.updateFreezeLabel)
    }

    cancelCardHandler() {
        const cards: any[] = LocalStorageService.get('cards');
        cards.splice(LocalStorageService.get('pageNum'), 1);
        LocalStorageService.set('cards', cards);
        this.emitter.emit('card_list_updated');
    }

    freezeCardHandler() {
        const cards: any[] = LocalStorageService.get('cards');
        const pageNum = LocalStorageService.get('pageNum');
        cards[pageNum].isFrozen = !cards[pageNum].isFrozen;
        LocalStorageService.set('cards', cards);
        this.emitter.emit('card_list_updated');
        this.updateFreezeLabel();
    }

    updateFreezeLabel() {
        const pageNum = LocalStorageService.get('pageNum');
        const cards = LocalStorageService.get('cards');
        this.freezeLabel = cards[pageNum].isFrozen ? 'Unfreeze Card' : 'Freeze Card';
    }
}
export default toNative(CardActions);
</script>

<style scoped lang="scss">
@media all and (min-width:375px) and (max-width: 768px) {
    .card-actions-container {
    display: grid;
    padding-top: 15px;
    padding-bottom: 15px;
    grid-template-columns: repeat(9, 3rem);
    grid-template-rows: repeat(2, 1fr);
    column-gap: 2rem;
    row-gap: 12px;
    .card-action-logo {
        width: 32px;
        height: 32px;
        .card-action-label {
            width: 2.5rem;
            font-family: 'Open Sans';
            font-size: 13px;
            font-weight: normal;
            color: #0C365A;
        }
    }
    .freeze-card {
        grid-row: 1;
        grid-column: 1 / span 2;
    }
    .set-spend-limit {
        grid-row: 1;
        grid-column: 3 / span 4;
    }
    .g-pay {
        grid-row: 1;
        grid-column: 5 / span 6;
    }
    .replace-card {
        grid-row: 1;
        grid-column: 7;
    }
    .cancel-card {
        grid-row: 1;
        grid-column: 9;
    }
    .freeze-card-label {
        grid-row: 2;
        grid-column: 1;
    }
    .set-spend-limit-label {
        grid-row: 2;
        grid-column: 2;
    }
    .add-to-gpay-label {
        grid-row: 2;
        grid-column: 3;
    }
    .replace-card-label {
        grid-row: 2;
        grid-column: 4;
    }
    .cancel-card-label {
        grid-row: 2;
        grid-column: 5;
    }
}
}
</style>