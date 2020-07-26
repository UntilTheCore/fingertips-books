<template>
    <div class="button" @click="$emit('click',$event)">
        <slot/>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    
    @Component
    export default class Button extends Vue {
        
    }
</script>

<style lang='scss' scoped>
    .button {
        $btn-hei: 40px;
        height: $btn-hei;
        line-height: $btn-hei;
        text-align: center;
        width: 98px;
        color: #fff;
        border-radius: 4px;
        background: #767676;
        cursor: pointer;
    }
</style>