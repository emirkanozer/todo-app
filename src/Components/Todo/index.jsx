import React from "react";
import { useTodo } from "../../Contexts/TodoContext/TodoContext";
import styles from "./styles.module.css";
function Todo() {
  const { deleteTodo, todos, isDone } = useTodo();

  return (
    <>
      {todos.map((todo) => {
        const isCompleted = todo.done ? styles.done : styles.todos;
        console.log(isCompleted);
        return (
          <div className={styles.wrapper} key={todo.id}>
            <input
              className={styles.input_checkbox}
              type={"checkbox"}
              checked={todo.done}
              onChange={(e) => isDone(todo.id, e.target.checked)}
            />
            <div className={isCompleted}>{todo.todo}</div>
            <button
              className={styles.delete}
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              X
            </button>
          </div>
        );
      })}
    </>
  );
}

export default Todo;
