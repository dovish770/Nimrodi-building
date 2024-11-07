import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  floorAccessStatus: [false, false, false, false, false]
};

const floorSlice = createSlice({
  name: "floorAccessStatus",
  initialState,
  reducers: {
    changeAccess: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      if (index >= 0 && index < state.floorAccessStatus.length) {
        state.floorAccessStatus[index] = !state.floorAccessStatus[index];
      }
    }
  }
});


export const { changeAccess } = floorSlice.actions;
export default floorSlice.reducer;
