import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Fade from "react-reveal/Fade";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

export default function Email() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setEmail("");
    setName("");
    setMessage("");
    emailjs
      .sendForm(
        "service_y4fye0d",
        "template_0vc86ht",
        "#email-form-id",
        "Mx1yQ1vvF6iIszDkr"
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
    <Form className="container" id="email-form-id" ref={form} onSubmit={sendEmail}>
      <Fade top>
        {status && alertMessage}

      </Fade>

      <>
        <FloatingLabel className="mb-3" controlId="floatingPassword" label="Full Name">
          <Form.Control onChange={(e) => setName(e.target.value)} value={name} name="name" type="text" placeholder="Name" required={true} />
        </FloatingLabel>


        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control onChange={(e) => setEmail(e.target.value)} name="user_email" value={email} type="email" placeholder="name@example.com" required={true} />

        </FloatingLabel>


      </>
      <FloatingLabel className="mb-3" controlId="floatingTextarea2" label="Your message to Jacob">
        <Form.Control
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          as="textarea"
          placeholder="Leave a comment here"
          required={true}
        />
      </FloatingLabel>

      <Button type="submit" variant="primary">Send</Button>{' '}

    </Form>
  );
}
