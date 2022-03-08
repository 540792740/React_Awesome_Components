
import { Tag } from 'antd';
import React, { memo } from 'react';
import './Child.scss'

interface ChildProps {
    state: number,
    fn: Function
}
const Child = memo((props: ChildProps) => {
    const { state } = props;
    return (
        <div id="div1" >
            {console.log("ChildComponent Render")} {/* {1} */}
            <span>子组件</span>
            <Tag color="magenta">{state}</Tag>
        </div >
    )
})
export default Child