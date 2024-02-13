import { useState } from "react";
import Input from "../Input/Input";
import Todo from "../Todo/Todo";
import "./Card.css";

const Card = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([
            ...todos,
            {
            todoName: todo,
        
        }
    ])
    };

    console.log(todos);
    return (
        <div className="card">
            <h1>Get Things Done!</h1>
            <Input textButton= "Add Task" textPlaceHolder= "What is the task for today?" addTodo={addTodo}/>
            <Input textButton= "Edit Task" textPlaceHolder= "Edit your task"/>
           
            {todos.map((todo)=>(
                <Todo text={todo.todoName}/>
            ))}
        </div>
    );
};


export default Card;