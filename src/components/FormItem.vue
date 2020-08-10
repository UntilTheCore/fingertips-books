<template>
    <div class="form-item">
        <label>
            <span class="name">{{name}}</span>
            <input :type="type" :value="value" @input="onValueChange($event.target.value)" :placeholder="placeholder" :max="max">
        </label>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component, Prop } from 'vue-property-decorator';
    import dayjs from 'dayjs';
    
    @Component
    export default class FormItem extends Vue {
        @Prop({required:true}) name!: string;
        @Prop({default:'',type:String}) placeholder!: string;
        @Prop({default:''}) readonly value!: string;
        @Prop({required:true,type:String,default:'text'}) type!: string;
        @Prop({type: String, default: new Date().toISOString()}) maxDate?: string;

        get max() {
            return dayjs(this.maxDate).format('YYYY-MM-DD')  + 'T23:59:59';
        }

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
                $height: 20px;
                flex: 1;
                height: $height;
                line-height: $height;
                padding: $height 0;
                font-size: inherit;
                background: transparent;
            }
        }
    }
</style>