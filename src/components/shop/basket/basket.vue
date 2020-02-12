<template>
    <div>
        <div v-if="total_cost > 0">
        <h3 v-texted:tcolor="color">Basket</h3>
        <ul>
            <li v-for="product in products" :key="product.id">
                <Product :product="product"></Product>
            </li>
        </ul>
        <p>Total cost: {{ total_cost }}</p>
        <button>Buy all</button>
        </div>
    </div>
</template>

<script>
    import Product from './product'
    import {eventBus} from "../../../main";

    export default {
        name: "basket",
        components: {
            Product,
        },
        data() {
            return {
                products: [],
                summ: 0,
            }
        },
        computed: {
            total_cost() {
                let summ = 0;
                this.products.forEach((product) => {
                    summ += product.cost * product.count;
                });
                return summ;
            },
            color() {
                return "#ffa011";
            }
        },
        created() {
            eventBus.$on('refresh_basket', (basket) => {
                this.products = basket;
            })
        }

    }
</script>

<style scoped>

</style>