import React, { useRef, useState } from 'react';
import "./ColumnFilterDropdown.less";
import { SearchOutlined, FilterFilled } from '@ant-design/icons';
import { Input, DatePicker, Button, Space, Checkbox, Row, Col, Radio } from 'antd';
import { ColumnProps } from './model'

export const ColumnFilterDropdown = (
    name: string,
    dataIndex: string,
    ColumnProps?: ColumnProps
) => {
    const inputRef = useRef(null);  //搜索功能input
    const { RangePicker } = DatePicker;
    const { type, handleSearch, handleReset, categoryFilter } = ColumnProps
    return {
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
            return <div className='column-filter-container' style={{ padding: 8 }}>
                <div className='column-filter-types'>
                    {type === "search" &&
                        <Input
                            className=''
                            ref={inputRef}
                            maxLength={40}
                            placeholder={`查询${name}`}
                            value={selectedKeys[0]}
                            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                            onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                            style={{ marginBottom: 8, display: 'block' }}
                        />}

                    {type === "checkBox" && <div className='column-filter-checkbox'>
                        <Checkbox.Group
                            value={selectedKeys[0]}
                            onChange={(checkedValues) => setSelectedKeys([checkedValues])}>
                            <Row >
                                {categoryFilter.map((item) => {
                                    return <Col span={24}>
                                        <Checkbox value={item.value}>{item.showName}</Checkbox>
                                    </Col>
                                })}
                            </Row>
                        </Checkbox.Group>
                    </div>}

                    {type === "datePicker" && <div className='column-filter-datePicker'>
                        <RangePicker
                            showTime
                            value={selectedKeys[1]}
                            onChange={(dates, dateStrings: [string, string]) =>
                                setSelectedKeys([dateStrings, dates])}
                        />
                    </div>}

                    {type === "radio" && <div className='column-filter-radio'>
                        <Radio.Group
                            value={selectedKeys[0]}
                            onChange={(e) => setSelectedKeys([e.target.value])}>
                            <Row >
                                {categoryFilter.map((item, index) => {
                                    return <Col span={24}>
                                        <Radio value={item.value}>{item.showName}</Radio>
                                    </Col>
                                })}
                            </Row>
                        </Radio.Group>
                    </div>}
                </div>


                <Space className='column-filter-space'>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        搜索
                    </Button>
                    <Button
                        onClick={() =>
                            handleReset(clearFilters, selectedKeys, dataIndex)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        重置
                    </Button>
                </Space>
            </div>
        },
        filterIcon: filtered => {
            return type === 'search' ?
                <SearchOutlined style={{ fontSize: '15px', color: filtered ? '#1890ff' : undefined }} /> :
                <FilterFilled style={{ fontSize: '15px', color: filtered ? '#1890ff' : undefined }} />
        }
    }
}