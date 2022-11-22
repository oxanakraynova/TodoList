import React from "react";
import classes from "./TasksList.module.css";
import Card from "../UI/Card";

const TasksList = (props) => {
  return (
    <ul className={classes.tasks}>
      {props.tasks.map((task) => (
        <Card key={task.id} id={task.id} onDelete={props.onDeleteItem}>
          {task.task}
        </Card>
      ))}
    </ul>
  );
};

export default TasksList;
