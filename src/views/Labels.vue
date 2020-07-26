<template>
    <Layout class-prefix="label-bgc">
        <div class="tags">
            <div class="routerList">
                <router-link class="router-link" :to="`/labels/edit/${tag.id}`" v-for="tag in tags" :key="tag.id">
                    <span>{{tag.name}}</span>
                    <Icon name="right"/>
                </router-link>
            </div>
            <Button class="newTag" @click="createTag">新建标签</Button>
        </div>
    </Layout>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import tagListModel from '@/model/tagListModel';
    import tagTool from '@/lib/tag';

    @Component
    export default class Labels extends Vue {
        tags: Tag[]= [];

        created(){
            this.tags = tagListModel.fetch();
        }

        createTag(){
            tagTool.create();
        }
    }
</script>

<style>
    .label-bgc-content {
        background: #f5f5f5;
    }
</style>

<style lang='scss' scoped>
    .tags {
        display: flex;
        flex-direction: column;
        align-items: center;
        /*background: #f5f5f5;*/
        /*height: calc(var(--vh, 1vh));*/
        /*min-height: calc(var(--vh, 1vh));*/
        width: 100%;
        font-size: 16px;
        > .routerList {
            width: inherit;
            padding-left: 16px;
            background-color: #fff;
            .router-link {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 44px;
                border-bottom: 1px solid #e6e6e6;
                span {
                }
                svg {
                    margin-right: 16px;
                }
            }
        }

        .newTag {
            height: 40px;
            width: 100px;
            margin-top: 50px;
            margin-bottom: 100px;
        }
    }
</style>