import React from "react";
import { useFormik } from "formik";
import styles from "./styles.module.css";
import { useTodo } from "../../Contexts/TodoContext/TodoContext";

function Input() {
  const { addTodo } = useTodo();
  const formik = useFormik({
    initialValues: {
      id: "",
      todo: "Enter Todo",
      done: false,
    },
    onSubmit: (values, bag) => {
      addTodo(values.todo);
      bag.resetForm();
    },
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formik.values.todo) {
      alert("Lütfen bir değer girin.");
      return;
    }
    formik.handleSubmit();
  };
  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo">Enter Todo: </label>
        <div className={styles.center}>
          <input
            className={styles.input_todo}
            id="todo"
            name="todo"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.todo}
          />
          {formik.errors.todo ? alert(formik.errors.todo) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Input;
