<template>
    <div>
        <div @click="isShow = !isShow" class="linked">
            <button>{{ sign }}</button>
            <slot name="title">{{ category.name }}</slot>
        </div>
        <ul v-if="isShow">
            <li v-for="product in category.products" :key="product.id">
                <Product :product="product"></Product>
            </li>
        </ul>
    </div>
</template>

<script>
    import Product from './product'

    export default {
        name: "category",
        components: {
            Product,
        },
        props: {
            category: {
                type: Object,
                required: true,
            },
        },
        data() {
            return {
                isShow: false,
            }
        },
        computed: {
            sign() {
                return this.isShow ? '-' : '+';
            }
        },
    }
</script>

<style scoped>

</style>