import axios from 'axios';

const API_URL = 'https://fakestoreapi.com';

const totalProductos = {
  getProducts: async () => {
    try {
      const response = await axios.get(`${API_URL}/products`);
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  },
  // Aquí puedes agregar más métodos para interactuar con la API, como obtener detalles de un producto específico, crear un nuevo producto, etc.
};

export default totalProductos;
