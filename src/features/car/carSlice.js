import { createSlice } from "@reduxjs/toolkit";

const initilaState = {
  cars: ["Model S", "Model Y", "Model X", "Model 3"],
};
const carSlice = createSlice({
  name: "car",
  initialState: initilaState,
  reducers: {},
});
export const selectCars = (state) => state.car.cars;
export default carSlice.reducer;
