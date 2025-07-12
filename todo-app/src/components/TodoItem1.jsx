function TodoItem1() {
  let todoName = "Buy Milk";
  let todoDate = "13/07/2025";
  return (
    <div className="container">
      <div className="row self-row">
        <div className="col-4 item-container">{todoName}</div>
        <div className="col-2 item-container">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger self-button">
            Danger
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem1;
