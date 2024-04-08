import { createSlice } from "@reduxjs/toolkit";

export const miSlice = createSlice({
  name: "misTrabajadores",
  initialState: {
    trabajadores: [],
  },
  reducers: {
    agregarTrabajador: (state, action) => {
      state.trabajadores = [...state.trabajadores, action.payload];
    },
    modificarUnValor: (state, action) => {
      const { area, index } = action.payload;
      state.trabajadores[index].departamento = area;
    },
    eliminarUnValor: (state, action) => {
      const { nombre, apellido, telefono } = action.payload;
      state.trabajadores = state.trabajadores.filter(
        (valor) =>
          valor.name.first != nombre &&
          valor.name.last != apellido &&
          valor.cell != telefono
      );
    },
  },
});

export const departamentosSlice = createSlice({
  name: "misDepartamentos",
  initialState: {
    departamentos: [
      "logistica",
      "ventas",
      "comercio",
      "recurso Humanos",
      "contabilidad",
      "tecnologia",
    ],
  },
  reducers: {},
});

export const { agregarTrabajador } = miSlice.actions;
export const { modificarUnValor } = miSlice.actions;
export const { eliminarUnValor } = miSlice.actions;
