import React from 'react';
import './Button.css';  //CSS

//LOGIC Method/Function here
//Create Boolean Method ()=>{} with PARAMETER value
//CHECK IF the VALUE is a NUMBER: then RETURN the result of the Boolean
const isOperator = value => {
    //function: isNaN() = Not a Number; so !isNaN() = it is a Number
    return !isNaN(value) || value ==="." || value === "="; //Return can be TRUE or FALSE
}

//this is the Actual Element of the COMPONENT in the APP.JS
const Button = props => (
    //props.children = VALUE/TEXT/DATA inside of this DIV
    //MAKING LOGIC in the STYLE className: Will Determine what Style will be applied
    //Default className is button-wrapper; CALLING the Boolean Method isOperator(): will return if TRUE or NOT
    //NOTICE: TO Determine the Style: in className there is a LOGIC: IF True useThe DEFAULT "button-wrapper" Else useThe "operator"
    // props.handleClick is equalTo addToInput(buttonTextValue)Function == so it is expecting PARAMETER:
    //Execute the props.handleClick by using arrowFunction: onClick = to arrowFunction
    //Important: ONCE this Button is CLICK: that's only the time it will EXECUTE/CALL the FUNCTION props.handleClick(), the PARAMETER is the TEXT_VALUE of the BUTTON
    //onClick={()=>props.handleClick(props.children) } BECAUSE in the APP.JS the PROPS only EQUATE the FUNCTION addToInput() and DID NOT use arrowFunction
    //Important: SAMPLE of OVERLOADING contructor in JAVA: "onClick={()=>props.handleClick(props.children)}" this props.handleClick is CALLING ONLY the "handleClick" props with PARAMETER
    //NOTICE: <ClearButton handleClear={()=>(this.setState({textValue:""}))}>CLEAR </ClearButton> : ALready use arrowFunction to Execute the FUNCTION
    <div className={`button-wrapper ${isOperator(props.children) ? null : "operator"}`} onClick={()=>props.handleClick(props.children) }>
        {props.children}
    </div>  
) 

export default Button;  //Export to be used for import by other 