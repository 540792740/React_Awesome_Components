import React, { useState, useEffect, useRef } from 'react';
import { message, Pagination, Table } from 'antd';
import "./MyTable.less";
interface rowSelectDisabled {
    dataIndex: string;
    name: string;
}

interface MyTableProps {
    column: Function;
    tableRefesh: boolean;
    getTableData: Function;
    setTableRefesh: React.Dispatch<React.SetStateAction<boolean>>;
    pageSize?: number;
    returnTableData?: Function,
    rowSelection?: [Array<rowSelectDisabled>, Array<any>, Function]// [[{dataIndex:state,name:"已加入"}], setRowKeys]
}
const MyTable: React.FC<MyTableProps> = ({
    column,
    getTableData,
    tableRefesh,
    setTableRefesh,
    pageSize,
    returnTableData,
    rowSelection
}) => {
    const [loading, setLoading] = useState<boolean>(true)  // Loading
    const [currentPage, setCurrentPage] = useState<number>(1)  // 当前页码
    const [totalPages, setTotalPages] = useState<number>(0)  // 页码总数
    const [tableData, setTableData] = useState<Array<any>>([]); // 表格商品数据
    const [filterParam, setFilterParam] = useState<any>({}) // 表格过滤筛选条件

    // 分页
    const pageChangeHandler = (record: any) => {
        setLoading(true)
        setCurrentPage(record);
        setTableRefesh(true)
    }

    // 更新页码
    const updateTotalPage = (total: number) => {
        if (total < (currentPage - 1) * 10) setCurrentPage(1);
        if (total === 0) setCurrentPage(1);
        setTotalPages(total);
        rowSelection && rowSelection[2]([]); // 多选时，翻页要置空
    }

    // 搜索按钮
    const handleSearch = (selectedKeys: any, confirm: any, dataIndex: any) => {
        if (dataIndex == 'state_name') dataIndex = 'state'
        let temp = { ...filterParam }
        // 设置filters属性
        temp[dataIndex] = selectedKeys[0];
        confirm();  // 改变icon颜色
        setFilterParam(temp);
        setCurrentPage(1);
        setLoading(true)
        setTableRefesh(true)
    };

    // 重置按钮
    const handleReset = (clearFilters: any, selectedKeys: any, dataIndex: string) => {
        if (dataIndex == 'state_name') dataIndex = 'state'
        let temp = { ...filterParam }
        delete temp[dataIndex]
        setFilterParam(temp)
        setCurrentPage(1);
        clearFilters();
        setLoading(true)
        setTableRefesh(true)
    };


    // 表格排序功能
    const sortOrderValue = useRef('create_time');
    const sortDescValue = useRef(true);
    const sortHandler = (sorter: any) => {
        let dataIndex = sorter.order ? sorter.field : undefined;
        let order = sorter.order === "ascend" ? false : true;
        sortOrderValue.current = dataIndex;
        sortDescValue.current = order;
        setCurrentPage(1);
        setTableRefesh(true)
    }

    const rowSelectionProps = {
        selectedRowKeys: rowSelection && rowSelection[1],
        onChange: (selectedRowKeys: any) => {
            rowSelection && rowSelection[2]([...selectedRowKeys])
            // setAddIntensionParam(selectedRowKeys);
        },
        onSelectAll: (_, selectedRows: any,) => {
            let tempArr = []
            for (let item of selectedRows) {
                tempArr.push(item.id);
            }
            // setAddIntensionParam(tempArr);
        },
        getCheckboxProps: (record: any) => {
            if (record.state_name === "已加入") return { disabled: true }
        }
    };


    useEffect(() => {
        if (tableRefesh == true) {
            getTableData(currentPage, pageSize ?? 10, filterParam, sortOrderValue.current ?? "create_time", sortDescValue.current ?? true).then(res => {
                setTableData(res.data ?? []);
                updateTotalPage(res.total ?? 1);
                setTableRefesh(false);  // 返回表格数据获取成功信号
                setLoading(false);  //表格loading结束
                returnTableData && returnTableData(res)
                console.log(res);
            }).catch((err: any) => {
                console.log(err);
                message.warning("表格数据获取失败, 请刷新页面")
                setLoading(false);  //表格loading结束
            })
        }
    }, [tableRefesh]);

    return (
        <React.Fragment>
            <div className='aizao-table-container'>
                <Table
                    bordered
                    loading={loading}
                    scroll={{ y: "76vh" }}
                    columns={column(handleSearch, handleReset)}
                    dataSource={tableData}
                    pagination={false}
                    onChange={(_, __, sorter) => {
                        //fetch service
                        sortHandler(sorter)
                    }}
                    rowKey={record => record.id}
                    rowSelection={rowSelection && rowSelectionProps}
                />
            </div>
            <div className='aizao-table-pagination-container'>
                <Pagination
                    pageSize={pageSize ?? 10}
                    onChange={pageChangeHandler}
                    showSizeChanger={false}
                    current={currentPage}
                    total={totalPages}
                />
            </div>
        </React.Fragment>
    )
}
export default MyTable;