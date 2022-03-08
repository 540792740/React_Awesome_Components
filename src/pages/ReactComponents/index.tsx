
import React, { useEffect } from 'react';
// import ParentComponent from './callbackMemo/example1/ParentComponent';
import ParentComponent2 from './callbackMemo/example2/ParentComponent2';
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
        </React.Fragment>
    )
}
export default ReactComponents