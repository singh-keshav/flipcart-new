const APIURL = "https://fakestoreapi.com/products";

let products = [];

export async function getProducts() {
  if (!products.length) {
    const response = await fetch(APIURL);
    products = await response.json();
  }

  return products;
}

export function getProductById(id) {
  return products.find((product) => product.id === id);
}
