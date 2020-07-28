<template>
    <div class="money">
        <Layout class-prefix="layout">
            <NumberPad :content="record.amount" @update:content="getContent" @saveData="saveData"/>
            <Types :type.sync="record.type"/>
            <FormItem :value.sync="record.note" name="备注：" placeholder="请在这里输入内容"/>
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

    @Component({
        components: {
            FormItem, Tags, Types, NumberPad
        }
    })
    export default class Money extends Vue {
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
            createAt: new Date().toISOString()
        };

        getContent(content: string) {
            this.record.amount = parseFloat(content);
        }

        saveData() {
            if ( this.record.amount === 0 ) {
                alert('金额是0？');
                return;
            } else {
                this.$store.commit('createRecord',this.record);
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