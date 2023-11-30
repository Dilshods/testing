import React, { useEffect, useState } from "react";
import "./sign.style.css";
import { Button, TextInput } from "../../component";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../../state/userStore/index";

const SignUp = () => {
  const [fetchUser, userData, setSignKey, signKey] = useUserStore((state) => [
    state.fetchUser,
    state.userData,
    state.setSignKey,
    state.signKey,
  ]);
  console.log(signKey);
  const navigator = useNavigate();
  const handleOpen = () => {
    fetchUser(signKey);
  };

  useEffect(() => {
    if (userData.isOk) {
      navigator("/pages");
    }
  }, [userData]);

  return (
    <>
      <div className="auth-signup">
        <div className="sinup-right">
          <div className="sigup-right-child">
            <h1>Sign up</h1>
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
              <label>Your key</label>
              <br />
              <TextInput
                onChange={(e) =>
                  setSignKey({ ...signKey, Key: e.target.value })
                }
                type="text"
                placeholder={"ssdbook"}
              />
              <br />
              <label>Your Sign</label>
              <br />
              <TextInput
                onChange={(e) =>
                  setSignKey({ ...signKey, Sign: e.target.value })
                }
                type={"text"}
                placeholder={"d860ca17ca7a2f20fc6173df987d7b4e"}
              />
              <br />
              {/* <label>Your username</label>
              <br />
              <TextInput
                onChange={(e) => setUsername(e.target.value)}
                type="username"
                placeholder="Enter your username"
              /> */}
              {/* <br /> */}
              <Button
                onClick={handleOpen}
                type="Sumbit"
                className="sign-up-btn"
              />
              <div className="sign-go">
                <p>
                  Already signed in?<Link to="/"> Go to sign in.</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
