import IEditInterface from "/home/tanya/PhpstormProjects/untitled8/src/Container/TypeScript/Interfaces/IEditInterface";

export interface RowComponentInterface {
    row: IEditInterface,
    index: number,
    users: IEditInterface[],
    editUser:  (rows: IEditInterface[]) => void,

}
