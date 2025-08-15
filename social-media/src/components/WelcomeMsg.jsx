const WelcomeMsg = ({ onGetPostClicked }) => {
  return (
    <center className="welcome-msg">
      <h1>There are no posts</h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={onGetPostClicked}
      >
        Get Posts from Server
      </button>
    </center>
  );
};

export default WelcomeMsg;
