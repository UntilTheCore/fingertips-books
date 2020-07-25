<template>
    <div class="money">
        <Layout class-prefix="layout">
            <NumberPad :content="record.amount" @update:content="getContent" @saveData="saveData"/>
            <Types :type.sync="record.type" />
            <Notes :note.sync="record.note"/>
            <Tags :data-source.sync="tags" :selectTags.sync="record.selectTags"/>
        </Layout>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import NumberPad from '@/components/Money/NumberPad.vue';
    import Types from '@/components/Money/Types.vue';
    import Notes from '@/components/Money/Notes.vue';
    import Tags from '@/components/Money/Tags.vue';
    import { Component, Watch } from 'vue-property-decorator';
    import recordListModel from '@/model/recordListModel';
    import tagListModel from '@/model/tagListModel';
    const recordList = recordListModel.fetch()

    @Component({
        components: {
            Tags, Notes, Types, NumberPad
        }
    })
    export default class Money extends Vue {
        tags: Tag[] = [];
        // 初始数据环境
        record: RecordItem = {
            selectTags: [],
            type: '-',
            note: '',
            amount: 0,
            createAt: new Date()
        }
        recordList = recordList;
        created() {
            this.tags = tagListModel.fetch();
        }
        getContent(content: string){
            this.record.amount = parseFloat(content);
        }
        saveData() {
            if(this.record.amount === 0) {
                alert('金额是0？');
                return;
            } else {
                const record1 = recordListModel.clone(this.record)
                record1.createAt = new Date();
                this.recordList.push(record1);
            }
        }

        @Watch('recordList')
        onRecordListChange(){
            recordListModel.save(this.recordList)
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