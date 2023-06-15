import { useEffect, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import totalProductos from '../api/totalProductos';
import totalPedidos from '../api/totalPedidos';
import precioPromedio from '../api/precioPromedio';
import ingresosTotales from '../api/ingresosTotales';
import masVendidos from '../api/masVendidos';

import { TotalProductos } from './TotalProductos';
import { TotalPedidos } from './TotalPedidos';
import { PrecioPromedio } from './PrecioPromedio';
import { IngresosTotalesGenerados } from './IngresosTotalesGenerados';
import { ProductosMasVendidos } from './ProductosMasVendidos';

import Navegacion from '../components/navegacion/Navegacion';
import Footer from '../components/footer/Footer';

export const Dashboard = () => {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [promedio, setPromedio] = useState(0);
  const [totalIngresos, setTotalIngresos] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [productTotals, setProductTotals] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await totalProductos.getProducts();
      setTotalProducts(data.length);
    };

    const fetchOrdes = async () => {
      const data = await totalPedidos.getCarts();
      setTotalOrders(data.length);
    };

    const fetchPromedio = async () => {
      const data = await precioPromedio.getPromedio();
      setPromedio(data);
    };

    const fetchIngresos = async () => {
      const data = await ingresosTotales.getIngresos();
      setIsLoading(false);
      setTotalIngresos(data);
    };

    const fetchMasVendidos = async () => {
      const data = await masVendidos.getMasVendidos();
      setProductTotals(data);
    };

    fetchProducts();
    fetchOrdes();
    fetchPromedio();
    fetchIngresos();
    fetchMasVendidos();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="contenedor-spinner">
          <Navegacion />
          <div className="spinner">
            <ClipLoader color="#36d7b7" loading size={100} />
          </div>
        </div>
      ) : (
        <>
          <Navegacion />
          <div className="container-dashboard">
            <TotalProductos totalProductos={totalProducts} />
            <TotalPedidos totalPedidos={totalOrders} />
            <PrecioPromedio precioPromedio={promedio} />
            <IngresosTotalesGenerados ingresos={totalIngresos} />
            <ProductosMasVendidos productosMasVendidos={productTotals} />
          </div>
          <Footer />
        </>
      )}
    </>
  );
};
