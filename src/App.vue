<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
        <h1>{{ h_title | only_letters }}</h1>
        <MainTitle></MainTitle>
        <Category v-for="category in categories" :category="category" :key="category.id">
            <template #title>
                <span>{{ category.id }}. {{ category.name }}</span>
            </template>
        </Category>
        <Basket></Basket>
    </div>
</template>

<script>
    import Category from './components/shop/category'
    import Basket from './components/shop/basket/basket'
    import MainTitle from './components/shop/title.vue'
    import globals from './mixins/globals'

    export default {
        name: 'App',
        components: {
            Category, Basket,
            MainTitle
        },
        mixins: [globals],
        filters: {
            only_letters(text) {
                let new_text = '';
                for(let letter of text) {
                    if(letter === ' ' || isNaN(+letter))
                    {
                        new_text += letter;
                    }
                }
                return new_text;
            }
        },
        data() {
            return {
                h_title: 'Заголовок 123 с 8 цифрами 0',}
        },
        methods: {
            check_product(product) {
                let isHere = false;
                this.basket.forEach((prod) => {
                    if(product == prod) {
                        isHere = true;
                        return false;
                    }
                });
                if (!isHere) this.basket.push(product);
                isHere = false;
            },
        },
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
