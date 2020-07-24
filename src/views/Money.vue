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
    const dbName = 'fingertipsbooks-recordList';
    const recordList: Record[] = JSON.parse(window.localStorage.getItem(dbName) || '[]');
    type Record = {
        selectTags: string[];
        type: string;
        note: string;
        amount: number;
        createAt: Date;
    }

    @Component({
        components: {
            Tags, Notes, Types, NumberPad
        }
    })
    export default class Money extends Vue {
        tags = ['衣','食','住','行'];
        // 初始数据环境
        record: Record = {
            selectTags: [],
            type: '-',
            note: '',
            amount: 0,
            createAt: new Date()
        }
        recordList: Record[] = recordList;
        getContent(content: string){
            this.record.amount = parseFloat(content);
            console.log(this.record.amount);
        }
        saveData() {
            if(this.record.amount === 0) {
                alert('金额是0？');
                return;
            } else {
                const record1: Record = JSON.parse(JSON.stringify(this.record));
                record1.createAt = new Date();
                this.recordList.push(record1);
            }
        }

        @Watch('recordList')
        onRecordListChange(){
            window.localStorage.setItem(dbName,JSON.stringify(this.recordList));
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