import {React, Component} from 'react'
import './App.css';
import Button from './components/Button'; //import Button to be able to use it
import Input from './components/Input'; //import Input to be able to use it
import ClearButton from './components/ClearButton'; //import ClearButton to be able to use it
import * as math from 'mathjs'; //Importing MathJs as math
//testing for git pages
class App extends Component { 
    //Create State Object
    state = { 
        textValue: ""
    }
    //Create arror Function with PARAMETER to Concatenate the TEXT in the INPUT: Using ()=>{} and not ()=>()
    addToInput = buttonTextValue =>{
        this.setState({textValue: this.state.textValue + buttonTextValue});
    }
    //Create arror Function with NO_PARAMETER to handle the EQUAL/RESULT PROCESS of the EQUATION
    handleEqualResult = ()=>{
        this.setState({textValue: math.evaluate(this.state.textValue)});
    }
    render(){  //RENDER 
        return (
            <div className="app">
              {/* parentElement with calc-wrapper */}
                <div className="calc-wrapper">
                {/* Input and Button = no className Needed, already designed in their component itself */}
                {/* PROPS: VariableName, FunctionName that has TEXT VALUE or RETURN VALUE can be PASSED to the COMPONENT so it will be processed by the COMPONENT*/}
                    {/* PASSING THE TEXT_VALUE as "userInput" in the component INPUT */}
                    <Input userInput={this.state.textValue}></Input>
                    <div className="row">
                         {/* childrenElement with row */}
                         {/* <Button>7</Button> is one of the children of the parent DIV element  */}
                         {/* 7, 8 , 9, / are children VALUE text of the COMPONTENT*/}
                         {/* PASSING PROPS_NAME as "handleClick" which CALLING certain FUNCTION/METHOD in the component BUTTON */}
                        <Button handleClick={this.addToInput}>7</Button>
                        <Button handleClick={this.addToInput}>8</Button>
                        <Button handleClick={this.addToInput}>9</Button>
                        <Button handleClick={this.addToInput}>/</Button>
                    </div>
                    <div className="row">
                        <Button handleClick={this.addToInput}>4</Button>
                        <Button handleClick={this.addToInput}>5</Button>
                        <Button handleClick={this.addToInput}>6</Button>
                        <Button handleClick={this.addToInput}>*</Button>
                    </div>
                    <div className="row">
                        <Button handleClick={this.addToInput}>3</Button>
                        <Button handleClick={this.addToInput}>2</Button>
                        <Button handleClick={this.addToInput}>1</Button>
                        <Button handleClick={this.addToInput}>-</Button>
                    </div>
                    <div className="row">
                    {/* Just PASSING the functionName , addToInput*/}
                        <Button handleClick={this.addToInput}>0</Button>
                        <Button handleClick={this.addToInput}>.</Button>
                        {/* Execute functionName thru arrowFunction */}
                        {/* this.handleEqualResult will not be triggered in the BUTTON Component since it has no PARAMETER: only handleClick with PARAMETER will be execute in the BUTTON COMPONENT onCLICK */}
                        {/* NOTICE: it is a sample of OVERLOADING contructor in the JAVA */}
                        <Button handleClick={()=>this.handleEqualResult()}>=</Button>
                        <Button handleClick={this.addToInput}>+</Button>
                    </div>
                    {/* Creating and Passing the props handleClear Function */}
                    {/* action when click: set textValue = "" */}
                    <ClearButton handleClear={()=>(this.setState({textValue:""}))}>CLEAR </ClearButton>
                    
                </div>
            </div> 
          );
    }
} 

export default App;
 