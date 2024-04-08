import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Trabajador from "./Trabajador";
import { Link } from "react-router-dom";
import { eliminarUnValor, modificarUnValor } from "../store/slice.slice";

const Gestion = () => {
  const dispatch = useDispatch();
  const listaTrabajdores = useSelector(
    (state) => state.misTrabajadores.trabajadores
  );

  const onActualizar = (area, index) => {
    dispatch(
      modificarUnValor({
        area: area,
        index: index,
      })
    );
  };

  const eliminarValor = (valor) => {
    dispatch(
      eliminarUnValor({
        nombre: valor.name.first,
        apellido: valor.name.last,
        telefono: valor.cell,
      })
    );
  };

  return (
    <>
      <Link to="/">
        <button>Candidatos</button>
      </Link>
      <div>
        {listaTrabajdores.map((valor, index) => (
          <Trabajador
            valor={valor}
            index={index}
            onActualizar={onActualizar}
            key={index}
            eliminarValor={eliminarValor}
          />
        ))}
      </div>
    </>
  );
};

export default Gestion;
