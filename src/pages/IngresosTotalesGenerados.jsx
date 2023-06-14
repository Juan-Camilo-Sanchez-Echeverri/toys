export const IngresosTotalesGenerados = ({ ingresos }) => {
  return (
    <div className="containerInfo">
      <h2>Ingresos 
        Totales 
        Generados</h2>
      <p> $ {ingresos}</p>
    </div>
  );
};
