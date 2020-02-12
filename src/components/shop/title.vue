<template>
    <div>
        <h2>Category list:</h2>
        <p id="description" v-show="!isShow" @click="isShow = !isShow" title="click to change">{{ desc | capitalize }}</p>
        <ChangeInput v-show="isShow" :desc="desc" @cancel="isShow = !isShow" @save-text="desc = $event"></ChangeInput>
    </div>
</template>

<script>
    import ChangeInput from './changeInput.vue'

    export default {
        components: {
            ChangeInput
        },
        name: "maintitle",
        data() {
            return {
                isShow: false,
                desc: 'description of our products',
            }
        }
    }
</script>

<style scoped>

</style>