import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { viewAllPostApi, jobApplicatonsOfJobseekerApi } from "../../service/constants"
import { applyToJob } from "../../service/jobSeekerService";


export const applyToJobAction = createAsyncThunk("applyToJobAction", async (jobApplied) => {
  try {
    const response = await applyToJob(jobApplied);
    return response.json();
  } catch (error) {
    return error;
  }

})

export const getAllJobs = createAsyncThunk("getAllJobs", async () => {
  try {
    const response = await fetch(
      viewAllPostApi
    );
    const result = await response.json();
    console.log("view all jobs", result)
    return result;
  } catch (error) {
    return error;
  }
});
// "https://64571a7e5f9a4f236151cbaf.mockapi.io/api/jobs"

const initialState = {
  jobs: [],
  applications: [],
  loading: false,
  error: null,
};

const jobserviceslice = createSlice({
  name: "jobserviceslice",
  initialState,
  reducers: {
    getJobById: (state, action) => {
      return state.jobs.filter(job => job.id === action.payload.id);
    }
  },
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

export const { getJobById } = jobserviceslice.actions;
export default jobserviceslice.reducer;
