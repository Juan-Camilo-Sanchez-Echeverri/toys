import axios from "axios";

const API_URL = 'https://fakestoreapi.com';

const masVendidos = {
  getMasVendidos: async () => {

    async function fetchProducts() {
      try {
        const response = await axios.get(`${API_URL}/products`);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    }

    async function fetchCarts() {
      try {
        const response = await axios.get(`${API_URL}/carts`);
        return response.data;
      } catch (error) {
        console.error(error);
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

      productTotalsArray.splice(3, productTotalsArray.length - 3);

      return productTotalsArray;
    }
    return productosMasVendidos();
  }
};


export default masVendidos;
