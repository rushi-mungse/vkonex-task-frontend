import React from 'react'
import { useHistory } from 'react-router-dom'
import styles from './SignIn.module.css'
const SignIn = () => {
    const history=useHistory()
    const goToDashboard=()=>{
        history.push('dashboard')
    }
    return (
        <div className={styles.registerWrap}>
      <div className={styles.registerFrom}>
        <h1>Sign In Your Account!</h1>
        <div className={styles.inputBox}>
          <label htmlFor="">Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="">Password</label>
          <input type="password" placeholder="Enter password" />
        </div>
        <button onClick={goToDashboard}>Register</button>
      </div>
    </div>
    )
}

export default SignIn
