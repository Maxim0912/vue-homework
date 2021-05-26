'use strict';

let goods =  [
    {
        name: "Картина",
        price: 1000,
    },
    {
        name: "Корзина",
        price: 500,
    },
    {
        name: "Картонка",
        price: 150,
    },
    {
        name: "Маленькая собачонка",
        price: 5100,
    },
];

Vue.createApp({
    data(){
        return {
            goods: goods,
            choosenGoods: [],
        };
    },

    computed: {
        countTotal() {
            let sum = 0;
            this.choosenGoods.forEach(function sumPrice(currentValue) {
                  sum += currentValue.price;
                }
            );
            return sum;
        }
    },

    methods: {
        chooseCard(good, i) {
            if (this.choosenGoods.indexOf(good) !== -1) {
                this.choosenGoods.splice(this.choosenGoods.indexOf(good), 1);
            } else this.choosenGoods.push(good);
        },
    }
}).mount("#app");
