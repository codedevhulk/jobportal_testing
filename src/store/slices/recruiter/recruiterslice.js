import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  updateRecruiterProfileApi,
  signinApi,
  signupApi,
  signoutApi,
} from "../../../service/constants";



export const recruiterSignin = createAsyncThunk(
  "recruiterSignin",
  async (recruiterSigninDetails) => {
    try {
      const response = await fetch(signinApi, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(recruiterSigninDetails),
      });
      const result = await response.json();
      if (result.token)
        localStorage.setItem("rtoken", JSON.stringify(result?.token));
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
      console.log("from signup component", recruiterSignUpDetails)

      const response = await fetch(signupApi, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ ...recruiterSignUpDetails, role: "recruiter" }),
      });
      const result = await response.json();
      if (result.token)
        localStorage.setItem("rtoken", JSON.stringify(result?.token));
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
      const response = await fetch(
        `${updateRecruiterProfileApi}/${updateRecruiterProfile.id}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedRecruiterProfile),
        }
      );
      const result = await response.json();
      return result;
    } catch (error) {
      return error;
    }
  }
);

const initialState = {
  recruiter: {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    address: "",
  },
  loading: false,
  error: null,
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
        state.recruiter = { ...action.payload };
      })
      .addCase(updateRecruiterProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export default recruiterSlice.reducer;
