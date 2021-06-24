import styles from "./Login.module.css";
import loginLeftContainerImg from "./images/loginleftcontainer.png";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {
   const dispatch = useDispatch();
   const history=useHistory();
   const handleClick=()=>{
     dispatch({type:"togglePopUp"})
   }
  const switchHandler=()=>{
    dispatch({type:"togglePopUp"});
    history.push("./signup");
  }
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginPopUp}>
        <div className={styles.loginContainer_left}>
          <h3 className={styles.loginContainer_left_heading}>Login</h3>
          <p>Get access to your Orders, Wishlist and Recommendations</p>
          <img
            src={loginLeftContainerImg}
            className={styles.loginContainer_left_img}
            alt="img"
          />
        </div>
        <div className={styles.loginContainer_right}>
          <div>
            {/* <div className={styles.loginContainer_right_input_placeholder}>
              <span>enter email / mobile</>
            </div> */}
            <input
              className={styles.loginContainer_right_input}
              placeholder="Enter Email/Mobile Number"
            />
            <div className={styles.loginContainer_right_input_underline}> </div>
          </div>
          <div>
            <input
              className={styles.loginContainer_right_input}
              placeholder="Enter Password"
            />
            <div className={styles.loginContainer_right_input_underline}> </div>
          </div>
          <div className={styles.loginContainer_right_termsAndCondition}>
            By continuing, you agree to Flipkart's{" "}
            <a  target="_blank" href="/pages/privacypolicy" style={{textDecoration:"none"}}>
              Terms of Use
            </a>{" "}
            and{" "}
            <a  target="_blank" href="/pages/privacypolicy" style={{textDecoration:"none"}}>
              Privacy Policy
            </a>
            .
          </div>
          <button className={styles.loginContainer_right_Login} onClick={handleClick} >LogIn</button>
          <div className={styles.loginContainer_right_switch} onClick={switchHandler}>New to Flipkart? create an account</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
