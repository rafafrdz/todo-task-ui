import React, { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);
  function increaseClick() {
    setCount(count + 1);
  }
  function decreaseClick() {
    setCount(count - 1);
  }
  return (
    <div>
      <h1 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          So many {count} clicks!
        </label>
      </h1>
      <button onClick={increaseClick} className="btn btn__primary btn__lg">
        Up clicks!
      </button>
      <button onClick={decreaseClick} className="btn btn__primary btn__lg">
        Down clicks!
      </button>
    </div>
  );
}

export default Counter;
