<template>
    <Layout class-prefix="edit-label">
        <header>
            <Icon name="left" @click.native="$router.go(-1)"/>
            <span>编辑标签</span>
        </header>
        <div @click="editTag" class="tag">
            <span>标签名：</span>
            {{$route.params}}
        </div>
        <div class="btn-remove-tag">删除标签</div>
    </Layout>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';

    @Component
    export default class EditLabel extends Vue {
        editTag() {
            return false;
        }
    }
</script>

<style>
    .edit-label-content {
        background: #f5f5f5;
    }
</style>

<style lang='scss' scoped>
    
    header {
        $hgt: 48px;
        position: relative;
        height: $hgt;
        background: #fff;
        text-align: center;
        line-height: $hgt;
        margin-bottom: 8px;
        svg {
            position: absolute;
            left: 16px;
            top: 50%;
            transform: translateY(-50%);
        }
    }

    .tag {
        $tag-hei: 44px;
        height: $tag-hei;
        line-height: $tag-hei;
        padding-left: 16px;
        background: #fff;
    }

    .btn-remove-tag {
        position: absolute;
        bottom: 90px;
        left: 50%;
        transform: translateX(-50%);
        $btn-hei: 40px;
        height: $btn-hei;
        line-height: $btn-hei;
        text-align: center;
        width: 98px;
        color: #fff;
        border-radius: 4px;
        background: #767676;
    }
</style>