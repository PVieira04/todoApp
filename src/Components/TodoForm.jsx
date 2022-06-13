import { useState } from "react";
import { useTodoContext } from "../providers/TodoProvider";

const TodoForm = () => {
    const { getNumberofTodoItems, addTodo } = useTodoContext(); 
    const [todoItem, setTodoItem] = useState("");
    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (!todoItem) return;

        addTodo(todoItem);

        setTodoItem("");
        console.log("new todo => ", todoItem);
    };
    return (
        <form onSubmit={handleOnSubmit}>
            <h3>Number of todo items: {getNumberofTodoItems}</h3>
            <input type="text" value={todoItem} onChange={e => setTodoItem(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
    );
};

export default TodoForm;