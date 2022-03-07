
import React, { useEffect } from 'react';
import ParentComponent from './callbackMemo/ParentComponent';
import './index.scss'

interface ReactComponentsProps {

}
function ReactComponents(props: ReactComponentsProps) {

    useEffect(() => {

    }, [])
    return (
        <React.Fragment>
            <ParentComponent />
        </React.Fragment>
    )
}
export default ReactComponents