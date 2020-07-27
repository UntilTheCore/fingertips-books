<template>
    <div class="types">
        <ul :class="`${prefixClass}-content`">
            <li :class="liClass(item.id)"
                @click="selectType(item.id)"
                v-for="item in dataSource"
                :key="item.id">{{item.value}}
            </li>
        </ul>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component, Prop } from 'vue-property-decorator';
    
    type OmitTabsDataType = Pick<TabsDataType, 'id'>
    @Component
    export default class Types extends Vue {

        // type 由Tabs组件自己维护，组件只将当前用户选择的情况返回
        @Prop(String) readonly prefixClass !: string;
        // 外部组件需要默认选中则需给type传一初始值。
        @Prop({ required: true, type: String }) readonly type!: string;
        @Prop({ required: true, type: Array }) readonly dataSource?: TabsDataType[];

        currentSelect = '';

        created() {
            this.currentSelect = this.type;
        }
        selectType(type: string) {
            this.currentSelect = type;
            this.$emit('update:type', type);
        }
        liClass(data: string) {
            return {
                [`${this.prefixClass}-item`] : 'xxx',
                selected: data === this.currentSelect,
        }
        }
    }
</script>

<style lang='scss' scoped>
    .types {
        background: #C4C4C4;

        > ul {
            display: flex;
            height: 64px;

            > li {
                flex: 1;
                display: flex;
                position: relative;
                justify-content: center;
                align-items: center;

                &.selected::after {
                    content: "";
                    display: block;
                    width: 100%;
                    border: 2px solid #333;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                }
            }
        }
    }
</style>
