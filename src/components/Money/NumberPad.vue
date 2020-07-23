<template>
    <div class="numberPad">
        <div class="output">{{outputContent}}</div>
        <div class="buttons">
            <button @click="getInput">1</button>
            <button @click="getInput">2</button>
            <button @click="getInput">3</button>
            <button @click="deleteContent">刪除</button>
            <button @click="getInput">4</button>
            <button @click="getInput">5</button>
            <button @click="getInput">6</button>
            <button @click="clearContent">清除</button>
            <button @click="getInput">7</button>
            <button @click="getInput">8</button>
            <button @click="getInput">9</button>
            <button @click="ok" class="ok">OK</button>
            <button @click="getInput" class="zero">0</button>
            <button @click="getInput">.</button>
        </div>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';

    @Component
    export default class NumberPad extends Vue {
        outputContent = '0';

        getInput(event: MouseEvent | TouchEvent) {
            const target = (event.target as HTMLButtonElement);
            const inputContent = target.textContent as string;
            console.log(inputContent);

            if ( this.outputContent.length >= 16 ) {
                return;
            }
            if (this.outputContent.length === 16) { return; }
            if (this.outputContent === '0') {
                if ('0123456789'.indexOf(inputContent) >= 0) {
                    this.outputContent = inputContent;
                } else {
                    this.outputContent += inputContent;
                }
                return;
            }
            if (this.outputContent.indexOf('.') >= 0 && inputContent === '.') {return;}
            this.outputContent += inputContent;
        }

        deleteContent() {
            if (this.outputContent.length === 1) {
                this.outputContent= '0';
            } else {
                this.outputContent= this.outputContent.slice(0, -1);
            }
        }

        clearContent() {
            this.outputContent = '0';
        }

        ok() {
            return;
        }
    }
</script>

<style lang='scss' scoped>
    @import "~@/assets/styles/helper.scss";

    .numberPad {
        .output {
            height: 72px;
            line-height: 72px;
            text-align: right;
            padding-right: 10px;
            font-size: 36px;
            font-family: Consolas, monospace;
            @extend %innerShadow;
        }

        .buttons {
            @extend %clearFix;

            button {
                display: block;
                width: 25%;
                height: 64px;
                float: left;
                font-size: 16px;
                background: transparent;
                font-weight: bold;

                &.ok {
                    height: 128px;
                    float: right;
                }

                &.zero {
                    width: 50%;
                }

                $bgc: #f2f2f2;

                &:nth-child(1) {
                    background: $bgc;
                }

                &:nth-child(2),
                &:nth-child(5) {
                    background: darken($bgc, 4%);
                }

                &:nth-child(3),
                &:nth-child(6),
                &:nth-child(9) {
                    background: darken($bgc, 8%);
                }

                &:nth-child(4),
                &:nth-child(7),
                &:nth-child(10), {
                    background: darken($bgc, 12%);
                }

                &:nth-child(8),
                &:nth-child(11),
                &:nth-child(13) {
                    background: darken($bgc, 16%);
                }

                &:nth-child(14) {
                    background: darken($bgc, 20%);
                }

                &:nth-child(12) {
                    background: darken($bgc, 24%);
                }
            }
        }
    }
</style>