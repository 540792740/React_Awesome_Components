
import React, { useEffect } from 'react';
// import ParentComponent from './callbackMemo/example1/ParentComponent';
import ParentComponent2 from './callback-memo/example2/ParentComponent2';
import CountDown from './count-down/CountDown';
import './index.scss'

interface ReactComponentsProps {

}
function ReactComponents(props: ReactComponentsProps) {

    useEffect(() => {
    }, [])
    return (
        <React.Fragment>
            <ParentComponent2 />
            {/* <ParentComponent /> */}
            <CountDown />

        </React.Fragment>
    )
}
export default ReactComponents