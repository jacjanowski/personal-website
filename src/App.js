import logo from "./logo.svg";
import "./App.css";
import AwesomeSlider from "react-awesome-slider";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SocialIcon } from "react-social-icons";
import "react-awesome-slider/dist/styles.css";
import Fade from "react-reveal/Fade";

let brandImages = [
  "images/cplusplus.svg",
  "images/css3.svg",
  "images/express.svg",
  "images/nodedotjs.svg",
  "images/html5.svg",
  "images/java.svg",
  "images/javascript.svg",
  "images/jquery.svg",
  "images/mongodb.svg",
  "images/mysql.svg",
  "images/npm.svg",
  "images/pandas.svg",
  "images/semanticuireact.svg",
  "images/bootstrap.svg",
  "images/anaconda.svg",
  "images/npm.svg",

];

const slider = (
  <AwesomeSlider mobileTouch={true} bullets={false}>
    <div>
      <Fade top duration={3000}>
        <h1> About Me </h1>
        <p style={{ fontSize: 43 }}>Graduate from UIC with BS in Computer Science </p>
      </Fade>

      <img id='me' src="images/me.jpg" />

      <div id="brands">
        <Fade bottom cascade duration={1000}>
          <img src={brandImages[0]} />
          <img src={brandImages[1]} />
          <img src={brandImages[2]} />
          <img src={brandImages[3]} />
        </Fade>

        <Fade bottom cascade duration={2000}>

          <img src={brandImages[4]} />
          <img src={brandImages[5]} />
          <img src={brandImages[6]} />
          <img src={brandImages[7]} />
        </Fade>

        <Fade bottom cascade duration={3000}>

          <img src={brandImages[8]} />
          <img src={brandImages[9]} />
          <img src={brandImages[10]} />
          <img src={brandImages[11]} />
        </Fade>

        <Fade bottom cascade duration={4000}>

          <img src={brandImages[12]} />
          <img src={brandImages[13]} />
          <img src={brandImages[14]} />
          <img src={brandImages[15]} />
        </Fade>
      </div>


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
