import axios from 'axios';

const API_URL = 'https://fakestoreapi.com';

const ingresos = {

  getIngresos: async () => {


    // Función para obtener el precio de un producto por su ID
    async function obtenerPrecioProducto(productId) {
      try {
        const response = await axios.get(`${API_URL}/products/${productId}`);
        const producto = response.data;
        return producto.price;
      } catch (error) {
        console.error(`Error al obtener el precio del producto ${productId}: ${error.message}`);
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
            subtotal += precio * producto.quantity;
          }

          totalIngresos += subtotal;
        }

        console.log(`El total de ingresos generados es: ${totalIngresos}`);
      } catch (error) {
        console.error(`Error al calcular el total de ingresos: ${error.message}`);
      }
    }

    // Llamada a la función para calcular el total de ingresos
    calcularTotalIngresos();

    /*     axios.get(`${API_URL}/products`)
          .then(response => {
            const data = response.data;
            data.forEach(item => {
              console.log(item.price);
            });
          })
          .catch(error => {
            console.log(error);
          }); */
  }
}

export default ingresos;