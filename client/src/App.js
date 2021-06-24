import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Route } from "react-router-dom";

import BrandingBar from "./BrandingBar";
import Home from "./Home";

import Cart from "./cart";
import HomeNew from "./Homenew";
import ProductPageNew from "./ProductsPageNew";
import { FetchProducts, FetchProductsSuccess } from "./actions";
import { getProducts } from "./utils/api";
import { selectProducts } from "./reducer";
import Login from "./LogIn";

import styles from "./App.module.css";
import Signup from "./Signup";

function App() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const isPopUp = useSelector((state) => state.isPopUp);

  useEffect(() => {
    dispatch(FetchProducts());
    getProducts().then((products) => {
      dispatch(FetchProductsSuccess(products));
    });
  }, [dispatch]);

  return (
    <div className="App" style={{position:"relative"}}>
      <div className={isPopUp ? styles.container_inBackground : ""}>
        <BrandingBar />
        <div style={{ marginTop: "50px" }}>
          <Route exact path="/">
            {/* <Home /> */}
            <HomeNew products={products} />
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/:userid"></Route>
          <Route path="/cart">
            <Cart products={products} />
          </Route>
          <Route path="/products/:id">
            {/* <ProductPage products={products}/> */}
            <ProductPageNew products={products} />
          </Route>
        </div>
      </div>
      <div className={isPopUp ? styles.modal_visible : styles.modal_invisble}>
        <Login />
      </div>
      <Route path="/signup"><Signup/></Route>

    </div>
  );
}

export default App;



