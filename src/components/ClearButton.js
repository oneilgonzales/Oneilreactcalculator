import React from 'react'
import './ClearButton.css'

//expecting PARAMETER in this COMPONENT
const ClearButton = (props)=>(
    // onClick props.handleClear == calling the handleClear Function
    <div className="clear-btn" onClick={props.handleClear} >
        {/* props.children == any VALUE in BETWEEN this DIV */}
        {props.children}
    </div>
)

export default ClearButton;