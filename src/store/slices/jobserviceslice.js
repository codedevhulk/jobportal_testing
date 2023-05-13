import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getAllJobs = createAsyncThunk("getAllJobs", async () => {
  try {
    const response = await fetch(
      "https://64571a7e5f9a4f236151cbaf.mockapi.io/api/jobs"
    );
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
});

const initialState = {
  jobs: [],
  applications: [],
  loading: false,
  error: null,
};

const jobserviceslice = createSlice({
  name: "jobserviceslice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllJobs.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload;
      })
      .addCase(getAllJobs.rejected, (state, action) => {
        state.loading = false;
        state.payload = action.payload.message;
      });
  },
});

export default jobserviceslice.reducer;
