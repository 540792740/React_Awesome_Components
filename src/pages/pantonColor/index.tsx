import React from 'react'



interface PantonProps {

}
function Panton(props: PantonProps) {
    const simpleColorConverter = require('simple-color-converter');

    var toPantonColor = new simpleColorConverter({
        pantone: "105C",
        to: 'hex6'
    })
    var fromPantonColor = new simpleColorConverter({
        color: 'rgb 10 200 50',
        to: 'pantone'
    })
    console.log(toPantonColor.color, fromPantonColor.color);


    return (
        <div>

        </div>
    )
}

export default Panton;