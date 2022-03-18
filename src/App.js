import logo from "./logo.svg";
import "./App.css";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const slider = (
  <AwesomeSlider mobileTouch={true} bullets={false}>
    <div>
      <div className="container">
        <h1>I'm Jacob</h1>
      </div>
    </div>
    <div style={{backgroundColor: 'blue'}}>2</div>
    <div>3</div>
    <div>4</div>
  </AwesomeSlider>
);

function App() {
  return (
    <div>
      {slider}
      <div className="container" style={{ height: "100vh" }}>
        <p>Im just kidding dude</p>
      </div>
    </div>
  );
}

export default App;
