type RecordItem = {
    selectTags: string[];
    type: string;
    note: string;
    amount: number;
    createAt: Date;
}

type tagItem = {
    data: string[];
    fetch: () => void;
    save: () => void;
    create: (data: string) => 'duplicate' | 'success';
    init: () => void;
}
