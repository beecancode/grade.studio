import React, { useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { Button, Form, Grid, Header, Image, Segment } from "semantic-ui-react";
import userService from "../../utils/userService";
import { useNavigate } from 'react-router-dom';
import WebsiteDescription from '../../components/WebsiteDescription/WebsiteDescription';

export default function SignUpPage(props) {

  const navigate = useNavigate(); // <- programtically navigate to a different route

  const [error, setError] = useState("");
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    passwordConf: ""
  });

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      // For requests that are sending over a photo, we must send formData
      await userService.signup(state) // after we get a response from the server

      props.handleSignUpOrLogin() // decodes our token in localstorage, and sets the users information in our App.js state
      navigate('/') // navigates to the home page route

    } catch (err) {
      setError(err.message)
    }


  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
    <WebsiteDescription />
    <Grid textAlign="center" style={{ height: "100vh"}}>
      <Grid.Column style={{ maxWidth: 450, paddingTop: '45px' }}>
        <Header as="h2" color="yellow" textAlign="center" style={{ fontFamily: 'Pangolin' }}>
          <Image src="../logo512.png" /> Sign Up
        </Header>
        <Form inverted autoComplete="off" onSubmit={handleSubmit} >
          <Segment inverted stacked>
            <Form.Input
              name="username"
              placeholder="username"
              value={state.username}
              onChange={handleChange}
              required
            />
            <Form.Input
              type="email"
              name="email"
              placeholder="email"
              value={state.email}
              onChange={handleChange}
              required
            />
            <Form.Input
              name="password"
              type="password"
              placeholder="password"
              value={state.password}
              onChange={handleChange}
              required
            />
            <Form.Input
              name="passwordConf"
              type="password"
              placeholder="Confirm Password"
              value={state.passwordConf}
              onChange={handleChange}
              required
            />
            <Button type="submit" className="btn" color="yellow" style={{ fontFamily: 'Pangolin', fontSize:'20px', color:'black' }}>
              Signup
            </Button>
          </Segment>
          {error ? <ErrorMessage error={error} /> : null}
        </Form>
      </Grid.Column>
    </Grid>
    </div>
  );
}
