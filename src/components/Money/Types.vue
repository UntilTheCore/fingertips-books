<template>
    <div class="types">
        <ul>
            <li :class="type === '-' && 'selected'" @click="selectType('-')">支出</li>
            <li :class="type === '+' && 'selected'" @click="selectType('+')">收入</li>
        </ul>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component, Prop } from 'vue-property-decorator';
    @Component
    export default class Types extends Vue {
        // type 应该由外部指定
        //type = '-';
        @Prop(String) type!: string;
        selectType(type: string) {
            this.$emit('update:type',type);
        }

        // selectType(type: string){
        //     if (type !== '-' && type !== '+') {
        //         new Error('type is unknown');
        //     } else {
        //         this.type = type;
        //     }
        // }
    }
</script>

<style lang='scss' scoped>
    .types {
        background: #C4C4C4;

        > ul {
            display: flex;

            > li {
                flex: 1;
                display: flex;
                position: relative;
                justify-content: center;
                align-items: center;
                height: 64px;

                &.selected::after {
                    content: "";
                    display: block;
                    width: 100%;
                    border: 2px solid #333;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                }
            }
        }
    }
</style>