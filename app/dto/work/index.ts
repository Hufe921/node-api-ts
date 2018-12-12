// 作品展示类
class Show {
    id: number;
    GUID: string;
    submitCount: number;
    name: string;
    author: string;
    cover: string;
    submiterNo: string;
    isLatest: boolean;
    isFirst: boolean;
    isRecommend: boolean;
    status: number;
    isIndexShow: boolean;
    constructor(id: number, GUID: string, submitCount: number, name: string, author: string, cover: string,
        submiterNo: string, isLatest: boolean, isFirst: boolean, isRecommend: boolean, isIndexShow: boolean, status: number) {
        this.id = id;
        this.GUID = GUID;
        this.submitCount = submitCount;
        this.name = name;
        this.author = author;
        this.cover = cover;
        this.submiterNo = submiterNo;
        this.isLatest = isLatest;
        this.isFirst = isFirst;
        this.isRecommend = isRecommend;
        this.status = status;
        this.isIndexShow = isIndexShow;
    }
}

export {
    Show
}