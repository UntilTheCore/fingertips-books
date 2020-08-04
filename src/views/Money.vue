<template>
    <div class="money">
        <Layout class-prefix="layout">
            <NumberPad :content.sync="record.amount"  @saveData="saveData"/>
            <Types :type.sync="record.type"/>
            <FormItem type="datetime-local" name="时间：" :value="createAt" @update:value="saveCreateAt"></FormItem>
            <FormItem type="text" :value.sync="record.note" name="备注：" placeholder="请在这里输入内容"/>
            <Tags :data-source ="tags" :selectTags.sync="record.selectTags"/>
        </Layout>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import NumberPad from '@/components/Money/NumberPad.vue';
    import Types from '@/components/Money/Types.vue';
    import Tags from '@/components/Money/Tags.vue';
    import { Component } from 'vue-property-decorator';
    import FormItem from '@/components/FormItem.vue';
    import dayjs from 'dayjs';

    @Component({
        components: {
            FormItem, Tags, Types, NumberPad
        }
    })
    export default class Money extends Vue {
        // 进入此组件时给时间控件设置默认时间
        get createAt() {
            return dayjs(new Date()).format().split(':',2).join(':');
        }
        get recordList() {
            return this.$store.state.recordList;
        }
        get tags() {
            return this.$store.state.tagList;
        }
        created() {
            this.$store.commit('fetchRecordList');
            this.$store.commit('fetchTagList');
        }
        // 初始数据环境
        record: RecordItem = {
            selectTags: [],
            type: '-',
            note: '',
            amount: 0,
            createAt: this.createAt
        };

        saveCreateAt(data: string) {
            this.record.createAt = data;
        }

        saveData() {
            if ( this.record.amount === 0 ) {
                alert('金额是0？');
                return;
            } else if( this.record.selectTags.length  === 0) {
                return alert('至少选择一个标签!');
            } else {
                this.$store.commit('createRecord',this.record);
                this.$nextTick( () => {
                    this.record.note = '';
                    this.record.amount = 0;
                    alert('记账成功！');
                });
            }
        }
    }
</script>

<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
</style>
<style lang='scss' scoped>

</style>