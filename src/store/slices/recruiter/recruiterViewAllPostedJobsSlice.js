import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { viewAllJobPost } from "../../../service/recruiterService";

export const viewAllJobPostAction = createAsyncThunk(
  "viewAllJobPostAction",
  async (recruiter_id) => {
    try {
      const result = await viewAllJobPost(recruiter_id);
      return result;
    } catch (error) {
      return error;
    }
  }
);

const viewAllPostedJobsSlice = createSlice({
  name: "postNewJobSlice",
  initialState: {
    loading: false,
    data: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(viewAllJobPostAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(viewAllJobPostAction.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
        state.error = null;
      })
      .addCase(viewAllJobPostAction.rejected, (state, { payload }) => {
        state.loading = false;
        state.data = [];
        state.error = payload;
      });
  },
});

export default viewAllPostedJobsSlice.reducer;
