import styles from './dashboard.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

import totalProductos from '../../api/totalProductos';
import totalPedidos from '../../api/totalPedidos';
import precioPromedio from '../../api/precioPromedio';
import ingresosTotales from '../../api/ingresosTotalesGenerados';

import { TotalProductos } from '../TotalProductos';
import { TotalPedidos } from '../TotalPedidos';
import { PrecioPromedio } from '../PrecioPromedio';
import { IngresosTotalesGenerados } from '../IngresosTotalesGenerados';
import { ProductosMasVendidos } from '../ProductosMasVendidos';

export const Dashboard = () => {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [promedio, setPromedio] = useState(0);
  const [totalIngresos, setTotalIngresos] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const [carts, setCarts] = useState([]);
  const [products, setProducts] = useState([]);
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

    fetchProducts();
    fetchOrdes();
    fetchPromedio();
    fetchIngresos();
  }, []);

  useEffect(() => {
    const fetchCarts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/carts');
        setCarts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCarts();
    fetchProducts();
  }, []);

  useEffect(() => {
    const calculateProductTotals = () => {
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

      const productTotalsArray = Array.from(
        totalsMap,
        ([productId, quantity]) => {
          const product = products.find((p) => p.id === productId);
          const productName = product ? product.title : 'Producto Desconocido';
          return {
            productId,
            productName,
            quantity,
          };
        }
      );

      const sortedProductTotals = productTotalsArray.sort((a, b) => b.quantity - a.quantity);

      setProductTotals(sortedProductTotals);
    };

    calculateProductTotals();
  }, [carts, products]);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <TotalProductos totalProductos={totalProducts} />
          <TotalPedidos totalPedidos={totalOrders} />
          <PrecioPromedio precioPromedio={promedio} />
          <IngresosTotalesGenerados ingresos={totalIngresos} />
          <ProductosMasVendidos productosMasVendidos={productTotals}/>
        </>
      )}
    </div>
  );
};
