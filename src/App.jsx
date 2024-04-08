import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Listado from "./components/Listado";
import { useDispatch } from "react-redux";
import { agregarTrabajador } from "./store/slice.slice";
import Gestion from "./components/Gestion";

function App() {
  const [postulante, setPostulante] = useState([]);
  const dispatch = useDispatch();

  //logica
  const eliminarDato = (index) => {
    axios
      .get("https://randomuser.me/api/?results=1")
      .then(({ data }) => {
        const arrPost = [...postulante];
        arrPost[index] = data.results[0];
        setPostulante(arrPost);
      })
      .catch((err) => console.log(err));
  };

  const agregarDato = (valor, index) => {
    const newValue = {...valor, departamento:""}
    dispatch(agregarTrabajador(newValue));
    eliminarDato(index);
  };

  //effect
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=8")
      .then(({ data }) => setPostulante(data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Listado
            postulante={postulante}
            eliminarDato={eliminarDato}
            agregarDato={agregarDato}
          />
        }
      />
      <Route path="/gestion" element={<Gestion/>}/>
    </Routes>
  );
}

export default App;
