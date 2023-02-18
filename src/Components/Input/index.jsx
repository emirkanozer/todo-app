import React from "react";
import { useFormik } from "formik";
import uuid from "react-uuid";
import styles from "./styles.module.css";
import { useTodo } from "../../Contexts/TodoContext/TodoContext";

function Input() {
  const { addTodo } = useTodo();
  const formik = useFormik({
    initialValues: {
      id: "",
      todo: "First Todo",
      done: false,
    },
    onSubmit: (values) => {
      addTodo(values.todo);
    },
  });
  return (
    <div className={styles.wrapper}>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="todo">Enter Todo: </label>
        <input
          className={styles.input_todo}
          id="todo"
          name="todo"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.todo}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Input;
