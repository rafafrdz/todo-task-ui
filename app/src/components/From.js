import React, { useState } from "react";

function Form(props) {
  
  const [input, changeInput] = useState("")
  
  /** function to recover the input box */
  function handleChange(e){
    e.preventDefault();
    changeInput(e.target.value);

  }
  /** function to add task when submit it */
  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(input);
    changeInput("");
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <h1 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h1>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        placeholder="Insert here a new task!"
        value={input}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
