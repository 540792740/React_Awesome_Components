import { ColumnType } from "src/utils/type";

export interface ColumnProps {
    type: ColumnType,
    handleSearch?: Function,
    handleReset?: Function,
    categoryFilter?: Array<{ showName: string, value: string | number }>
}

export type SingleColumnType = string | number | ColumnProps | Function;
