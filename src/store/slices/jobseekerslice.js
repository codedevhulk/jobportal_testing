import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signinApi, signupApi } from "../../service/constants";
import {
  getJobseekerProfileData,
  updateJobseekerProfile,
} from "../../service/jobSeekerService";
import { jobApplicatonsOfJobseekerApi } from "../../service/constants";

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
      if (result.roles[0] === "ROLE_JOBSEEKER")
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
      let userName = localStorage.getItem("username");
      const jobseekerDetail = { ...jobseekerDetails, userName };
      const response = await updateJobseekerProfile(jobseekerDetail);
      console.log("inside update jobseeker after response", response);
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
      console.log("jobseeker profile response", response);
      return response;
    } catch (error) {
      return error;
    }
  }
);
export const jobApplicatonsOfJobseekerAction = createAsyncThunk(
  "jobApplicationsOfJobseeker",
  async () => {
    try {
      const id = localStorage.getItem("jobseekerId");
      const url = `${jobApplicatonsOfJobseekerApi}${id}`;
      console.log(url);
      const response = await fetch(url);
      const data = response.json();
      console.log(data);
      return data;
    } catch (error) {
      return error;
    }
  }
);

const initialState = {
  jobseeker: {
    jobSeekerId: null,
    firstName: "",
    lastName: "",
    userName: "",
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
        state.error = action.payload.message;
        state.message = action.payload.message;
        // if (action.payload.status === 409) {
        //   state.error = action.payload.message;
        // } else if (action.payload.status === 200) {
        //   state.error = n;
        //   state.jobseeker = { ...action.payload.data };
        // }
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
        console.log("action get jobseeker profile fulfilled", action.payload);
        state.jobseeker = { ...action.payload };
        console.log(
          "fulfiled getJobseeker profile from jobseeker slice",
          action.payload
        );
      })
      .addCase(getJobseekerProfileAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(jobApplicatonsOfJobseekerAction.pending, (state) => {
        state.loading = false;
      })
      .addCase(jobApplicatonsOfJobseekerAction.fulfilled, (state, action) => {
        state.loading = false;
        console.log("state.application", state.applications);
        state.applications = action.payload;

        console.log("action.payload", action.payload);
      })
      .addCase(jobApplicatonsOfJobseekerAction.rejected, (state, action) => {
        state.loading = false;
        console.log(action.payload);
      });
  },
});

export default jobSeekerSlice.reducer;
