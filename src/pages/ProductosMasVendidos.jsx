import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const ProductosMasVendidos = ({ productosMasVendidos }) => {
  const productIds = productosMasVendidos.map((item) => item.productId);
  const productName = productosMasVendidos.map((item) => item.productName);
  const quantities = productosMasVendidos.map((item) => item.quantity);

  const options = {
    responsive: true,
  };

  const chartData = {
    labels: productIds,
    datasets: [
      {
        label: 'PRODUCTOS MAS VENDIDOS',
        data: quantities,
        fill: false,
        borderColor: generateRandomColors(productName),

        backgroundColor: generateRandomColors(productName),
        hoverBackgroundColor: generateRandomColors(productName),
      },
    ],
  };

  // Función para generar colores aleatorios para el gráfico
  function generateRandomColors(length) {
    const colors = [];
    for (let i = 0; i < length; i++) {
      colors.push(getRandomColor());
    }
    return colors;
  }

  // Función para generar un color aleatorio en formato hexadecimal
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return (
    <div className="containerInfo">
      <h2>Productos Mas vendidos</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};
