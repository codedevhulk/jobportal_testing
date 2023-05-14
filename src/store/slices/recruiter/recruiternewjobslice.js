import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { newJobPost, viewAllJobPost } from "../../../service/recruiterService";

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

const postNewJobSlice = createSlice({
  name: "postNewJobSlice",
  initialState: {
    loading: false,
    data: {},
    error: null,
  },
  extraReducers: (builder) => {},
});

export default postNewJobSlice.reducer;
