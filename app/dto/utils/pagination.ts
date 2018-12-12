// 分页类
class Pagination {
    public currentPage: number;
    public pageSize: number;
    constructor(currentPage: number, pageSize: number) {
        this.currentPage = currentPage;
        this.pageSize = pageSize;
    }
}

export {
    Pagination
}