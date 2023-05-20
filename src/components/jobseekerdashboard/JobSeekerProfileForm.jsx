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
  background: black;
  height: 40px;
`;

const JobSeekerProfileForm = () => {
  const {
    firstName,
    lastName,
    userName = localStorage.getItem("username"),
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
    try {
      const response = await dispatch(updateJobseekerProfileAction(profileData));
      console.log("response profile edit form after dispatch", response)
      setResponseMessage("Updated Successfully")
      setTimeout(() => {
        setResponseMessage(null);
      }, 5000)
    } catch (error) {
      setResponseMessage(error.toString)
    }
  };
  const getProfileDataFromRequest = async () => {

    await dispatch(getJobseekerProfileAction());


    setProfileData({
      firstName,
      lastName,
      mobileNumber,
      userName,
      email,
      qualification,
      skillSet,
      experience,
      summary,
      address,
    })
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
            placeholder="Username"
            size="small"
            variant="outlined"
            name="userName"
            value={profileData?.userName}
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
            value={profileData?.firstName}
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
            value={profileData?.lastName}
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
          />
        </JobSeekerFormFieldContainer>

        <SubmitButton>Update Profile</SubmitButton>
        {responseMessage && <p>{responseMessage}</p>}
      </JobSeekerProfileFormContainer>
    </JobSeekerProfileContainer>
  );
};

export default JobSeekerProfileForm;
