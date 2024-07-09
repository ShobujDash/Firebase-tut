import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useFirebase } from "../context/Firebase";

function Login() {
  const firebase = useFirebase();
  const navigate = useNavigate();

  const [eamil, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (firebase.isLoggedIn) {
      // navigate to home
      navigate("/")
    }
  },[firebase,navigate])

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login a user");
    const result = await firebase.signInUserWithEmailAndPass(eamil, password);
    console.log("successfull", result);
  };

  return (
    <div className="container mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            value={eamil}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <h1 className="mt-5 mt-6"> OR</h1>
      <Button onClick={firebase.signinWithGoogle} variant="danger">
        Signin With Google
      </Button>
    </div>
  );
}

export default Login;
