import React from "react";

/** props
 * name, check, id
 */
function Todo(props) {
    return (
        <li className="todo stack-small">
          {/** checkbox */ }
          <div className="c-cb">
            <input id={props.id} type="checkbox" defaultChecked={props.check} />
            <label className="todo-label" htmlFor={props.id}>
            {props.name}
            </label>
          </div>
          {/** edit button */ }
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">{props.name}</span>
            </button>
            {/** delete button */ }
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">{props.name}</span>
            </button>
          </div>

        </li>
    );
}

export default Todo;