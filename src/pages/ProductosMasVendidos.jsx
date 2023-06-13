export const ProductosMasVendidos = ({ productosMasVendidos }) => {
  return (
    <div>
      <h3>Productos Mas vendidos</h3>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {productosMasVendidos.map((product) => (
            <tr key={product.productId}>
              <td>{product.productName}</td>
              <td>{product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
