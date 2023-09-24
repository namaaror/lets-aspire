<template>
    <section class="recent-transactions-wrapper">
        <section class="recent-transactions">
            <img class="card-details-logo" :src="recentTxnLogo" alt="Recent Transactions">
            <p class="control-action-label">Recent Transactions</p>
            <img class="up-arrow" :src="upArrow" alt="Up">
        </section>
        <section class="transaction-history-wrapper">
            <TransactionDetail transactionColor="#01D167"></TransactionDetail>
            <TransactionDetail transactionColor="black"></TransactionDetail>
            <TransactionDetail transactionColor="black"></TransactionDetail>
            <TransactionDetail transactionColor="black"></TransactionDetail>
        </section>
        <section class="view-all-transactions">
            View all card transactions
        </section>
    </section>
</template>

<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator';
import recentTxn from '@/assets/icons/recent_txns.png';
import upArrow from '@/assets/icons/up_arrow.png';
import TransactionDetail from './TransactionDetail.vue';

@Component({
    components: {
        TransactionDetail
    }
})
class RecentTransactions extends Vue {
    recentTxnLogo = recentTxn;
    upArrow = upArrow;
}
export default toNative(RecentTransactions);
</script>

<style lang="scss" scoped>
@media all and (min-width:375px) and (max-width: 768px) {
    .recent-transactions-wrapper {
        .recent-transactions {
            margin-top: 14px;
            grid-template-columns: repeat(7, 1fr);
            background-color: #FAFCFF;
            border: 1px solid #F5F5F5;
            height: 72px;
            width: 366px;
            border-radius: 8px;
            margin: 20px;
            margin-bottom: 0px;
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
            .up-arrow {
                grid-column: 10;
                text-align: right;
            }
        }
        .transaction-history-wrapper {
            overflow-y: scroll;
            min-height: 200px;
        }
        .view-all-transactions {
            height: 50px;
            background-color: #EDFFF5;
            border-radius: 8px;
            border: 1px solid #DDFFEC;
            color: #01D167;
            font-size: 13px;
            font-weight: 600;
            font-family: 'Open Sans';
            margin: 0px 20px 20px 20px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}
</style>
