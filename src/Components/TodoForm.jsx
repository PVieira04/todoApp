import { useState } from "react";
import { useTodoContext } from "../providers/TodoProvider";

const TodoForm = () => {
    const { getNumberOfTodoItems, addTodo } = useTodoContext(); 
    console.log(getNumberOfTodoItems);
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
            <h3>Number of todo items: {getNumberOfTodoItems()}</h3>
            <input type="text" value={todoItem} onChange={e => setTodoItem(e.target.value)}/>
            <button className="add-button" type="submit">Add Item</button>
        </form>
    );
};

export default TodoForm;