

import React, { useCallback, useState } from 'react';
import Child1 from './childComponent/Child1';
import './ParentComponent2.scss'

interface ParentComponentProps {

}
function ParentComponent2(props: ParentComponentProps) {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    const handleClickButton1 = () => {
        setCount1(count1 + 1);
    };

    const handleClickButton2 = useCallback(() => {
        setCount2(count2 + 1);
    }, [count2]);

    return (
        <div>
            <Child1 onClickButton={handleClickButton1}>Button1</Child1>
            <br />
            <Child1 onClickButton={handleClickButton2}>Button2</Child1>
            <br />
            <Child1 onClickButton={() => setCount3(count3 + 1)}>
                Button3
            </Child1>
            <br />
        </div>
    );
}
export default ParentComponent2