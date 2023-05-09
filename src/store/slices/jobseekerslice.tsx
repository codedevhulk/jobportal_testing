import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface IinitialState {
  jobseeker: {
    firstName: string;
    lastName: string;
    email: string;
    mobileNumber: string;
    address?: string | undefined;
    jobseekerJwt: string;
  };
}
const initialState: IinitialState = {
  jobseeker: {
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    address: "",
    jobseekerJwt: "",
  },
};

const jobSeekerSlice = createSlice({
  name: "jobSeekerSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export {};
