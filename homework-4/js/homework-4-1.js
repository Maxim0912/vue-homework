'use strict';

let articles =  [
    {
        title: "О программировании",
        img: "https://picsum.photos/seed/picsum/200/300",
    },
    {
        title: "JavaScript",
        img: "https://picsum.photos/seed/picsum/200/300",
    },
    {
        title: "О тестировании",
        img: "https://picsum.photos/seed/picsum/200/300",
    },
    {
        title: "DevOps для чайников",
        img: "https://picsum.photos/seed/picsum/200/300",
        
    },
];

Vue.createApp({
    data() {
        return {
            articles: articles,
            search: "",
        }
    },
    computed: {
        searchArticles() {
            let resultSearch = [];
            if (this.search) {
                for (let article of this.articles) {
                    if (article.title.toLowerCase().includes(this.search.toLowerCase())) {
                        resultSearch.push(article);
                    }                   
                } 
                return resultSearch;
            }
            
        }
    }
}).mount("#app");
