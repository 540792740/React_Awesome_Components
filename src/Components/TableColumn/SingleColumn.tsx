import * as FilterProps from './index';
import { ColumnProps } from './model';

// Column align 类型
export type AlignType = 'left' | 'center' | 'right';

export const singleColumn = (
    name: string,
    dataIndex: string,
    width?: string | number,
    columnProps?: ColumnProps,
    renderProps?: any,
    sorter?: boolean
) => {
    let tempColumn = {
        title: name,
        dataIndex: dataIndex,
        key: dataIndex,
        width: width ?? 100,
        align: "center" as AlignType,
        ellipsis: true,
    };
    if (renderProps) tempColumn["render"] = renderProps;
    if (columnProps) tempColumn = { ...tempColumn, ...FilterProps.ColumnFilterDropdown(name, dataIndex, columnProps), }
    if (sorter) tempColumn['sorter'] = true;
    return tempColumn;
};