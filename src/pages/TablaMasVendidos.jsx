export const TablaMasVendidos = ({ productosMasVendidos }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Producto</th>
        </tr>
      </thead>
      <tbody>
        {productosMasVendidos.map((product) => (
          <tr key={product.productId}>
            <td>{product.productId}</td>
            <td>{product.productName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
