import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

const initialTodoListState = ["Add Items by typing in the box above and pressing enter or clicking submit"]; // This is the initial state of "todoList". How can I remove the first item?

const TodoProvider = ({ children }) => {        //TodoProvider is the name of the function which provides all the props. We usually name it the same as the file.
    const [todoList, setTodoList] = useState(initialTodoListState);

    console.log(todoList);

    function getNumberOfTodoItems() {
        return todoList.length;
    }

    const addTodo = (newTodoItem) => {
        setTodoList([...todoList, newTodoItem]);
    };

    const removeTodo = (todoIndex) => {
        const newList = todoList.filter((_, index) => index !== todoIndex);
        setTodoList(newList);
    }

    const contextValue = {
        todoList,
        getNumberOfTodoItems,
        addTodo,
        removeTodo,
    };

    return ( 
        <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
     );
};

export const useTodoContext = () => useContext(TodoContext);
 
export default TodoProvider; // We need to export the function so that other components can request access to the props.