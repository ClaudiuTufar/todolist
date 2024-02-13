import "./Button.css";

const Button = (props)=> {
    return (
        <button onClick={props.clickFunction} >{props.textBtn}</button>
    );
};

export default Button;