import React from "react";
import styles from "./Home.module.css";
import { useHistory } from "react-router-dom";
const Home = () => {
  const history = useHistory();
  const goToSingIn = (e) => {
    history.push("/Sign-In");
  };
  return (
    <section>
      <div className={styles.homeWrapper}>
        <div className={styles.content}>
          <h1>Welcome to VKONEX BOT!!!</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            delectus commodi deserunt perspiciatis voluptatum dolor facere rem
            corrupti, animi a nihil velit quis vel consectetur assumenda minus
            quidem laudantium eos!
          </p>
        </div>
        <div className={styles.buttonWrapper}>
          Already have an account? <span onClick={goToSingIn}>Sign In</span>
        </div>
      </div>
    </section>
  );
};

export default Home;
