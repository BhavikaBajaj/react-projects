import { AiFillDelete } from "react-icons/ai";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItem({ todoDate, todoName, onDeleteClick }) {
  const contextObj = useContext(TodoItemsContext);
  const deleteItem = contextObj.deleteItem;
  return (
    <div className="container">
      <div className="row self-row">
        <div className="col-4 item-container">{todoName}</div>
        <div className="col-2 item-container">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger self-button"
            onClick={() => deleteItem(todoName)}
          >
            <AiFillDelete></AiFillDelete>
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
