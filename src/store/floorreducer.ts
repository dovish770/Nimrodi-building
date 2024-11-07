import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  floorAccessStatus: [false, false, false, false, false]
};


function toggleFloorAccess(floorAccessStatus: boolean[], index: number): boolean[] {
  if (index >= 0 && index < floorAccessStatus.length) {
    floorAccessStatus[index] = !floorAccessStatus[index];
  }
  return [...floorAccessStatus]; 
}

const floorSlice = createSlice({
  name: "floorAccessStatus",
  initialState,
  reducers: {
    changeAccess: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      state.floorAccessStatus = toggleFloorAccess(state.floorAccessStatus, index);
    }
  }
});

export const { changeAccess } = floorSlice.actions;
export default floorSlice.reducer;
