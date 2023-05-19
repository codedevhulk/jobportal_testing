import styled from "styled-components";
import { TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { updateJobseekerProfileAction } from "../../store/slices/jobseekerslice";
import { getJobseekerProfileAction } from "../../store/slices/jobseekerslice";

const JobSeekerProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 100px;
  margin: auto;
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
  background: black;
  height: 40px;
`;

const JobSeekerProfileForm = () => {
  const {
    firstName,
    lastName,
    username,
    mobileNumber,
    email,
    qualification,
    skillSet,
    experience,
    summary,
    address,
  } = useSelector((state) => state.jobseekerApp.jobseeker);
  const [profileData, setProfileData] = useState({});
  const [responseMessage, setResponseMessage] = useState(null);
  const dispatch = useDispatch();

  const getProfileData = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await dispatch(updateJobseekerProfileAction(profileData));
    setResponseMessage(response);
    setTimeout(() => {
      setResponseMessage(response);
    }, 5000);
  };
  const getProfileDataFromRequest = async () => {
    await dispatch(getJobseekerProfileAction());
  };

  useEffect(() => {
    getProfileDataFromRequest();
  }, []);

  return (
    <JobSeekerProfileContainer>
      <JobSeekerProfileFormContainer onSubmit={handleSubmit}>
        <JobSeekerFormFieldContainer>
          <TextField
            type="text"
            fullWidth
            label="Username"
            size="small"
            variant="outlined"
            name="username"
            value={profileData?.username || username}
            onChange={getProfileData}
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
            value={profileData?.firstName || firstName}
            onChange={getProfileData}
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
            value={profileData?.lastName || lastName}
            onChange={getProfileData}
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
            value={profileData?.mobileNumber || mobileNumber}
            onChange={getProfileData}
          />
        </JobSeekerFormFieldContainer>

        <JobSeekerFormFieldContainer>
          <TextField
            type="text"
            size="small"
            variant="outlined"
            fullWidth
            name="email"
            placeholder="Email"
            value={profileData?.email || email}
            onChange={getProfileData}
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
            value={profileData?.qualification || qualification}
            onChange={getProfileData}
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
            value={profileData?.skillSet || skillSet}
            onChange={getProfileData}
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
            value={profileData?.experience || experience}
            onChange={getProfileData}
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
            value={profileData?.summary || summary}
            onChange={getProfileData}
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
            value={profileData?.address || address}
            onChange={getProfileData}
          />
        </JobSeekerFormFieldContainer>

        <SubmitButton>Update Profile</SubmitButton>
        {responseMessage && <p>{responseMessage}</p>}
      </JobSeekerProfileFormContainer>
    </JobSeekerProfileContainer>
  );
};

export default JobSeekerProfileForm;
