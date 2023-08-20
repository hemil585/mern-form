import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

const MyForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const passDataToServer = async (e) => {
    e.preventDefault()

    try {
      await axios.post(process.env.REACT_APP_API_URL, {
        username,
        password,
      });
      setUsername('')
      setPassword('')
    } catch (err) {
      console.log(err);
    }

  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100dvh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Form onSubmit={(e) => passDataToServer(e)}>
        <Form.Group>
          <Form.Label>Enter your full name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group
          style={{
            margin: "2rem 0",
          }}
        >
          <Form.Label>Enter your password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={5}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Click here to submit form
        </Button>
      </Form>
    </div>
  );
};

export default MyForm;
