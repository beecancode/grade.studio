import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from "../../utils/userService";
import * as classServices from "../../utils/classService"
import Layout from "../Layout/Layout";


function App() {
  // decode our jwt token
  const [user, setUser] = useState(userService.getUser());
  const [classes, setClasses] = useState([]);
  // store the payload, aka the users infor in state
  function getClasses() {
    console.log()
    setClasses([])

  }

  function handleSignUpOrLogin() {
    // this function we want to call after we signup or login
    // always be in the handleSubmit of the form
    setUser(userService.getUser());
  }

  function handleLogout() {
    userService.logout();
    setUser(null);
  }

  if (user) {
    return (
      <Routes>
        <Route
          path="/"
          element={<Layout handleLogout={handleLogout} classes={classes} getClasses={getClasses} />}
        >
          <Route
            path="/login"
            element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
          />

          <Route
            path="/signup"
            element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
          />
        </Route>
      </Routes>
    );
  }

  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />

      <Route
        path="/signup"
        element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;

