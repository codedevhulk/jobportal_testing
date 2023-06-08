import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  updateRecruiterProfileApi,
  signinApi,
  signupApi,
  recruiterSignupApi,
  recruiterSigninApi,
} from "../../../service/constants";
import { getRecruiterProfileData } from "../../../service/recruiterService";

export const recruiterSignin = createAsyncThunk(
  "recruiterSignin",
  async (recruiterSigninDetails) => {
    try {
      const response = await fetch(recruiterSigninApi, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(recruiterSigninDetails),
      });
      const result = await response.json();
      console.log("signin recruiter response", result);
      if (result.roles[0] === "ROLE_RECRUITER")
        localStorage.setItem("rtoken", JSON.stringify("recruiter"));
      localStorage.setItem("recruiterId", result.id);
      localStorage.setItem("username", result.username);
      return result;
    } catch (error) {
      return error;
    }
  }
);
export const recruiterSignUp = createAsyncThunk(
  "recruiterSignUp",
  async (recruiterSignUpDetails) => {
    try {
      console.log("from recruiter signup component", recruiterSignUpDetails);

      const response = await fetch(recruiterSignupApi, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ ...recruiterSignUpDetails }),
      });
      const result = await response.json();
      console.log("recruiter signup response :", result);

      return result;
    } catch (error) {
      return error;
    }
  }
);

export const updateRecruiterProfile = createAsyncThunk(
  "updateRecruiterProfile",
  async (updatedRecruiterProfile) => {
    try {
      const response = await fetch(updateRecruiterProfileApi, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedRecruiterProfile),
      });
      const result = await response.json();
      return result;
    } catch (error) {
      return error;
    }
  }
);

export const getRecruiterProfileAction = createAsyncThunk(
  "getRecruiterProfileAction",
  async () => {
    try {
      const username = localStorage.getItem("username");
      const response = await getRecruiterProfileData(username);
      console.log("recruiter profile response ", response);
      return response;
    } catch (error) {
      return error;
    }
  }
);

const initialState = {
  recruiter: {
    id: "",
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    address: "",
  },
  loading: false,
  error: null,
  message: null,
};

const recruiterSlice = createSlice({
  name: "recruiterSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(recruiterSignUp.pending, (state) => {
        state.loading = true;
      })
      .addCase(recruiterSignUp.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        console.log(action.payload);
      })
      .addCase(recruiterSignUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(recruiterSignin.pending, (state) => {
        state.loading = true;
      })
      .addCase(recruiterSignin.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.status === 409) {
          state.error = action.payload.message;
        } else if (action.payload === 200) {
          state.recruiter = { ...action.payload.data };
          console.log(action.payload);
          state.error = null;
        } else {
          state.error = action.payload.message;
        }
      })
      .addCase(recruiterSignin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(updateRecruiterProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateRecruiterProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload;
        console.log(action.payload);
      })
      .addCase(updateRecruiterProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
    builder
      .addCase(getRecruiterProfileAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRecruiterProfileAction.fulfilled, (state, action) => {
        state.loading = false;
        state.recruiter = action.payload;
        console.log("fulfiled getRecruiterProfile", action);
      })
      .addCase(getRecruiterProfileAction.rejected, (state, action) => {
        state.loading = false;
        console.log("Rejected getRecruiterProfile", action);
      });
  },
});

export default recruiterSlice.reducer;
