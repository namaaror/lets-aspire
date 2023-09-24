export const CardsService = {
    getCardsData() {
        return [
            {
                "cardHolderName": "Matt Henry",
                "cardColor": "#01D167",
                "isFrozen": true
            },
            {
                "cardHolderName": "David Patinson",
                "cardColor": "#536DFF",
                "isFrozen": false
            },
            {
                "cardHolderName": "Scott Peters",
                "cardColor": "#FF9999",
                "isFrozen": false
            },
            {
                "cardHolderName": "John Chambers",
                "cardColor": "gray",
                "isFrozen": false
            }
        ];
    },

    getCards() {
        return Promise.resolve(this.getCardsData());
    },
};

