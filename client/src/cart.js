import { connect } from "react-redux";
import productImg from "./images/earphones.jpeg";

import style from "./cart.module.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const CartItem = (props) => {
  const products = props.products;
  const item = props.item;
  const history = useHistory();
  const product = products.find((p) => p.id == item.id);
  console.log(product, item, products);

  const sendBackToProductPage = () => {
    history.push(`products/${item.id}`);
  };
  return (
    <div className={style.aaa}>
      <div className={style.aaaa}>
        <img
          onClick={sendBackToProductPage}
          style={{ cursor: "pointer" }}
          src={product.image}
          alt="product"
          width="100%"
          height="100%"
        />
      </div>
      <div className={style.aaab}>
        <h4 onClick={sendBackToProductPage} style={{ cursor: "pointer" }}>
          {product.title}{" "}
        </h4>
        <p>${product.price}</p>
      </div>
      <div>
        <p>Delivery by Mon June 1| Free</p>
      </div>
    </div>
  );
};

const CartTotal = (props) => {
  const products = props.products;
  const cartItems = props.cartItems;

  const itemList = products.filter((p) =>
    cartItems.find((citem) => citem.id == p.id)
  );
  const toatlCartValue = () => {
    let summ = 0;
    for (let i = 0; i < itemList.length; i++) {
      summ = summ + itemList[i].price;
    }
    return summ;
  };

  console.log(itemList, toatlCartValue());
  // console.log(toatlCartValue())
  const cartDetail = {};
  cartDetail.quantity = itemList.length;
  cartDetail.totalPrice = toatlCartValue();

  return (
    <div>
      <h3>PRICE DETAILS</h3>
      {/* {itemList.map((i) => (
        <p>
         {i.price}
        </p>
      ))} */}
      <div>
        <div className={style.priceDetails}>
          <p>Price {cartDetail.quantity} items:</p>
          <p>${cartDetail.totalPrice}</p>
        </div>
        <div className={style.priceDetails}>
          <p>Discount </p>
          <p style={{ color: "green" }}>-${Math.floor(cartDetail.totalPrice * 0.1)}</p>
        </div>
        <div className={style.priceDetails}>
          <p>Delivery Charges </p>
          <p>Free</p>
        </div>
        <hr />
        <div className={style.priceDetails}>
          <h3>Total Amount </h3>
          <p>${cartDetail.totalPrice * 0.9}</p>
        </div>
        <hr />
        <p style={{ color: "green", lineHeight: "3", fontWeight: "bold" }}>
          you will save ${Math.floor(cartDetail.totalPrice * 0.1)} on this order
        </p>
      </div>
    </div>
  );
};

const Cart = (props) => {
  const products = props.products;
  const cartItems = props.state.items;

  // if (cartProductsList) {
  //   cartData = cartProductsList.forEach(p=><CartItem data={p}/>);
  // }

  return (
    <div className={style.a}>
      {/* <h1>welcome to Cart</h1> */}

      <div className={style.aa}>
        {cartItems.map((item) => (
          <CartItem item={item} key={item.id} products={products} />
        ))}
      </div>
      <div className={style.ab}>
        <CartTotal cartItems={cartItems} products={products} />
      </div>
    </div>
  );
};

// export default Cart;

const mapStateToProps = (state) => {
  console.log(state);
  return {
    state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    //  fetchData: () => dispatch(makeApiCall())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
