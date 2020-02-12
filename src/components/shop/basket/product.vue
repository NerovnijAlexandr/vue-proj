<template>
    <div>
        <strong>Name: </strong><span>{{ product.name }}</span>
        <strong>Cost: </strong><span>{{ product.cost }}</span>
        <strong>Count: </strong><input type="number" v-model.number="product.count" min="0">
        <strong>Total_cost: </strong><span>{{ total_cost }}</span>
        <button @click="del_prod">Delete</button>
    </div>
</template>

<script>
    import {eventBus} from "../../../main";

    export default {
        name: 'product',
        props: ['product'],
        data() {
            return {
                // name: '',
                // count: 0,
                // cost: 0
            }
        },
        methods: {
            del_prod() {
                eventBus.$emit('delete_from_basket', this.product)
            }
        },
        computed: {
            total_cost() {
                return this.product.count * this.product.cost;
            }
        },
        created() {
            // this.name = this.product.name;
            // this.count = this.product.count;
            // this.cost = this.product.cost;
        }
    }

</script>

<style scoped>


</style>