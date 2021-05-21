'use strict';

Vue.createApp ({
    data() {
        return {
            genres: [
                {id: 1, name: "Роман"},
                {id: 2, name: "Фантастика"},
                {id: 3, name: "Приключения"},
            ],

            ages: [
                {id: 1, age: "до 16"},
                {id: 2, age: "от 17 до 21"},
                {id: 3, age: "от 21 до 35"},
                {id: 4, age: "от 36 до 50"},
                {id: 5, age: "от 50"},
            ],

            formData: {
                genres: [3],
                name: "",
                pages: 100,
                description: "",
                ages: [3],
                read: "yes"
            }           
        }
    },

    methods: {
        addRequest(event) {// евент - объект с информацией о событии
            console.log(this.formData);
            event.target.reset();
        }
    }
}).mount("#app");