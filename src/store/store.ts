import { configureStore } from "@reduxjs/toolkit";
import floorReducer from "./floorreducer";
import roleReducer from "./Rolereducer"; 

const store = configureStore({
  reducer: {
    floorAccess: floorReducer,
    role: roleReducer, 
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
