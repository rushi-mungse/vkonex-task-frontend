import React, { useState } from "react";
import styles from "./Register.module.css";
import { useHistory } from "react-router-dom";
import { register } from "../../http";
import { useDispatch } from "react-redux";
import { setAuth } from "../../store/slice/authSlice";

const Register = () => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const history = useHistory();
  const goToDashboard = async () => {
    if (!name && !password && !email) {
      alert("All fields are required!");
    }
    const userInfo = {
      name,
      email,
      password,
    };

    const { data } = await register(userInfo);
    dispatch(setAuth({ data }));
    history.push("/dashboard");
  };

  return (
    <div className={styles.registerWrap}>
      <div className={styles.registerFrom}>
        <h1>Register Your Account!</h1>
        <div className={styles.inputBox}>
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
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

export default Register;
