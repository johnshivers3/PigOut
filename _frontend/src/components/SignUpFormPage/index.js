import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./SignUpForm.css";

function SignupFormPage() {
  const dispatch = useDispatch();
  const history = useHistory()
  const sessionUser = useSelector((state) => state.session.user);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [image, setImage] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState("");
  // for multiple file upload
  // const [images, setImages] = useState([]);
  const [errors, setErrors] = useState([]);
  // const user = useSelector((state) => state.session.user);
  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      history.push('/')
      return await dispatch(
        sessionActions.signup({ email, username, password })
      ).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    }

    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
  };
  // const updateFile = (e) => {
  //   const file = e.target.files[0];
  //   console.log(file);
  //   if (file) setImage(file);
  // };
  // // for multiple file upload
  // const updateFiles = (e) => {
  //   const files = e.target.files;
  //   setImages(files);
  // };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {/* <label>Profile Picture</label> */}
        {/* <input name="image" type="file" onChange={updateFile} /> */}
        {/* <label>
            Multiple Upload
            <input
              type="file"
              multiple
              onChange={updateFiles} />
          </label> */}
        <button type="submit">Sign Up</button>
      </form>
      <div>
        {/* {user && (
          <div>
            <h1>{user.username}</h1>
            <img style={{ width: "150px" }} src={user.image} alt="profile" />
          </div>
        )} */}
      </div>
    </div>
  );
}

export default SignupFormPage;
