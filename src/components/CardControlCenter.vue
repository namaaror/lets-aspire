<template>
    <section class="card-control-wrapper">
        <div class="card-actions-container">
            <CardActions></CardActions>
        </div>
        <div class="details-container">
            <section class="card-details">
                <img class="card-details-logo" :src="cardDetails" alt="Card Details">
                <p class="control-action-label">Card details</p>
                <img class="down-arrow" :src="downArrow" alt="Down">
            </section>
            <section class="recent-transactions">
                <RecentTransactions></RecentTransactions>
            </section>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator';
import CardActions from '@/components/CardActions.vue';
import cardDetails from '@/assets/icons/card_details.png';
import downArrow from '@/assets/icons/down_arrow.png';
import RecentTransactions from './RecentTransactions.vue';

@Component({
    components: {
        CardActions,
        RecentTransactions
    }
})
class CardControlCenter extends Vue {
    cardDetails = cardDetails;
    downArrow = downArrow;
}

export default toNative(CardControlCenter);
</script>

<style lang="scss" scoped>
@media all and (min-width:375px) and (max-width: 768px) {
    .card-control-wrapper {
        max-height: 110vh;
        margin-top: 18px;
        .card-actions-container {
            padding-left: 10px;
            border-radius: 12px 12px 0px 0px;
            height: 116px;
            width: 98vw;
            background-color: #EDF3FF;
        }
    }
    .details-container {
        max-height: 100vh;
        width: 100vw;
        background-color: white;
        overflow-y: scroll;
    }
    .card-details {
        margin-top: 14px;
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        background-color: #FAFCFF;
        border: 1px solid #F5F5F5;
        height: 72px;
        width: 366px;
        border-radius: 8px;
        margin: 20px;
    }
    .card-details {
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        padding: 20px;
        .card-details-logo {
            grid-column: 1 / 1;
        }
        .control-action-label {
            color: #0C365A;
            font-size: 14px;
            font-family: 'Open Sans';
            font-weight: 600;
            grid-column: 2 / 8;
            text-align: left;
        }
        .down-arrow {
            grid-column: 10;
            text-align: right;
        }
    }
}
</style>