<template>
    <div>
        <span v-selected>Name: </span><span>{{ product.name }}</span>
        <span v-selected.upper>Cost: </span><span>{{ product.cost }}</span>
        <button @click="add">Add to basket</button>
    </div>
</template>

<script>
    import {eventBus} from "../../main";

    export default {
        directives: {
            selected: {
                bind(el, binding) {
                    el.style.color = 'red';
                    if(binding.modifiers.upper) {
                        el.innerHTML = el.innerHTML.toUpperCase();
                    }
                }
            }
        },
        name: "product",
        props: {
            product: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
            }
        },
        methods: {
            add() {
                eventBus.$emit('add_to_basket', this.product)
            }
        }
    }
</script>

<style scoped>

</style>