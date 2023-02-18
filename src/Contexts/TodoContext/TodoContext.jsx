import { createContext, useContext, useState, useEffect } from "react";
import uuid from "react-uuid";

const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const addTodo = (value) => {
    setTodos((prev) => {
      return [
        ...prev,
        {
          id: uuid(),
          todo: value,
          done: false,
        },
      ];
    });
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const values = {
    todos,
    addTodo,
    deleteTodo,
  };
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export const useTodo = () => useContext(TodoContext);

export default TodoContextProvider;
