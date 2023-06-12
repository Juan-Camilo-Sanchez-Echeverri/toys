import styles from './dashboard.module.css';

import { useEffect, useState } from 'react';
import totalProductos from '../../api/totalProductos';
import totalPedidos from '../../api/totalPedidos';
import precioPromedio from '../../api/precioPromedio';
import { TotalProductos } from '../TotalProductos';
import { TotalPedidos } from '../TotalPedidos';
import { PrecioPromedio } from '../PrecioPromedio';
import { IngresosTotalesGenerados } from '../IngresosTotalesGenerados';
import { ProductosMasVendidos } from '../ProductosMasVendidos';
import ingresos from '../../api/IngresosTotalesGenerados';


export const Dashboard = () => {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [promedio, setPromedio] = useState(0);

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

    fetchProducts();
    fetchOrdes();
    fetchPromedio();
    
    ingresos.getIngresos();
  }, []);

  return (
    <div className={styles.container}>
      <TotalProductos totalProductos={totalProducts} />
      <TotalPedidos totalPedidos={totalOrders} />
      <PrecioPromedio precioPromedio={promedio} />
      <IngresosTotalesGenerados />
      <ProductosMasVendidos />
    </div>
  );
};
