import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Morning Walk",
      dueDate: "06/03/2025",
    },
    {
      name: "Reading Newpaper",
      dueDate: "06/03/2025",
    },
    {
      name: "Koushik Sharma",
      dueDate: "06/03/2025",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
