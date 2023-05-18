import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signinApi, signupApi } from "../../service/constants";

//signup action
export const jobseekerSignUp = createAsyncThunk(
  "jobseekerSignUp",
  async (jobseekerSignUpDetails) => {

    try {
      console.log("from signup component", jobseekerSignUpDetails)
      const response = await fetch(signupApi, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(jobseekerSignUpDetails),
      });
      const result = await response.json();
      console.log("from jobseekersignup slice", result);
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
      const response = await fetch(signinApi, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(jobseekerSignInDetails),
      });
      const result = await response.json();
      console.log("from jobseekersignin slice", result);
      if (result.roles[0] === "ROLE_USER")
        localStorage.setItem("jtoken", "jobseeker");
      return result;
    } catch (error) {
      return error;
    }
  }
);

const initialState = {
  jobseeker: {
    id: "",
    firstName: "",
    lastName: "",
    username: "",
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
        state.error = null;
        state.jobseeker = { ...action.payload };

      })
      .addCase(jobseekerSignIn.rejected, (state, action) => {
        state.error = action.payload.message;
        state.jobseeker = { ...state.jobseeker };
      });
  },
});

export default jobSeekerSlice.reducer;
