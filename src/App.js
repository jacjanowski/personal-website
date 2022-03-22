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
        <h1> About Me </h1>
        <p style={{fontSize: 43}}>Graduate from UIC with BS in Computer Science </p>
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


            <Fade left duration={2000}>
                <h4 className="title">Have a look around </h4>
            </Fade>

            {/* <Fade right duration={3000}>
              <div id="socials">
                <SocialIcon url="https://www.linkedin.com/in/jacob-janowski-uic/" />
                <SocialIcon url="https://github.com/jacjanowski" />
                <SocialIcon url="https://www.instagram.com/jacobjanowski/" />
              </div>
            </Fade> */}

          </header>
          {slider}
        </div>
      </div>
    </>
  );
}

export default App;
