import React from "react";
import { useTodo } from "../../Contexts/TodoContext/TodoContext";
import styles from "./styles.module.css";
function Todo() {
  const { deleteTodo, todos } = useTodo();
  const handleDelete = (id) => {
    deleteTodo(id);
  };
  return (
    <>
      {todos.map((todo) => (
        <div className={styles.wrapper} key={todo.id}>
          <input className={styles.input_checkbox} type={"checkbox"} />
          <div className={styles.todos}>{todo.todo}</div>
          <button
            className={styles.delete}
            onClick={() => {
              handleDelete(todo.id);
            }}
          >
            X
          </button>
        </div>
      ))}
    </>
  );
}

export default Todo;
