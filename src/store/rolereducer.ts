import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = "Unknown Personnel";

const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<string>) => action.payload
  }
});

export const { setRole } = roleSlice.actions;
export default roleSlice.reducer;
