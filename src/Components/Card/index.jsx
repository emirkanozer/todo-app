import React from "react";
import { useTodo } from "../../Contexts/TodoContext/TodoContext";
import Input from "../Input";
import Todo from "../Todo";
import styles from "./styles.module.css";
function Card() {
  const todos = useTodo();
  return (
    <div className={styles.wrapper}>
      <h1>My todos</h1>
      <Input></Input>
      <Todo todos={todos}></Todo>
    </div>
  );
}

export default Card;
