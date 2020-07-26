<template>
    <Layout class-prefix="edit-label">
        <header>
            <Icon name="left" @click.native="$router.go(-1)"/>
            <span>编辑标签</span>
        </header>
        <FormItem class="tag" name="标签名：" :value.sync="newTag" placeholder="在这里输入新的标签名" />
        <Button class="btn-remove-tag" @click="removeTag">删除标签</Button>
    </Layout>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component, Watch } from 'vue-property-decorator';
    import FormItem from '@/components/FormItem.vue';
    import tagListModel from '@/model/tagListModel';
    @Component({
        components: { FormItem }
    })
    export default class EditLabel extends Vue {
        newTag = '';
        tagList: readonly Tag[] = tagListModel.fetch();
        tagID = this.$route.params.id;
        @Watch('newTag')
        onNewTagChange() {
            tagListModel.update(this.tagID,this.newTag);
        }
        hasTag() {
            for(let i = 0; i < this.tagList.length; i++) {
                if(this.tagList[i].id === this.tagID) {
                    return true;
                }
            }
            return false;
        }
        showTagName(){
            const tag = this.tagList.filter(item => item.id === this.tagID)[0];
            this.newTag = tag.name;
        }
        created() {
            if(!this.hasTag())
                this.$router.replace('/page404');
            this.showTagName();
        }
        removeTag() {
            const success = tagListModel.remove(this.tagID);
            if(success){
                alert('删除成功!');
                this.$router.replace('/labels');
            }else{
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