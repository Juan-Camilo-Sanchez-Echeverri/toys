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
import { TablaMasVendidos } from './TablaMasVendidos';

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
  const quantities = productosMasVendidos.map((item) => item.quantity);

  const options = {
    responsive: true,
  };

  const chartData = {
    labels: productIds,
    datasets: [
      {
        label: 'PRODUCTO MAS VENDIDO',
        data: quantities,
        fill: false,
        backgroundColor: generateRandomColors(productIds.length),
        hoverBackgroundColor: generateRandomColors(productIds.length),
      },
    ],
  };

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
    <>
      <div className="container-info">
      <h2 className="text-center">Productos Mas vendidos</h2>
        <Line data={chartData} options={options} />
      </div>
      <div className="container-table">
        <TablaMasVendidos productosMasVendidos={productosMasVendidos} />
      </div>
    </>
  );
};
