import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddTask.module.css";

const AddTask = (props) => {
  const [enteredTask, setEnteredTask] = useState("");
  const [isValid, setIsValid] = useState(true);
  const taskChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredTask(event.target.value);
  };

  const addTaskHandler = (event) => {
    event.preventDefault();
    if (enteredTask.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddTask(enteredTask);
  };
  return (
    <React.Fragment>
      <Card className={classes.input}>
        <div className={`${classes["input"]} ${!isValid && classes.invalid}`}>
          <form onSubmit={addTaskHandler}>
            <label htmlFor="task">Task</label>
            <input
              id="task"
              type="text"
              value={enteredTask}
              onChange={taskChangeHandler}
            />
            <Button type="submit">Add Task</Button>
          </form>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default AddTask;
