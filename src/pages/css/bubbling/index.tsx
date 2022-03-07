
import React, { useEffect } from 'react';
import './index.scss'

interface PantonProps {

}
function BubblingCapture(props: PantonProps) {

    useEffect(() => {
        var div1 = document.getElementById("div1");
        var div2 = document.getElementById("div2");
        div1.addEventListener('click', () => console.log("div1--捕获阶段"), true);
        div2.addEventListener('click', () => console.log("div2--捕获阶段"), true);
        div1.addEventListener('click', () => console.log("div1--冒泡阶段"));
        div2.addEventListener('click', () => console.log("div2--冒泡阶段"));
    }, [])
    return (
        <div id="div1" onClick={(e) => e.stopPropagation()}>
            <div id="div2">div2</div>
        </div>
    )
}
export default BubblingCapture