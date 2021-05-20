'use strict';

let goods = [
    {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    {
        title: "Флейта",
        price: 900,
        count: 50
    },
    {
        title: "Арфа",
        price: 3400,
        count: 0
    }
];

let app = Vue.createApp ({
    data() {
        return {
            tabs: ["Все товары", "Корзина"],
            currentTab: "Все товары",
            allGoods: goods,
            myGoods: []
        };
    },
    computed: {
        sortedMyGoods() {
            return this.myGoods.sort((b1, b2)=>{
                return b1.count - b2.count;
            });
        },


    },
    methods: {
        addClassToGoods(good) {
            if (good.count > 20) return 'many';
            else if (good.count > 0) return 'not-many';
            else return 'zero';
        },

        addToMyCart(good) {
            good.count -= 1;
            this.myGoods.push(good);  
            console.log(this.myGoods);
        },

        deleteFromMyCart(good, i) {
            this.myGoods.splice(i, 1);
        }
    }
});

app.mount("#app");


