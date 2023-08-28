
import FilterButton from "./components/FilterButton";
import Form from "./components/From";
import TaskList from "./components/TaskList";
import Counter from "./components/Counter";
import { useState } from "react";

function App(props) {
  const [tasks, setTask] = useState(props.tasks)
  function addTask(name) {
    const task = { id: "todo-id", name: name, completed: false }
    setTask([...tasks, task]);
  }
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask}/>
      <Counter/>
      <div className="filters btn-group stack-exception">
        <FilterButton filterName="all"/>
        <FilterButton filterName="available"/>
        <FilterButton filterName="completed"/>
      </div>     
      <TaskList task={tasks}/>
  
    </div>
  );
}


export default App;
