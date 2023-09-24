<template>
    <section class="footer-container">
        <div class="footer-action-logo">
            <img class="aspire-logo" :src="aspireLogo" alt="Home">
            <p class="footer-action-label aspire-logo-label">Home</p>
        </div>
        <div class="footer-action-logo">
            <img class="aspire-logo" :src="cardsLogo" alt="Cards">
            <p class="footer-action-label cards-label">Cards</p>
        </div>
        <div class="footer-action-logo">
            <img class="aspire-logo" :src="paymentsLogo" alt="Payments">
            <p class="footer-action-label payments-label">Payments</p>
        </div>
        <div class="footer-action-logo">
            <img class="aspire-logo" :src="creditLogo" alt="Credit">
            <p class="footer-action-label credit-label">Credit</p>
        </div>
        <div class="footer-action-logo">
            <img class="aspire-logo" :src="accountLogo" alt="Accounts">
            <p class="footer-action-label account-label">Accounts</p>
        </div>
    </section>
</template>
<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator';
import aspireLogo from '@/assets/icons/aspire_footer_logo.png';
import cardsLogo from '@/assets/icons/Cards.png';
import paymentsLogo from '@/assets/icons/Payments.png';
import creditLogo from '@/assets/icons/Credit.png';
import accountLogo from '@/assets/icons/Account.png';

@Component({
    components: {
    }
})
class FooterItems extends Vue {
    aspireLogo = aspireLogo;
    cardsLogo = cardsLogo;
    paymentsLogo = paymentsLogo;
    creditLogo = creditLogo;
    accountLogo = accountLogo;
}

export default toNative(FooterItems);
</script>

<style lang="scss" scoped>
@media all and (min-width:375px) and (max-width: 768px) {
    .footer-container {
        display: flex;
        justify-content: space-between;
        width: 100vw;
        height: 56px;
        background-color: white;
        padding: 10px 20px;
        gap: 32px;
    
        .aspire-logo {
            width: 24px;
            height: 24px;
        }
        .footer-action-label {
            color: #DDDDDD;
            font-size: 9px;
        }
    }
}
</style>