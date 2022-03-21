import logo from "./logo.svg";
import "./App.css";
import AwesomeSlider from "react-awesome-slider";
import { BsLinkedin } from "react-icons/bs";
import { SocialIcon } from "react-social-icons";
import "react-awesome-slider/dist/styles.css";
import Fade from "react-reveal/Fade";

const slider = (
  <AwesomeSlider mobileTouch={true} bullets={false}>
    <div>
      <Fade top duration={3000}>
        <h1>About Me </h1>
      </Fade>
    </div>
    <div>
      <Fade top>3</Fade>
    </div>
    <div>4</div>
  </AwesomeSlider>
);

function App() {
  return (
    <>
      <div className="main">
        <div className="wrapper">
          <header>
            <img src="images/Itasca.jpg" className="background" />
            <img src="images/Trees.png" className="foreground" />
            <Fade bottom>
              <h1 className="title">I'm Jacob</h1>
            </Fade>
            <div id="socials">
              <SocialIcon url="https://www.linkedin.com/in/jacob-janowski-uic/" />
              <SocialIcon url="https://www.linkedin.com/in/jacob-janowski-uic/" />
              <SocialIcon url="https://www.linkedin.com/in/jacob-janowski-uic/" />
              <SocialIcon url="https://www.linkedin.com/in/jacob-janowski-uic/" />
            </div>
            <Fade left duration={2000}>
              <div className="container">
                <h4 className="title">Have a look around </h4>
              </div>
            </Fade>


          </header>
          {slider}
        </div>
      </div>
    </>
  );
}

export default App;
