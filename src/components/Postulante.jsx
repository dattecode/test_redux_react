import React from "react";

const Postulante = ({ valor, index, eliminarDato, agregarDato }) => {
  return (
    <article>
      <section>
        <img src={valor.picture.large} />
      </section>
      <section>
        <p>
          {valor.name.first} {valor.name.last}
        </p>
        <div>
          {valor.location.city}, {valor.location.country}
        </div>
        <div>
          <a href="#">{valor.email}</a>
        </div>
      </section>
      <section>
        <button onClick={() => agregarDato(valor, index)}>agregar</button>
        <button onClick={() => eliminarDato(index)}>eliminar</button>
      </section>
    </article>
  );
};

export default Postulante;
