<template>
    <Layout class-prefix="edit-label">
        <header>
            <Icon name="left" @click.native="$router.go(-1)"/>
            <span>编辑标签</span>
        </header>
        <FormItem type="text" class="tag" name="标签名：" :value.sync="newTag" placeholder="在这里输入新的标签名"/>
        <Button class="btn-remove-tag" @click="removeTag">删除标签</Button>
    </Layout>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component, Watch } from 'vue-property-decorator';
    import FormItem from '@/components/FormItem.vue';

    @Component({
        components: { FormItem }
    })
    export default class EditLabel extends Vue {

        get tagList(): Tag[] {
            return this.$store.state.tagList;
        }

        get currentTag() {
            return this.$store.state.currentTag;
        }

        set currentTag(value) {
            this.$store.state.currentTag = value;
        }

        tagID = '';
        newTag = '';

        @Watch('newTag')
        onNewTagChange() {
            const newTag: Tag = {
                id: this.tagID,
                name: this.newTag
            };
            this.$store.commit('updateTag', newTag);
        }

        // 组件被创建时判断id在数据是否存在，没有则跳转404。
        created() {
            this.tagID = this.$route.params.id;
            this.$store.commit('fetchTagList');
            this.$store.commit('setCurrentTag', this.tagID);
            if ( !this.currentTag ) {
                this.$router.replace('/page404');
            } else {
                this.newTag = this.currentTag.name;
            }
        }

        removeTag() {
            this.$store.commit('removeTagById', this.tagID);
            if ( this.currentTag ) {
                alert('删除成功!');
                this.currentTag = undefined;
                this.$router.replace('/labels');
            } else {
                alert('删除失败!');
            }
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
        background: #fff;
    }

    .btn-remove-tag {
        position: absolute;
        bottom: 90px;
        left: 50%;
        transform: translateX(-50%);

    }
</style>