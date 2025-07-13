import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/ClockSlogan";
import ClockTime from "./components/CurrentTime";

function App() {
  return (
    <center>
      <ClockHeading></ClockHeading>
      <ClockSlogan></ClockSlogan>
      <ClockTime></ClockTime>
    </center>
  );
}

export default App;
