import logo from "./logo.svg";
import "./App.css";
import AwesomeSlider from "react-awesome-slider";
import { Container, Row, Col } from "react-bootstrap";
import { BsFillBootstrapFill, BsGlobe } from "react-icons/bs";
import { SocialIcon } from "react-social-icons";
import "react-awesome-slider/dist/styles.css";
import Fade from "react-reveal/Fade";
import Email from "./Components/Email";

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
  "images/react.svg",
  "images/pandas.svg",
  "images/semanticuireact.svg",
  "images/bootstrap.svg",
  "images/anaconda.svg",
  "images/npm.svg",
];

const slider = (
  
  <AwesomeSlider mobileTouch={true} bullets={false}>
    <div className="section">
      <Fade top duration={3000}>
        <Row>
          <h1>
            {" "}
            <code>{"<h1>"}</code> About Me <code>{"</h1>"}</code>{" "}
          </h1>

          <p>
            {" "}
            Graduate from University of Illinois at Chicago with BS in Computer
            Science. Currently freelancing and expanding upon other side
            projects as I am working on accepting a full-time offer as a
            Front-End Engineer.{" "}
          </p>

          <div id="brands">
            <Fade bottom cascade duration={1000}>
              <img src={brandImages[0]} />
              <img src={brandImages[1]} />
              <img src={brandImages[2]} />
              <img src={brandImages[3]} />
            </Fade>

            <Fade bottom cascade duration={2500}>
              <img src={brandImages[4]} />
              <img src={brandImages[5]} />
              <img src={brandImages[6]} />
              <img src={brandImages[7]} />
            </Fade>

            <Fade bottom cascade duration={4000}>
              <img src={brandImages[8]} />
              <img src={brandImages[9]} />
              <img src={brandImages[10]} />
              <img src={brandImages[11]} />
            </Fade>

            <Fade bottom cascade duration={5500}>
              <img src={brandImages[12]} />
              <img src={brandImages[13]} />
              <img src={brandImages[14]} />
              <img src={brandImages[15]} />
            </Fade>
          </div>
        </Row>
      </Fade>
    </div>

    <div id="projects">
      <div>
        <h1>
          {" "}
          <code>{"<h1>"}</code> Projects <code>{"</h1>"}</code>{" "}
        </h1>
      </div>

      <div className="container">
        <div className="grid">
          <figure className="effect-marley">
            <img src="images/history.jpg" alt="img11" />
            <figcaption>
              <h2>
                "Today In <span>History"</span>
              </h2>
              <p>
                Using Wikipedia <span className="highlight">API</span> with{" "}
                <span className="highlight">NodeJS & Express</span> to pull
                Historical data.
              </p>
              <a href="#">View more</a>
            </figcaption>
          </figure>

          
        </div>

        <div className="grid">
          <figure className="effect-marley">
            <img
              style={{ objectFit: "fill" }}
              src="https://cryptodailycdn.ams3.cdn.digitaloceanspaces.com/solana.png"
              alt="img11"
            />
            <figcaption>
              <h2>
                D.A.R.Edu <span>NFT</span>
              </h2>
              <p>
                SPA created using <span className="highlight">React</span> to
                showcase the NFT on the Solana Blockchain.
              </p>
              <a href="#">View more</a>
            </figcaption>
          </figure>
        </div>

        <div className="grid">
          <figure className="effect-marley">
            <img src="images/candy-crush.png" alt="img11" />
            <figcaption>
              <h2>
                Candy Crush <span>Game</span>
              </h2>
              <p>
                Using <span className="highlight">HTML, CSS, JS</span> to
                recreate the Candy Crush game with use of{" "}
                <span className="highlight">Bootstrap & jQuery.</span>{" "}
              </p>
              <a href="#">View more</a>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>

    <div id="email-form">
      <h1>
        {" "}
        <code>{"<h1>"}</code> Stay In Touch <code>{"</h1>"}</code>{" "}
      </h1>

      <Email />
    </div>
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
              <h1 className="title">I'm Jacob.</h1>
            </Fade>

            <Fade left delay={500} duration={2000}>
              <h4 className="title">How can I help?</h4>
            </Fade>
            <Fade bottom delay={2500}>
              <div id="socials">
                <SocialIcon url="https://www.linkedin.com/in/jacob-janowski-uic/" />
                <SocialIcon url="https://www.instagram.com/jacobjanowski/" />
                <SocialIcon url="https://github.com/jacjanowski" />

                <a
                  id="globe"
                  target={"_blank"}
                  href="https://goo.gl/maps/FyZgZ8gyg5gjhvjWA"
                >
                  <BsGlobe />
                </a>
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
