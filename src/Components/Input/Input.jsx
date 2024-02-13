import { useState } from "react";
import Button from "../Button/Button";
import "./Input.css";

const Input = (props)=> {

const [inputValue, setInputValue] = useState(""); //Se face o destructurare pe un array. Pentru a se intelege mai bine:

//const state = useState("");
//const inputValue = state[0];
//const setInputValue = state[1];


const handleInputValue = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue);
};

    const handleAddTask = ()=>{
        props.addTodo(inputValue);
        setInputValue("");
    };
    return (
        <div className="input">
            <input 
                type="text" 
                placeholder={props.textPlaceHolder} 
                onChange={handleInputValue}  
                value={inputValue}
                />
            <Button textBtn = {props.textButton} clickFunction={handleAddTask} /> 
        </div>
    );
};


export default Input;