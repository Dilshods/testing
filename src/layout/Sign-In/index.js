import React, { useState } from "react";
import "./index.style.css";
import { Button, TextInput } from "../../component";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const Login = () => {
    console.log("bosildi");
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      name: name,
      email: email,
      key: username,
      secret: password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://0001.uz/signup", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          navigate("/pages");
          console.log("data", data);
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="auth-signin">
      <div className="signin_right ">
        <div className="signin-right-child">
          <h1>Sign In</h1>
          <div>
            <Button
              icons={<FcGoogle className="btn_icon" />}
              type={"Continue with Google"}
              className="icon_btn"
            />
            <br />
            <Button
              icons={<BsFacebook className="btn_icon" />}
              type={"Continue with Google"}
              className="icon_btn"
            />
          </div>
          <div className="or-line">
            <hr width="40%" color="black" align="left" />
            <p>or</p>
            <hr width="40%" color="black" align="right" />
          </div>
          <div className="form">
            <label>Your name</label>
            <br />
            <TextInput
              onChange={(e) => setName(e.target.value)}
              type="name"
              value={name}
              placeholder="Enter your name"
            />
            <br />
            <label>Your email</label>
            <br />
            <TextInput
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              placeholder="Enter your email"
            />
            <br />
            <label>Your username</label>
            <br />
            <TextInput
              onChange={(e) => setUsername(e.target.value)}
              type="username"
              value={username}
              placeholder="Enter your username"
            />
            <br />
            <label>Your password</label>
            <br />
            <TextInput
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              value={password}
              placeholder="Enter your password"
            />
            <br />
            <Button type={"Button"} className="sign-in-btn" onClick={Login} />
            <div className="signin-go">
              <p>
                Already signed up?<Link to="/signup"> Go to sign up.</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
