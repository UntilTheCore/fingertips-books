<template>
    <div class="form-item">
        <label>
            <span class="name">{{name}}</span>
            <input type="text" :value="value" @input="onValueChange($event.target.value)" :placeholder="placeholder">
        </label>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component, Prop } from 'vue-property-decorator';
    
    @Component
    export default class FormItem extends Vue {
        @Prop({required:true}) name!: string;
        @Prop(String) placeholder!: string;
        @Prop({default:''}) readonly value!: string;
        onValueChange(value: string){
            this.$emit('update:value',value);
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
                flex-shrink: 0;
                margin-right: 10px;
            }

            input {
                flex: 1;
                height: 32px;
                line-height: 32px;
                padding: 32px 0;
                font-size: inherit;
                background: transparent;
            }
        }
    }
</style>