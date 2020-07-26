import tagListModel from '@/model/tagListModel';

const tagTool = {
    create() {
        const content = window.prompt('请输入标签名:');
        if(content && content.trim() !== '') {
            const res = tagListModel.create(content.trim());
            if(res === 'duplicate'){
                alert('标签名重复!');
            }else {
                alert('创建成功!');
            }
        } else if(content === '') {
            alert('标签名不能为空!');
        }
    },
}

export default tagTool;