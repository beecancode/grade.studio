import React, { useState } from 'react';
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";
import {useNavigate, Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";
import WebsiteDescription from '../../components/WebsiteDescription/WebsiteDescription';


export default function LoginPage(props) {
  const [error, setError] = useState("");
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await userService.login(state);
      // Route to wherever you want!
      props.handleSignUpOrLogin();
      navigate("/");
    } catch (err) {
      // Invalid user data (probably duplicate email)
      setError(err.message);
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <WebsiteDescription />
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
      >
        <Grid.Column style={{ maxWidth: 450, paddingTop: '45px' }}>
          <Header as="h2" color="yellow" textAlign="center" style={{ fontFamily: 'Pangolin' }}>
            <Image src="../logo512.png" /> Log-in to your
            account
          </Header>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Segment inverted stacked>
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
              <Button
                color="yellow"
                fluid
                size="large"
                type="submit"
                className="btn"
                style={{ fontFamily: 'Pangolin', fontSize:'20px', color:'black' }}
              >
                Login
              </Button>
            </Segment>
          </Form>
          <Message style={{ fontFamily: 'Pangolin', fontSize:'15px', color:'black' }}>
            New to us? <Link to="/signup">Sign Up</Link>
          </Message>
          {error ? <ErrorMessage error={error} /> : null}
        </Grid.Column>
      </Grid>
    </div>
  );
}
