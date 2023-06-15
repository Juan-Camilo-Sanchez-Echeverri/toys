export const IngresosTotalesGenerados = ({ ingresos }) => {
  return (
    <div className="container-info">
      <h2>Ingresos 
        Totales 
        Generados</h2>
      <p> $ {ingresos}</p>
    </div>
  );
};
