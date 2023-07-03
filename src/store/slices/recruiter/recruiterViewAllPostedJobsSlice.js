import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { viewAllJobPost } from "../../../service/recruiterService";

export const viewAllJobPostAction = createAsyncThunk(
  "viewAllJobPostAction",
  async () => {
    try {
      const recruiter_id = localStorage.getItem("recruiterId")
      const result = await viewAllJobPost();
      if(Array.isArray(result)){
        const res = result.filter(job => job.recruiterId === Number(recruiter_id))
        return res;
      }
      return []
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
