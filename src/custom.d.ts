type RecordItem = {
    selectTags: Tag[];
    type: string;
    note: string;
    amount: number;
    createAt: string;
}

type Tag = {
    id: string;
    name: string;
}
type TagItem = {
    data: Tag[];
    fetch: () => Tag[];
    save: () => void;
    create: (data: string) => 'duplicate' | 'success';
    update: (id: string, name: string) => 'success' | 'not found' | 'duplicate';
    remove: (id: string) => boolean;
    init: () => void;
}

type TabsDataType = {
    id: string;
    value: string;
}

// 相当于: type OmitUser = { age: number; name: string; }
// type OmitUser = Omit<TabsDataType, 'id'>;

type rootState = {
    recordList: RecordItem[];
    tagList: Tag[];
    currentTag: Tag | undefined;
}

type hashTableType = {
    title: string;
    total: number;
    items: RecordItem[];
}
