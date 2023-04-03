import { useState } from "react";
import "./App.css"


const App = () => {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleClick = () => {
    const id = todoList.length + 1;
    setTodoList((prev) => [
      ...prev,
      {
        id: id,
        task: input,
        
      },
    ]);
    setInput("");
  };

  const deleteTodo = (id) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleTodoClick = (id) => {
    setTodoList((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  };

  const editTodo = (id, newTask) => {
    setTodoList((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, task: newTask };
        } else {
          return todo;
        }
      })
    );
  };

  const handleEditClick = (id, currentTask) => {
    const newTask = prompt("Enter new task:", currentTask);
    if (newTask !== null && newTask !== "") {
      editTodo(id, newTask);
    }
  };

  return (
          
      <div className="list">
                <h2>Todo List</h2>
        <input value={input} onInput={(e) => setInput(e.target.value)} />
        <button onClick={() => handleClick()}>Add</button>

        <ul>
          {todoList.map((todo) => {
            return (
              <li key={todo.id}>
                <p
                  completed={todo.completed}
                  onClick={() => handleTodoClick(todo.id)}
                >
                  {todo.task}
                </p>
                <button onClick={() => handleEditClick(todo.id, todo.task)}>
                  Edit
                </button>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    
  );
};

export default App;
