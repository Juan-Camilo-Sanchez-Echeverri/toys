import axios from 'axios';

const API_URL = 'https://fakestoreapi.com';

const precioPromedio = {

  getPromedio: async () => {
    try {
      const response = await axios.get(`${API_URL}/products`);
      const sum = response.data.reduce(
        (accumulator, item) => accumulator + item.price,
        0
      );
      const promedio = Math.round((sum / response.data.length) * 100) / 100;
      return promedio;
    } catch (error) {
      alert('Error al conectar con  products:', error);
    }
  },
};

export default precioPromedio;
