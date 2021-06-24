import react from "react";
import { connect, useDispatch } from "react-redux";
import { Route, Switch, Link, useHistory, Redirect } from "react-router-dom";

import styles from "./brandingBar.module.css";
import cart from "./cart";

const BrandingBar = (props) => {
  const history = useHistory();
  console.log(props);
  console.log(useHistory());
  const dispatch = useDispatch();

  function handleClick() {
    // history.push("/login");
    dispatch({type:"togglePopUp"});
  }
  function redirectToHome() {
    history.push("/");
  }

  const cartQuantity = props.items.length;
  console.log(cartQuantity);

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "blue",
        color: "white",
        width: "100%",
        top: "0px",
        position: "fixed",
        zIndex: "99",
      }}
    >
      <div className={styles.sideEmptyDiv}></div>
      <div className={styles.middleDiv}>
        <div className={styles.flipkarConatianer}>
          <p onClick={redirectToHome}>Flipkart</p>
        </div>

        <div className={styles.searchContainer}>
          <form>
            <input placeholder="search for products brands and more" />
            <div className={styles.searchIcon}>
              <span
                className="material-icons"
                onClick={() => console.log("icon working")}
              >
                search
              </span>
            </div>
          </form>
        </div>
        <button className={styles.whiteButton} onClick={handleClick}>
          login
        </button>
        <div className={styles.more}>
          <p onClick={handleClick}>More</p>
          <div className={styles.downArrow}>
            <span className="material-icons">keyboard_arrow_down</span>
          </div>
        </div>
        {/* <div className={styles.loginContainer}>

        </div> */}

        <div>
          <Link to="/cart" className={styles.cartContainer}>
            <span className="material-icons">shopping_cart</span>
            <div className={styles.cartIcon_quantity}>{cartQuantity}</div>
            <p>cart</p>
            {/* <p>cart</p> */}
          </Link>
        </div>
      </div>

      <div className={styles.sideEmptyDiv}></div>
    </div>
  );
};

// export default BrandingBar;

const mapStateToProps = (state) => {
  console.log(state);
  return {
    items: state.items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    //  fetchData: () => dispatch(makeApiCall())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BrandingBar);
