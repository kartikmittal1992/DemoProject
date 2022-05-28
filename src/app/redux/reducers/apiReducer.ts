import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { hitToolkitTestApi } from "../actions/hitApiAction";

const initialApiState = {
  data: null
}

const toolkitApiReducer = createSlice({
  name: 'apiReducer',
  initialState: initialApiState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(hitToolkitTestApi.fulfilled, (state, { payload }) => {
      state.data = payload;
    })
    builder.addCase(hitToolkitTestApi.pending, (state) => {
      // state.data = payload;
    })
    builder.addCase(hitToolkitTestApi.rejected, (state) => {
      // state.data = payload;
    })
  }
})
export default toolkitApiReducer.reducer;