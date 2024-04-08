import { configureStore } from "@reduxjs/toolkit";
import { departamentosSlice, miSlice } from "./slice.slice";

export default configureStore({
  reducer: {
    misTrabajadores: miSlice.reducer,
    misDepartamentos: departamentosSlice.reducer
  },
});
