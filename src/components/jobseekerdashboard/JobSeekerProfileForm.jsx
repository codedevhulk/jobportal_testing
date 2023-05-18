import styled from "styled-components";
import { TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { useState } from "react";

const JobSeekerProfileContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:100vh;
padding:100px;
margin:auto;
@media screen (max-width:700px){
  width:250px;
}
`
const JobSeekerProfileFormContainer = styled.form`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:500px;

`


const JobSeekerFormFieldContainer = styled.div`
display:flex;
align-items:center;
justify-content:space-around;
margin:10px;
width:100%;

`

const SubmitButton = styled.button`
    color:#98c1d9;
    width:30%;
    margin:auto;
`;


const JobSeekerProfileForm = () => {
  const { username } = useSelector(state => state.jobseekerApp.jobseeker);
  const [profileData, setProfileData] = useState({});


  const getProfileData = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value })

  }

  return (<JobSeekerProfileContainer>
    <JobSeekerProfileFormContainer>
      <JobSeekerFormFieldContainer>

        <TextField type="text"
          size="small"
          variant="outlined"
          fullWidth label="Username" size="small" variant="outlined"
          name="username" value={profileData?.username} onChange={getProfileData} disabled />
      </JobSeekerFormFieldContainer>

      <JobSeekerFormFieldContainer>
        <TextField type="text"
          size="small"
          variant="outlined"
          fullWidth label="First Name" name="firstName" value={profileData?.firstName} onChange={getProfileData} />
      </JobSeekerFormFieldContainer>

      <JobSeekerFormFieldContainer>
        <TextField type="text"
          size="small"
          variant="outlined"
          fullWidth label="Last Name" name="lastName" value={profileData?.lastName} onChange={getProfileData} />
      </JobSeekerFormFieldContainer>

      <JobSeekerFormFieldContainer>
        <TextField type="text"
          size="small"
          variant="outlined"
          fullWidth label="Mobile Number" name="mobileNumber" value={profileData?.mobileNumber} onChange={getProfileData} />
      </JobSeekerFormFieldContainer>


      <JobSeekerFormFieldContainer>
        <TextField type="text"
          size="small"
          variant="outlined"
          fullWidth label="Email" name="email" value={profileData?.email} onChange={getProfileData} />
      </JobSeekerFormFieldContainer>


      <JobSeekerFormFieldContainer>
        <TextField type="text"
          size="small"
          variant="outlined"
          fullWidth label="Qualification" name="qualification" value={profileData?.qualification} onChange={getProfileData} />
      </JobSeekerFormFieldContainer>





      <JobSeekerFormFieldContainer>
        <TextField type="text"
          size="small"
          variant="outlined"
          fullWidth label="Skill Sets" name="skillSet" value={profileData?.skillSet} onChange={getProfileData} />
      </JobSeekerFormFieldContainer>


      <JobSeekerFormFieldContainer>
        <TextField type="text"
          size="small"
          variant="outlined"
          fullWidth label="Experience" name="experience" value={profileData?.experience} onChange={getProfileData} />
      </JobSeekerFormFieldContainer>


      <JobSeekerFormFieldContainer>
        <TextField type="text"
          size="small"
          variant="outlined"
          fullWidth label="Summary" name="summary" value={profileData?.summary} onChange={getProfileData} />
      </JobSeekerFormFieldContainer>

      <JobSeekerFormFieldContainer>
        <TextField type="text"
          size="small"
          variant="outlined"
          fullWidth label="Address" name="address" value={profileData?.address} onChange={getProfileData} />
      </JobSeekerFormFieldContainer>

      <SubmitButton>Update Profile</SubmitButton>


    </JobSeekerProfileFormContainer>

  </JobSeekerProfileContainer>);
};

export default JobSeekerProfileForm;
