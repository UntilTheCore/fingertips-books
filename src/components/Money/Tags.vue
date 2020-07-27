<template>
    <div class="tags">
        <ul class="current">
            <li @click="toggle(item)" :class="{selected:selectedTags.indexOf(item) >= 0 }" v-for="item in dataSource" :key="item.id">
                {{item.name}}
            </li>
        </ul>
        <div class="new">
            <button @click="createTag">新增标签</button>
        </div>
    </div>
</template>

<script lang='ts'>
    import { Component, Prop, Watch } from 'vue-property-decorator';
    import { mixins } from 'vue-class-component';
    import TagHelper from '@/mixins/TagHelper';

    @Component
    export default class Tags extends mixins(TagHelper){
        @Prop(Array) readonly dataSource: Tag[] | undefined;
        @Watch('selectedTags')
        onSelectedTagsChange(){
            this.$emit('update:selectTags',this.selectedTags);
        }
        selectedTags: Tag[] = [];

        toggle(tag: Tag) {
            const index = this.selectedTags.indexOf(tag);
            if ( index >= 0 ) {
                this.selectedTags.splice(index, 1);
            } else {
                this.selectedTags.push(tag);
            }
        }
    }
</script>

<style lang='scss' scoped>
    .tags {
        font-size: 14px;
        padding: 16px;
        width: 100%;

        > .current {
            display: flex;
            flex-wrap: wrap;
            overflow: auto;

            > li {
                $h: 24px;
                $bgc: #d9d9d9;
                height: $h;
                line-height: $h;
                padding: 0 16px;
                margin-bottom: 4px;
                margin-right: 8px;
                background: $bgc;
                border-radius: 12px;

                &.selected {
                    background: darken($bgc,40%);
                    color: #fff;
                }
            }
        }

        > .new {
            margin-top: 16px;

            > button {
                background-color: transparent;
                border-bottom: 1px solid #666;
                padding: 2px 5px;
                font-family: inherit;
                color: #999;
            }
        }
    }
</style>