import { createSlice } from "@reduxjs/toolkit";

const searchservice = createSlice({
  name: "searchservice",
  initialState: {
    value: "",
  },
  reducers: {
    setSearchInputValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSearchInputValue } = searchservice.actions;

export default searchservice.reducer;
