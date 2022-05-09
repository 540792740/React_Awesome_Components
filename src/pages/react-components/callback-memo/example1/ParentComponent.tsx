

import { Button, Divider, Tag } from 'antd';
import React, { useCallback, useState } from 'react';
import Child from './childComponent/Child';
import MemoChild from './memoChild/MemoChild';
import './ParentComponent.scss'

interface ParentComponentProps {

}
function ParentComponent(props: ParentComponentProps) {
    const [count, setCount] = useState<number>(0); //{1}
    const [random, setRandom] = useState<number>(0); // { + 4}

    const memoizedFn = useCallback(() => { }, []); // {+ 8}


    return (
        <div  >
            <h5>hooks 性能优化篇</h5>


            <Divider orientation="left">count</Divider>
            <Tag color="magenta">{count}</Tag>
            <Button type="primary" onClick={() => setCount((o: number) => o += 1)}>setCount</Button> {/* {2} */}

            <Divider orientation="left">random</Divider>
            <Tag color="cyan">{random}</Tag>
            <Button type="ghost" onClick={() => setRandom(Math.floor(Math.random() * 10 + 1))}>setRandom</Button>  {/* + {5} */}

            <Divider orientation="left">子组件↓</Divider> {/* {3} */}
            <Child state={random} fn={memoizedFn} /> {/* + {7} */}
            <MemoChild state={random} fn={memoizedFn} /> {/* + {} */}

        </div >
    )
}
export default ParentComponent