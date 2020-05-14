<template>
  <div class="form-group">
    <label for="firstName">First name</label>
    <input id="firstName" type="text" @input="updateValue" v-model="firstName" />
    <label for="lastName">Last name</label>
    <input id="lastName" type="text" @input="updateValue" v-model="lastName" />
  </div>
</template>

<script>
export default {
    props: ['value'],
    data() {
        return {
            firstName: '',
            lastName: ''
        }
    },
    methods: {
        updateValue() {
            this.$emit('input', this.firstName + ' ' + this.lastName);
        }
    }
};
</script>

<style scoped>
</style>