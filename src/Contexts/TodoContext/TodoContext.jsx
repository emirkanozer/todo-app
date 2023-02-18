import { createContext, useContext, useState } from "react";
import uuid from "react-uuid";

const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

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
  const values = {
    todos,
    addTodo,
  };
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export const useTodo = () => useContext(TodoContext);

export default TodoContextProvider;
