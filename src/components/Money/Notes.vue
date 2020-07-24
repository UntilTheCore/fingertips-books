<template>
    <div class="notes">
        <label>
            <span class="name">备注</span>
            <input type="text" v-model="value" placeholder="在这里添加备注">
        </label>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component, Watch } from 'vue-property-decorator';
    @Component
    export default class Notes extends Vue {
        value = '';
        @Watch('value')
        onValueChange(){
            this.$emit('update:note',this.value);
        }
    }
</script>

<style lang='scss' scoped>
    .notes {
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