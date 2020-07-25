const dbName = 'fingertipsbooks-tagList';

const tagListModel: tagItem = {
    data: [],
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(dbName) || '[]');
    },
    save() {
        window.localStorage.setItem(dbName, JSON.stringify(this.data));
    },
    create(data) {
        if(this.data.indexOf(data) >= 0) {
            return 'duplicate';
        } else {
            this.data.push(data);
            this.save();
            return 'success';
        }
    },
    init(){
        if(window.localStorage.getItem(dbName) === null) {
            this.data = ['衣','食','住','行'];
            this.save();
        }
    }
};

// 模块第一次被加载时初始化数据
tagListModel.init();
export default tagListModel;