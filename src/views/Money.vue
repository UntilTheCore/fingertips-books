<template>
    <div class="money">
        <Layout class-prefix="layout">
            <NumberPad :content="record.amount" @update:content="getContent" />
            <Types :type.sync="record.type" />
            <Notes :note.sync="record.note"/>
            <Tags :data-source.sync="record.tags" :selectTags.sync="record.selectTags"/>
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

    type Record = {
        tags: string[];
        selectTags: string[];
        type: string;
        note: string;
        amount: number;

    }

    @Component({
        components: {
            Tags, Notes, Types, NumberPad
        }
    })
    export default class Money extends Vue {
        // 初始数据环境
        record: Record = {
            tags: ['衣','食','住','行'],
            selectTags: [],
            type: '-',
            note: '',
            amount: 0
        }
        getContent(content: string){
            this.record.amount = parseFloat(content);
            console.log(this.record.amount);
        }
        @Watch('record.tags')
        onTagsChanges() {
            console.log('tags----------');
            console.log(this.record.tags);
        }
        @Watch('record.selectTags')
        onSelectTagsChange() {
            console.log('selectTags----------');
            console.log(this.record.selectTags);
        }
        @Watch('record.type',{deep:true})
        onTypeChange() {
            console.log(this.record.type);
        }
        @Watch('record.note')
        onNoteChange(){
            console.log(this.record.note);
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