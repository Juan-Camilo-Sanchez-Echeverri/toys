export const ProductosMasVendidos = ({ productosMasVendidos }) => {
  return (
    <div>
    <h3>Productos Mas vendidos</h3>
    <ul>
      {productosMasVendidos.map((product) => (
        <li key={product.productId}>
          <p>Producto: {product.productName}</p>
          <p>Cantidad: {product.quantity}</p>
        </li>
      ))}
    </ul>
  </div>
  );
};
