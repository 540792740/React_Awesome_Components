import React from 'react';
import BubblingCapture from './bubbling';
import './index.scss';

interface CssProps {

}

const CssBasic: React.FC<CssProps> = () => {
    return <div className='css-basic-container'>
        <div className='space-container'>
            <div className='space-normal'> space       this is normal </div>
            <div className='space-nowrap'> space       this is nowrap </div>
            <div className='space-pre'> space       this is pre </div>
        </div>

        <BubblingCapture />
    </div>
}

export default CssBasic