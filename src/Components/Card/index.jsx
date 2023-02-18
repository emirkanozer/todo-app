import React from "react";
import Input from "../Input";
import Todo from "../Todo";
import styles from "./styles.module.css";
function Card() {
  return (
    <div className={styles.wrapper}>
      <h1>My todos</h1>
      <Input></Input>
      <Todo></Todo>
    </div>
  );
}

export default Card;
