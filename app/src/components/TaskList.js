import React from "react";
import Todo from "./Todo";

function TaskList(props) {
    const count = props.task?.length;
    const taskList = props.task?.map((task) => <Todo name={task.name} check={task.completed} id={task.id} key={task.id} />
    )
  return (
    <div>
    <h2 id="list-heading">{count} tasks remaining</h2>
    <ul
      role="list"
      className="todo-list stack-large stack-exception"
      aria-labelledby="list-heading"
    >
      {taskList}
    </ul>
    </div>
  );
}

export default TaskList;
