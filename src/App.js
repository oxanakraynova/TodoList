import React, { Fragment, useEffect, useState } from "react";
import AddTask from "./Components/Tasks/AddTask";
import TasksList from "./Components/Tasks/TasksList";
import "./App.css";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};

function App() {
  const [tasksList, setTasksList] = useState(getLocalStorage());

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(tasksList));
  }, [tasksList]);

  const addTaskHandler = (uTask) => {
    setTasksList((prevTasksList) => {
      const updatedTasks = [...prevTasksList];
      updatedTasks.unshift({ task: uTask, id: Math.random().toString() });
      return updatedTasks;
    });
  };
  const deleteItemHandler = (taskId) => {
    setTasksList((prevTasksList) => {
      const updatedTasks = prevTasksList.filter((task) => task.id !== taskId);
      return updatedTasks;
    });
  };

  let content = <h3>Task's list is empty. Maybe add a few tasks?</h3>;

  if (tasksList.length > 0) {
    content = <TasksList tasks={tasksList} onDeleteItem={deleteItemHandler} />;
  }

  return (
    <Fragment>
      <h1>Let's plan your day!</h1>
      <AddTask onAddTask={addTaskHandler} />
      {content}
    </Fragment>
  );
}

export default App;
