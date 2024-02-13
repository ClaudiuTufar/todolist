import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import "./Todo.css";

const Todo = (props)=> {
    return (
        <div className="todo">
            <div>{props.text}</div>
            <div className="icons">
            <FontAwesomeIcon icon={faPenToSquare} />
            <FontAwesomeIcon icon={faTrash} />
            </div>
        </div>
    );
};

export default Todo;
