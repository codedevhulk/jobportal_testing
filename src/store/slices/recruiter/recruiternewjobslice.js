import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { newJobPost } from "../../../service/recruiterService";

export const postNewJobAction = createAsyncThunk(
  "postNewJob",
  async (jobData) => {
    try {
      const recruiterId = localStorage.getItem("recruiterId")
      const newJobDataM = { ...jobData, recruiterId }
      const result = await newJobPost(newJobDataM);
      return result;
    } catch (error) {
      return error;
    }
  }
);

export const updateJobAction = createAsyncThunk("updateJobAction", async () => {

})

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
