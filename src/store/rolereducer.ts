import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import roles from  '../data/roles.json'

const initialState = roles[0]

const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<string>) => action.payload
  }
});

export const { setRole } = roleSlice.actions;
export default roleSlice.reducer;
