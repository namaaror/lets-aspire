<template>
    <section class="transction-details-wrapper">
        <div class="transaction-logo">
            <img :src="fileStorage" alt="File">
        </div>
        <div class="transaction-details">
            <p class="merchant-name">Hamleys</p>
            <p class="transaction-date">20 May 2020</p>
        </div>
        <div class="transaction-amount">
            + S$ 150
        </div>
        <div class="next-icon">
            <img :src="next" alt="Next">
        </div>
        <div class="transaction-category">
            <div class="category-icon-holder">
                <img :src="businessTransaction" alt="Business">
            </div>
            <p class="category-description">Refund on debit card</p>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue, toNative } from 'vue-facing-decorator';
import fileStorage from '@/assets/icons/file_storage.png';
import businessTransaction from '@/assets/icons/business_transaction.png';
import nextIcon from '@/assets/icons/next.png';

@Component({})
class TransactionDetail extends Vue {
    next = nextIcon;
    businessTransaction = businessTransaction;
    fileStorage = fileStorage;

    @Prop({
        default: '#01D167',
        type: String
    })
    transactionColor!: string;

    @Prop({
        type: String
    })
    iconType!: string;
}

export default toNative(TransactionDetail);
</script>

<style scoped lang="scss">
@media all and (min-width:375px) and (max-width: 768px) {
    .transction-details-wrapper {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 1fr 0.75fr;
    min-height: 60px;
    width: 366px;
    margin: 0px 20px;
    background-color: white;
    border: 1px solid #F5F5F5;
    padding: 20px 20px 0px 20px;
    .transaction-logo {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 48px;
        width: 48px;
        border-radius: 50%;
        background-color: #009DFF1A;
    }
    .transaction-details {
        grid-row: 1;
        grid-column: 2 / 4;
        .merchant-name {
            font-family: 'Open Sans';
            font-size: 14px;
            font-weight: 600;
            color: black;
        }
        .transaction-date {
            color: #AAAAAA;
            font-size: 13px;
            font-weight: normal;
        }
    }
    .transaction-amount {
        display: flex;
        grid-row: 1;
        grid-column: 5 / span 7;
        text-align: right;
        font-family: 'Open Sans';
        font-size: 14px;
        font-weight: bold;
        color: v-bind('transactionColor');
        padding-left: 15px;
    }
    .next-icon {
        grid-row: 1;
        grid-column: 6;
        padding-left: 32px;
    }
    .transaction-category {
        display: flex;
        gap: 10px;
        grid-row: 2;
        grid-column: 2 / span 5;
        .category-icon-holder {
            height: 20px;
            width: 24px;
            background-color: #325BAF;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .category-description {
            font-family: 'Open Sans';
            font-weight: 600;
            font-size: 12px;
            color: #325BAF;
        }
    }
}
}
</style>