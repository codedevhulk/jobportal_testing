import { createSlice } from "@reduxjs/toolkit";

const searchservice = createSlice({
  name: "searchservice",
  initialState: {
    value: "",
    loading: false,
    error: null,
  },
  reducers: {
    setvalue: (state) => {},
  },
});
