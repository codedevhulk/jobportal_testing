import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { newJobPost } from "../../../service/recruiterService";

export const postNewJobAction = createAsyncThunk(
  "postNewJob",
  async (jobData) => {
    try {
      const result = await newJobPost(jobData);
      return result;
    } catch (error) {
      return error;
    }
  }
);

const postNewJobSlice = createSlice({
  name: "postNewJobSlice",
  initialState: {
    loading: false,
    data: {},
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(postNewJobAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(postNewJobAction.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
        state.error = null;
      })
      .addCase(postNewJobAction.rejected, (state, { payload }) => {
        state.loading = false;
        state.data = {};
        state.error = payload;
      });
  },
});

export default postNewJobSlice.reducer;
