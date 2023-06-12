import axios from 'axios';

const API_URL = 'https://fakestoreapi.com';

const totalPedidos = {
  getCarts: async () => {
    try {
      const response = await axios.get(`${API_URL}/carts`);
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  },
};

export default totalPedidos;
