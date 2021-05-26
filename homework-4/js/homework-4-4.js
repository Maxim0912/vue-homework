'use strict';

const jokes = [
    "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg"
]

Vue.createApp ({
    data() {
        return {
            allJokes: jokes,
            currentJokeIndex: 0,
        }
    },

    methods: {
        nextSlide() {
            if (this.currentJokeIndex === this.allJokes.length - 1) {
                this.currentJokeIndex = 0;
            } else this.currentJokeIndex +=1;
        },
        prevSlide() {
            if (this.currentJokeIndex === 0) {
                this.currentJokeIndex = this.allJokes.length - 1;
            } else this.currentJokeIndex -=1;
        },
    },

    mounted() {
        setInterval(this.nextSlide, 3000)        
    }

}).mount("#app");