import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./SignIn.module.css";
import { login } from "../../http";
import { useDispatch } from "react-redux";
import { setAuth } from "../../store/slice/authSlice";

const SignIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const goToDashboard = async () => {
    if (!email || !password) {
      return alert("All fields are required");
    }

    const userInfo = {
      email,
      password,
    };

    const { data } = await login(userInfo);
    dispatch(setAuth({ data }));
    history.push("dashboard");
  };
  return (
    <div className={styles.registerWrap}>
      <div className={styles.registerFrom}>
        <h1>Sign In Your Account!</h1>
        <div className={styles.inputBox}>
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={goToDashboard}>Register</button>
      </div>
    </div>
  );
};

export default SignIn;
