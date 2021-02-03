import React from 'react';
import './Input.css'

//Creating custom input element
//USE 
const Input = (props)=>(
    <div className="input">{props.userInput}</div>
)

export default Input;