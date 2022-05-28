import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CHANGE_COUNT } from "../constants";

const initialCounterState = {
  count: 0
}

const countReducer = createSlice({
  name: 'countReducer',
  initialState: initialCounterState,
  reducers: {
    updateCount: (state, action: PayloadAction<any>) => {
      console.log("aayaaaaaa");
      state.count = action.payload
    },
  },
})
export const {updateCount} = countReducer.actions
export default countReducer.reducer;