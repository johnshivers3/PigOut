import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
// import { useSelector } from 'react-redux';
import "./LoginFormPage.css";
function LoginForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  // const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    history.push("/");

    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Log In</h1>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <label>Username or Email</label>
      <input
        type="text"
        value={credential}
        onChange={(e) => setCredential(e.target.value)}
        required
      />
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Log In</button>
    </form>
  );
}

export default LoginForm;
