
import { Button } from 'antd';
import React, { memo, useState } from 'react';
import './Child1.scss'

interface ChildProps {
    onClickButton: React.MouseEventHandler<HTMLElement>;
    children?: any
}
const Child1 = memo((props: ChildProps) => {
    const { onClickButton, children } = props;
    const [first, setfirst] = useState(true)

    return (
        <React.Fragment>
            <Button onClick={onClickButton}>{children}</Button>
            <span>{Math.random()}</span>
            <Button onClick={() => setfirst(!first)}>hh</Button>
            {first + ''}
        </React.Fragment>
    )
})
export default Child1