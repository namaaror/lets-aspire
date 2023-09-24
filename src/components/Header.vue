<template>
    <section class="logo-container">
        <img :src="logo" alt="Aspire">
    </section>
    <section class="account-detail-wrapper">
        <div class="account-balance">Account balance</div>
        <div class="currency">
            <p class="currency-details">S$</p>
        </div>
        <div class="amount">3,000</div>
        <div @click="newCardHander" class="new-card">
            <img class="new-card-logo" :src="addCard" alt="Add">
            <p class="new-card-label">New Card</p>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator';
import logo from "@/assets/icons/logo.svg";
import addCard from "@/assets/icons/add.svg";
import LocalStorageService from '@/services/LocalStorageService';

@Component({
    components: {}
})
class Header extends Vue {
    addCard = addCard;
    logo = logo;

    newCardHander() {
        const cards = LocalStorageService.get('cards');
        const newCard = {
            'cardHolderName': 'Naman Arora',
            'cardColor': 'tomato',
            'isFrozen': true
        }
        LocalStorageService.set('cards', [...cards, newCard]);

        this.emitter.emit('card_list_updated');
    }
}
export default toNative(Header);
</script>

<style lang="scss" scoped>
.logo-container {
    display: flex;
    flex-direction: row-reverse;
    position: sticky;
}
.account-detail-wrapper {
    padding-left: 20px;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: 1fr 1fr;
    column-gap: 8px;
    row-gap: 2px;
    position: sticky;
    top: 0;
}
.account-balance {
    font-family: 'Open Sans';
    font-weight: 600;
    font-size: 14px;
    grid-row: 1;
    grid-column: 1 / span 4;
    color: white;
}
.currency {
    grid-row: 2;
    grid-column: 1;
    background-color: #01D167;
    border-radius: 4px;
    width: 40px;
    height: 22px;
    .currency-details {
      font-weight: bold;
      text-align: center;
      vertical-align: center;
      color: white;
      font-size: 12px;
    }
}
.amount {
    grid-row: 2;
    grid-column: 2 / span 2;
    color: white;
    font-weight: 700;
    font-family: 'Open Sans';
    font-size: 22px;
    margin-top: -6px;
}
.new-card {
    display: flex;
    flex-direction: row;
    grid-row: 2;
    grid-column: 8 / span 3;
    margin-top: 3px;
    cursor: pointer;
    .new-card-logo {
      height: 16px;
      width: 16px;
    }
    .new-card-label {
      color: #23CEFD;
      font-family: 'Open Sans';
      font-weight: bold;
      font-size: 13px;
      margin-left: 5px;
      margin-top: -2px;
    }
  }
</style>