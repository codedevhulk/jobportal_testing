import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//signup action
export const jobseekerSignUp = createAsyncThunk(
  "jobseekerSignUp",
  async (jobseekerSignUpDetails) => {
    try {
      const response = await fetch("http://localhost:8001/jobseeker/signup", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(jobseekerSignUpDetails),
      });
      const result = await response.json();
      console.log("from jobseekersignup slice", result);
      if (result.token)
        localStorage.setItem("jtoken", JSON.stringify(result.token));
      return result;
    } catch (error) {
      return error;
    }
  }
);
//login action
export const jobseekerSignIn = createAsyncThunk(
  "jobseekerSignIn",
  async (jobseekerSignInDetails) => {
    try {
      const response = await fetch("http://localhost:8001/jobseeker/signin", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(jobseekerSignInDetails),
      });
      const result = await response.json();
      console.log("from jobseekersignin slice", result);
      if (result.token)
        localStorage.setItem("jtoken", JSON.stringify(result.token));
      return result;
    } catch (error) {
      return error;
    }
  }
);

const initialState = {
  jobseeker: {
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    address: "",
  },
  loading: false,
  error: null,
};

const jobSeekerSlice = createSlice({
  name: "jobSeekerSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(jobseekerSignUp.pending, (state) => {
        state.loading = true;
      })
      .addCase(jobseekerSignUp.fulfilled, (state, action) => {
        if (action.payload.status === 409) {
          state.error = action.payload.message;
        } else if (action.payload.status === 200) {
          state.error = null;
          state.jobseeker = { ...action.payload.data };
        }
      })
      .addCase(jobseekerSignUp.rejected, (state, action) => {
        state.error = action.payload.message;
        state.jobseeker = { ...state.jobseeker };
      })
      .addCase(jobseekerSignIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(jobseekerSignIn.fulfilled, (state, action) => {
        if (action.payload.status === 409) {
          state.error = action.payload.message;
        } else if (action.payload.status === 200) {
          state.error = null;
          state.jobseeker = { ...action.payload.data };
        }
      })
      .addCase(jobseekerSignIn.rejected, (state, action) => {
        state.error = action.payload.message;
        state.jobseeker = { ...state.jobseeker };
      });
  },
});

export default jobSeekerSlice.reducer;
