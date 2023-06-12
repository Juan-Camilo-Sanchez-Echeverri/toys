import axios from 'axios';

const API_URL = 'https://fakestoreapi.com';

const ingresosTotales = {
  getIngresos: async () => {
    // Función para obtener el precio de un producto por su ID
    async function obtenerPrecioProducto(productId) {
      try {
        const response = await axios.get(`${API_URL}/products/${productId}`);
        const producto = response.data;
        return producto.price;
      } catch (error) {
        alert(
          `Error al obtener el precio del producto ${productId}: ${error.message}`
        );
        return 0;
      }
    }
    // Función para calcular el total de ingresos generados
    async function calcularTotalIngresos() {
      try {
        const response = await axios.get(`${API_URL}/carts`);
        const carritos = response.data;
        let totalIngresos = 0;
        for (const carrito of carritos) {
          let subtotal = 0;
          for (const producto of carrito.products) {
            const precio = await obtenerPrecioProducto(producto.productId);
            subtotal += (Math.round(precio * producto.quantity) * 100) / 100;
          }
          totalIngresos += subtotal;
        }
        return totalIngresos;
      } catch (error) {
        alert(`Error al calcular el total de ingresos: ${error.message}`);
      }
    }
    return calcularTotalIngresos();
  },
};

export default ingresosTotales;
