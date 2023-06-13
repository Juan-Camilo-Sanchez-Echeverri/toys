import axios from "axios";

// Importa Axios si no lo has hecho ya

async function fetchCarts() {
  try {
    const response = await axios.get('https://fakestoreapi.com/carts');
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function fetchProducts() {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function productosMasVendidos() {
  const carts = await fetchCarts();
  const products = await fetchProducts();

  const totalsMap = new Map();

  carts.forEach((cart) => {
    cart.products.forEach((product) => {
      const productId = product.productId;
      const quantity = product.quantity;

      if (totalsMap.has(productId)) {
        const currentQuantity = totalsMap.get(productId);
        totalsMap.set(productId, currentQuantity + quantity);
      } else {
        totalsMap.set(productId, quantity);
      }
    });
  });

  const productTotalsArray = Array.from(totalsMap, ([productId, quantity]) => {
    const product = products.find((p) => p.id === productId);
    const productName = product ? product.title : 'Producto Desconocido';
    return {
      productId,
      productName,
      quantity
    };
  });

  productTotalsArray.sort((a, b) => b.quantity - a.quantity);

  return productTotalsArray;
}

export default productosMasVendidos;
