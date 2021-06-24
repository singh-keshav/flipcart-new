import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import styles from "./homenew.module.css";

const APIURL = "https://fakestoreapi.com/products";
let productsList;

const Tile = (props) => {
  const categoryProducts = props.products;
  const categoryName = props.products[0].category[0].toUpperCase()+props.products[0].category.substr(1);
  // <h2>{props.products[0].category}</h2>
  const links = categoryProducts.map((p) => {
    return (
      <li style={{ flex: "auto" }} className={styles.listItem}>
        <Link to={`/products/${p.id}`}>
          <img
            src={p.image}
            alt="product"
            height="200"
            width="200"
            // style={{ margin: "5px" }}
            className={styles.imageShadow}
          />
        </Link>
        <p>{p.title}</p>
      </li>
    );
  });

  let slidStyle = {};

  const handleClick = (props) => {
    // slidStyle={
    //     left:
    // }
  };

  return (
    <div className={styles.card}>
      <div style={{ textAlign: "left", padding: "20px 15px" }}>
        <h1>{categoryName} </h1>
        <p style={{ color: "#949494" }}>something</p>
      </div>
      <hr />
      <div className={styles.gallaryContainer}>
        <ul className={styles.gallary_ul}>{links}</ul>
      </div>
      {/* <button onClick={handleClick}>slide</button> */}
    </div>
  );
};

const HomeNew = (props) => {
  //   const [products, setProducts] = useState([]);
  //   useEffect(() => {
  //     loadData();
  //   }, []);
  //   const loadData = async () => {
  //     const response = await fetch(APIURL);
  //     const data = await response.json();
  //     console.log(data);
  //     setProducts(data);
  //     productsList=data;
  //   };
  //   console.log(products);

  const products = props.products;

  const productTiles = () => {
    let categories = [];
    const productCategoryList = [];
    if (products) {
      products.map((p) => categories.push(p.category));
      //   const uniqueCategory = Array.from(new Set(categories));
      const uniqueCategory = [...new Set(categories)];
      console.log(uniqueCategory);

      for (let category of uniqueCategory) {
        productCategoryList.push(
          <Tile products={products.filter((p) => p.category === category)} />
        );
        console.log(products.filter((p) => p.category === category));
      }
    }

    return productCategoryList;
  };

  return <div  style={{marginTop:"50px"}}>{productTiles()}</div>;
};

// export {productsList};

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
export default connect(mapStateToProps, mapDispatchToProps)(HomeNew);
