import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signinApi, signupApi } from "../../service/constants";
import {
  getJobseekerProfileData,
  updateJobseekerProfile,
} from "../../service/jobSeekerService";
import { jobApplicatonsOfJobseekerApi } from "../../service/constants";
import JobDetailsCard from "../../components/jobservicecomponents/JobDetailsCard";

//signup action
export const jobseekerSignUp = createAsyncThunk(
  "jobseekerSignUp",
  async (jobseekerSignUpDetails) => {
    try {
      console.log("from signup component", jobseekerSignUpDetails);
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
      localStorage.setItem("username", result.username);
      localStorage.setItem("jobseekerId", result.id);

      return result;
    } catch (error) {
      return error;
    }
  }
);

export const updateJobseekerProfileAction = createAsyncThunk(
  "updateJobseekerProfileAction",
  async (jobseekerDetails) => {
    try {
      let username = localStorage.getItem("username");
      const jobseekerDetail = { ...jobseekerDetails, username };
      console.log("from component", jobseekerDetail);
      const response = await updateJobseekerProfile(jobseekerDetail);
      console.log("response update", response);
      return response;
    } catch (error) {
      return error;
    }
  }
);
export const getJobseekerProfileAction = createAsyncThunk(
  "getJobseekerProfileAction",
  async () => {
    try {
      const username = localStorage.getItem("username");
      const response = await getJobseekerProfileData(username);
      return response;
    } catch (error) {
      return error;
    }
  }
);
export const jobApplicatonsOfJobseekerAction = createAsyncThunk(
  "jobApplicationsOfJobseeker",
  async () => {
    const response = await fetch(jobApplicatonsOfJobseekerApi);
  }
);

const initialState = {
  jobseeker: {
    id: null,
    firstName: "",
    lastName: "",
    username: "",
    mobileNumber: "",
    email: "",
    password: "",
    qualification: "",
    skillSet: "",
    experience: "",
    summary: "",
    address: "",
  },
  applications: [],
  loading: false,
  error: null,
  message: null,
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
      })
      .addCase(updateJobseekerProfileAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateJobseekerProfileAction.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload;
        console.log(action.payload);
      })
      .addCase(updateJobseekerProfileAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getJobseekerProfileAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(getJobseekerProfileAction.fulfilled, (state, action) => {
        state.loading = false;
        state.jobseeker = { ...state.jobseeker, ...action.payload };
        console.log(
          "fulfiled getJobseeker profile from jobseeker slice",
          action.payload
        );
      })
      .addCase(getJobseekerProfileAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default jobSeekerSlice.reducer;
