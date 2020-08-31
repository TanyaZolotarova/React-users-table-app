import IEditInterface from "../Interfaces/IEditInterface";

export interface TableComponentInterface {
    addTextInInput: (text: string) => void,
    updatePage: (page: number) => void,
    result:  IEditInterface[],
    pageCount: number,
    currentPage: number,
}
