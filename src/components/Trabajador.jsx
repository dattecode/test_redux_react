import React from "react";
import { useSelector } from "react-redux";

const Trabajador = ({ valor, index, onActualizar, eliminarValor }) => {
  const departamentos = useSelector(
    (state) => state.misDepartamentos.departamentos
  );

  return (
    <article>
      <section>
        <img src={valor.picture.large} />
      </section>
      <section>
        <p>
          {valor.name.last}, {valor.name.first}
        </p>
        <a href="#">{valor.email}</a>
      </section>
      <section>
        <p>{valor.location.city}</p>
        <p>{valor.location.country}</p>
      </section>
      <div>
        <select onChange={(e) => onActualizar(e.target.value, index)}>
          <option>Selecciona:</option>
          {departamentos.map((departamentoValor, i) =>
            valor.departamento === departamentoValor ? (
              <option selected key={i}>
                {departamentoValor}
              </option>
            ) : (
              <option key={i}> {departamentoValor} </option>
            )
          )}
        </select>
      </div>
      <button onClick={() => eliminarValor(valor)}>Eliminar</button>
    </article>
  );
};

export default Trabajador;
