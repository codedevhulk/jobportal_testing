import styled from "styled-components";
import { TextField, Button } from "@mui/material";
import {  useDispatch } from "react-redux";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom"
import { updateJobseekerProfileAction } from "../../store/slices/jobseekerslice";
import { getJobseekerProfileAction } from "../../store/slices/jobseekerslice";

const JobSeekerProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 100px;
  margin: auto;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  @media screen (max-width: 700px) {
    width: 250px;
  }
`;
const JobSeekerProfileFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
`;

const JobSeekerFormFieldContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 10px;
  width: 100%;
`;

const SubmitButton = styled.button`
  color: white;
  width: 30%;
  margin: auto;
  background: #3d5a80;
  height: 40px;
  border-radius:10px;
`;

const JobSeekerProfileForm = () => {
  const navigate = useNavigate();
  let response;
  const [profileData, setProfileData] = useState({});
  const [, setShrinkValue] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);
  const dispatch = useDispatch();

  const getProfileData = (e) => {
    if (e.target.value === "") {
      setShrinkValue(false)
    } else {
      setShrinkValue(true);
    }

    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      response = await dispatch(updateJobseekerProfileAction(profileData));
      if (response.payload === true)
        setResponseMessage("Updated Successfully")
      setTimeout(() => {
        setResponseMessage(null);
      }, 5000)
    } catch (error) {
      setResponseMessage(error.message)
      setTimeout(() => {
        setResponseMessage(null);
      }, 5000)
    }
  };
  const getProfileDataFromRequest = useCallback(async () => {

    const res = await dispatch(getJobseekerProfileAction());

    console.log("res from  get profile dispatch in edit component", res)

    setProfileData({
      ...res.payload
    })
  },[dispatch])

  useEffect(() => {
    getProfileDataFromRequest();
  }, [getProfileDataFromRequest,response]);

  return (
    <JobSeekerProfileContainer>
      <JobSeekerProfileFormContainer onSubmit={handleSubmit}>
        <JobSeekerFormFieldContainer>
          <TextField
            type="text"
            fullWidth
            placeholder="Username"
            size="small"
            variant="outlined"
            label="Username"
            name="userName"
            value={profileData?.userName}
            onChange={getProfileData}
            InputLabelProps={{ shrink: true }}
            disabled
          />
        </JobSeekerFormFieldContainer>
        <JobSeekerFormFieldContainer>
          <TextField
            type="text"
            size="small"
            variant="outlined"
            fullWidth
            label="First Name"
            name="firstName"
            value={profileData?.firstName}
            onChange={getProfileData}
            InputLabelProps={{ shrink: true }}
          />
        </JobSeekerFormFieldContainer>

        <JobSeekerFormFieldContainer>
          <TextField
            type="text"
            size="small"
            variant="outlined"
            fullWidth
            label="Last Name"
            name="lastName"
            value={profileData?.lastName}
            onChange={getProfileData}
            InputLabelProps={{ shrink: true }}
          />
        </JobSeekerFormFieldContainer>

        <JobSeekerFormFieldContainer>
          <TextField
            type="text"
            size="small"
            variant="outlined"
            fullWidth
            label="Mobile Number"
            name="mobileNumber"
            value={profileData?.mobileNumber}
            onChange={getProfileData}
            InputLabelProps={{ shrink: true }}
          />
        </JobSeekerFormFieldContainer>

        <JobSeekerFormFieldContainer>
          <TextField
            type="text"
            size="small"
            variant="outlined"
            fullWidth
            name="email"
            label="Email"
            value={profileData?.email}
            onChange={getProfileData}
            InputLabelProps={{ shrink: true }}
          />
        </JobSeekerFormFieldContainer>

        <JobSeekerFormFieldContainer>
          <TextField
            type="text"
            size="small"
            variant="outlined"
            fullWidth
            label="Qualification"
            name="qualification"
            value={profileData?.qualification}
            onChange={getProfileData}
            InputLabelProps={{ shrink: true }}
          />
        </JobSeekerFormFieldContainer>

        <JobSeekerFormFieldContainer>
          <TextField
            type="text"
            size="small"
            variant="outlined"
            fullWidth
            label="Skill Sets"
            name="skillSet"
            value={profileData?.skillSet}
            onChange={getProfileData}
            InputLabelProps={{ shrink: true }}
          />
        </JobSeekerFormFieldContainer>

        <JobSeekerFormFieldContainer>
          <TextField
            type="text"
            size="small"
            variant="outlined"
            fullWidth
            label="Experience"
            name="experience"
            value={profileData?.experience}
            onChange={getProfileData}
            InputLabelProps={{ shrink: true }}
          />
        </JobSeekerFormFieldContainer>

        <JobSeekerFormFieldContainer>
          <TextField
            type="text"
            size="small"
            variant="outlined"
            fullWidth
            label="Summary"
            name="summary"
            value={profileData?.summary}
            onChange={getProfileData}
            InputLabelProps={{ shrink: true }}
          />
        </JobSeekerFormFieldContainer>

        <JobSeekerFormFieldContainer>
          <TextField
            type="text"
            size="small"
            variant="outlined"
            fullWidth
            label="Address"
            name="address"
            value={profileData?.address}
            onChange={getProfileData}
            InputLabelProps={{ shrink: true }}
          />
        </JobSeekerFormFieldContainer>

        <SubmitButton>Update Profile</SubmitButton>
        {responseMessage && <p>{responseMessage}</p>}
        <Button onClick={() => navigate(-1)}>back</Button>
      </JobSeekerProfileFormContainer>
    </JobSeekerProfileContainer>
  );
};

export default JobSeekerProfileForm;
