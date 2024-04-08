import React from "react";
import Postulante from "./Postulante";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Listado = ({ postulante, eliminarDato, agregarDato }) => {
  const listaTrabajdores = useSelector(state => state.misTrabajadores.trabajadores)

  return (
    <>
      {postulante.map((valor, index) => (
        <Postulante
          valor={valor}
          index={index}
          key={index}
          eliminarDato={eliminarDato}
          agregarDato={agregarDato}
        />
      ))}
      <div>
        {
          listaTrabajdores.map((valor, index) => (
            <Link to="/gestion" key={index}>
            <button key={index}>
              {valor.name.first}
            </button>
            </Link>
          ))
        }
      </div>
    </>
  );
};

export default Listado;
