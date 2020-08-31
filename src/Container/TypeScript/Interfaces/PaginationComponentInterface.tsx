

export interface PaginationComponentInterface {
    setPage: (int: number) => void,
    /* setPage: Function,*/
    pagesCount: number,
    currentPage: number
}