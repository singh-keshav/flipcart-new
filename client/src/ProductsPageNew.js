import react, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./productPage.module.css";
import {useHistory,useParams,} from "react-router-dom/cjs/react-router-dom.min";

import {AddItem} from "./actions.js"

const ProductPageNew = (props) => {
  const { id } = useParams();
  const history = useHistory();
  const ADDTOCART = "ADD TO CART";
  const GOTOCART = "GO TO CART";
  const products = props.products;
  const product = products.find((p) => p.id == id);

  const initialButtonName = props.state.items.find((p) => p.id == id)
    ? GOTOCART
    : ADDTOCART;
  const [buttonName, setButtonName] = useState(initialButtonName);

  const handleClick = () => {
    if (buttonName === ADDTOCART) {
      setButtonName(GOTOCART);
      addtocart();
    } else {
      setButtonName(ADDTOCART);
      moveToCart();
    }
  };

  const addtocart = () => {
    props.addProduct(id);
  };

  const moveToCart = () => {
    // history.push("/");
    history.push("/cart");
  };

  let productData;

  if (product) {
    productData = (
      <div className={styles.container}>
        <span className={styles.productImage}>
          <img src={product.image} alt="product" width="300" height="400" />
          <div style={{ display: "flex" }}>
            <button className={styles.addtocart} onClick={handleClick}>
              {buttonName}
            </button>

            <button className={styles.movetocart} onClick={moveToCart}>
              BUY NOW
            </button>
          </div>
        </span>
        <span className={styles.productDetails}>
          <h2>{product.title}</h2>
          <p>{product.price}*</p>
          <p>{product.description}</p>
        </span>
      </div>
    );
  } else {
    productData = <h2> Sorry. Product doesn't exist </h2>;
  }

  return <div>{productData}</div>;
};



const mapStateToProps = (state) => {
    console.log(state);
    return {
      state,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      addProduct: (id) => dispatch(AddItem(id)),
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(ProductPageNew);
