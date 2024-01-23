import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  // Create a function addTodo which add new object to todos with id as Date, text as newTodo and set newTodo to empty string
  const addTodo = () => {};

  // Create a function with take id as params and delete it todo id from todos
  const deleteTodo = (id) => {};

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Todo App</h1>
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          name=""
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new Todo"
          className="border p-2 flex-grow"
        />
        <button onClick={addTodo} className="bg-blue-500 text-white p-2">
          Add
        </button>
      </div>
      <ul className="list-disc pl-4 w-96 ">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center space-x-2 mb-4"
          >
            <p className="text-xl">{todo.text}</p>
            {/* Add delete button which call deleteTopo on click take todo is as argument */}
          </li>
        ))}
      </ul>
    </div>
  );
}
