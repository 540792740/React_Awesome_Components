import { Form, Input, Table } from 'antd';
import React, { useEffect, useRef } from 'react';
import { tableData } from '../../DummyData/data';

interface TableListProps {
}

const TableList: React.FC<TableListProps> = (props) => {
    const formRef = useRef(null);
    const [form] = Form.useForm(); // 编辑state

    // 列
    const orderColumn = [
        {
            title: "颜色",
            dataIndex: 'colour',
            key: 'colour',
            render: (value: any, record: any, index: any) => {
                const obj = {
                    children: <Form.Item
                        name={[record.name, 'colour']}
                        fieldKey={[record.fieldKey, 'colour']}
                    >
                        <Input style={{ cursor: "default", color: "black" }} bordered={false} disabled={true} />
                    </Form.Item>,
                    props: { rowSpan: 1 },
                };
                if (index === 0) {
                    obj.props.rowSpan = 3;
                }
                if (index === 1) {
                    obj.props.rowSpan = 0;
                }
                if (index === 2) {
                    obj.props.rowSpan = 0;
                }
                return obj;
            },
        },
        {
            title: "尺码",
            dataIndex: 'size',
            key: 'size',
            render: (_: any, record: any) => {
                return (
                    <Form.Item
                        name={[record.name, 'size']}
                        fieldKey={[record.fieldKey, 'size']}
                    >
                        <Input
                            style={{ cursor: "default", color: "black" }}
                            bordered={false}
                            disabled={true}
                        />
                    </Form.Item>
                );
            },
        },
        {
            title: "数量",
            dataIndex: 'num',
            key: 'num',
            render: (_: any, record: any) => {
                return (
                    <Form.Item
                        name={[record.name, 'num']}
                        fieldKey={[record.fieldKey, 'num']}
                    >
                        <Input bordered={false} />
                    </Form.Item>
                );
            },
        },
    ];

    useEffect(() => {
        form?.setFields([{ name: "orderDetail", value: tableData }]);
    }, [])

    return (
        <Form
            labelAlign="left"
            labelCol={{ style: { width: '90%', height: '30px' } }}
            form={form}
            component={false}
            ref={formRef}
        >
            <Form.Item label={"下单信息"} colon={true}>
                <Form.List
                    name="orderDetail">
                    {(fields) => {
                        return (
                            <Table
                                style={{ width: '50vw' }}
                                bordered
                                dataSource={fields}
                                columns={orderColumn}
                                pagination={false}
                                scroll={{ y: "450px" }}
                                rowClassName="editable-row"
                            />
                        );
                    }}
                </Form.List>
            </Form.Item>
        </Form >

    )
}
export default TableList;