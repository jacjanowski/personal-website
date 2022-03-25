import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Fade from "react-reveal/Fade";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

export default function Email() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);

  const form = useRef();

  // Mine
  // service_l33s7b5
  // template_5qgy8tg
  // user_Qk53rvtmKogW6pqRTf45w

  // Harsh
  // service_q3h1ggq
  // template_5jtf6od
  // 1HS9ZTxh83p7_aVwz
  const sendEmail = (e) => {
    e.preventDefault();
    setEmail("");
    setName("");
    setMessage("");
    emailjs
      .sendForm(
        "service_q3h1ggq",
        "template_5jtf6od",
        "#contact-form",
        "1HS9ZTxh83p7_aVwz"
      )
      .then(
        (result) => {
          setStatus(true);
          console.log(result.text);
        },
        (error) => {
          setStatus(false);
          console.log(error.text);
        }
      );
  };

  const test = (e) => {
    e.preventDefault();
    setStatus(true);
    setEmail("");
    setName("");
    setMessage("");
  };

  let alertMessage = (
    <div id="alertMessage">
      <p>You have successfully sent your email!</p>
    </div>
  );

  // let errorMessage = (
  //   <div id="errorMessage">
  //   <p>There was a problem sending your email.</p>
  // </div>
  // )

  return (
    <Container>
      <>
      <p>here ia mainre ia mainre ia mainre ia mainre ia mainre ia mainre ia mainre ia mainre ia mainre ia mainre ia mainre ia main</p>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" />

        </FloatingLabel>
        
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
      </>
      <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: "100px" }}
        />
      </FloatingLabel>
    </Container>
  );
}
