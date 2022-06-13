import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import TodoProvider from "./providers/TodoProvider";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
      </header>
      <TodoProvider> {/* Need to wrap all components with the provider so that they have access to props. */}
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;
