import React from "react";
import styles from "./styles.module.css";
function Todo({ todos }) {
  return (
    <>
      {todos.todos.map((todo) => (
        <div className={styles.wrapper} key={todo.id}>
          <input className={styles.input_checkbox} type={"checkbox"} />
          <div className={styles.todos}>{todo.todo}</div>
          <button className={styles.delete}>X</button>
        </div>
      ))}
    </>
  );
}

export default Todo;
