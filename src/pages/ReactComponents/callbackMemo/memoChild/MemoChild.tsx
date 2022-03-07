
import { Button, Divider, Tag } from 'antd';
import React, { Fragment, useState, useMemo } from 'react';
import './MemoChild.scss'

interface MemoChildProps {
    state: number,
    fn: Function
}
const MemoChild = (props: MemoChildProps) => {
    const { state } = props;
    const [, setRandom] = useState<number>(0); //{1}

    function getState() {  //{2}
        console.log("消耗性能的计算"); //{3}
        let temp = 0;
        for (let index = 0; index < 1000; index++) {
            temp += index;
        }
        return temp;
    }

    const memorizedValue = useMemo(() => getState(), []) // {7}
    console.log("computeValue", memorizedValue)//{5}


    return (
        <Fragment>
            Admin
            <Divider orientation="left">random</Divider>
            <Button type="ghost" onClick={() => setRandom(Math.floor(Math.random() * 10 + 1))}>setRandom</Button>  {/* {6} */}
        </Fragment>
    )
}
export default MemoChild