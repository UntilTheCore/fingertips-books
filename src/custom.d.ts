type RecordItem = {
    selectTags: string[];
    type: string;
    note: string;
    amount: number;
    createAt: Date;
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
