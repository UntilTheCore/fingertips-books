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

    @Component
    export default class Labels extends Vue {
        tags: Tag[]= [];

        created(){
            this.tags = tagListModel.fetch();
        }

        createTag() {
            const content = window.prompt('请输入标签名:');
            if(content && content.trim() !== '') {
                const res = tagListModel.create(content.trim());
                if(res === 'duplicate'){
                    alert('标签名重复!');
                }else {
                    alert('创建成功!');
                }
            } else if(content === '') {
                alert('标签名不能为空!');
            }
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