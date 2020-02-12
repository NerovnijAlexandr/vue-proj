<template>
    <div>
        <input type="text" v-model="text">
        <button @click="save">OK</button>
    </div>
</template>

<script>
    export default {
        name: "changeInput",
        props: ['desc'],
        data() {
            return {
                text: ''
            }
        },
        methods: {
            save() {
                this.$emit('save-text', this.text);
                this.cancel();
            },
            cancel() {
                this.$emit('cancel');
            }
        },
        created() {
            this.text = this.desc;
        }
    }
</script>

<style scoped>

</style>