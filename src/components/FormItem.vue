<template>
    <div class="form-item">
        <label>
            <span class="name">{{this.name}}</span>
            <input type="text" v-model="value" :placeholder="this.placeholder">
        </label>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component, Prop, Watch } from 'vue-property-decorator';
    
    @Component
    export default class FormItem extends Vue {
        @Prop(String) name!: string;
        @Prop(String) placeholder!: string;
        value = '';
        @Watch('value')
        onValueChange(){
            this.$emit('update:note',this.value);
            this.$emit('update:tag',this.value);
        }
    }
</script>

<style lang='scss' scoped>
    .form-item {
        display: flex;
        background: #e5e5e5;
        padding-left: 16px;
        flex-shrink: 0;

        > label {
            display: flex;
            width: 100%;
            align-items: center;

            .name {
                font-size: 14px;
                margin-right: 10px;
            }

            input {
                flex: 1;
                height: 64px;
                background: transparent;
            }
        }
    }
</style>