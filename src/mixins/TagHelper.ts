import { Component } from 'vue-property-decorator';
import Vue from 'vue';

@Component
export default class TagHelper extends Vue {
    createTag() {
        let content = window.prompt('请输入标签名:');
        if ( content && content.trim() !== '' ) {
            content = content.trim();
            this.$store.commit('createTag',content);
        } else if ( content === '' ) {
            alert('标签名不能为空!');
            return false;
        }
    }
}
