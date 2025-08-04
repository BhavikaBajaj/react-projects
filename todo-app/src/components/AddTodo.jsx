import { useState, useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({ onNewItem }) {
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   noOfUpdates.current++;
  // };
  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  //   console.log(`No of updates are: ${noOfUpdates.current}`);
  // };
  const handleAddButtonClicked = (event) => {
    // console.log(event);
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    // console.log(`${todoName} due on: ${dueDate}`);
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
    // setTodoName("");
    // setDueDate("");
  };
  return (
    <div className="container text-center">
      <form className="row self-row" onSubmit={handleAddButtonClicked}>
        <div className="col-4">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo here"
            // value={todoName}
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-2">
          <input
            type="date"
            ref={dueDateElement}
            // value={dueDate}
            // onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button className="btn btn-success self-button">
            <BiMessageAdd></BiMessageAdd>
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
