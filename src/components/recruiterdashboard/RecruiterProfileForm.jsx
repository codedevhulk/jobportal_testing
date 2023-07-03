import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  getRecruiterProfileAction,
  updateRecruiterProfile,
} from "../../store/slices/recruiter/recruiterslice";
import {  useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const RecruiterProfileFormWrapper = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  max-width: 800px;
  margin: 0 auto;
`;

const FormLabel = styled.label`
  font-size: 1.2rem;
`;

const FormInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 4px;
  border: none;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
`;
const FormTextArea = styled.textarea`
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 4px;
  border: none;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  overflow: scroll;
`;

const FormButton = styled.button`
  grid-column: 1 / span 2;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #0077cc;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #0066b2;
  }
`;

const RecruiterProfileForm = () => {
  const navigate = useNavigate();
  let response;
  const [profileData, setProfileData] = useState({});
  const [responseMessage, setResponseMessage] = useState(null);
  const dispatch = useDispatch();

  const getProfileData = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      response = await dispatch(updateRecruiterProfile(profileData));
      if (response.payload === true) setResponseMessage("Updated Successfully");
      setTimeout(() => {
        setResponseMessage(null);
      }, 5000);
    } catch (error) {
      setResponseMessage(error.message);
      setTimeout(() => {
        setResponseMessage(null);
      }, 5000);
    }
  };
  

  useEffect(() => {
    const getProfileDataFromRequest = async () => {
      const res = await dispatch(getRecruiterProfileAction());
  
      console.log("res from  get profile dispatch in edit component", res);
  
      setProfileData({
        ...res.payload,
      });
    }
    getProfileDataFromRequest();
  }, [response,dispatch]);

  return (
    <>
      <h3
        style={{
          fontFamily: "sans-serif",
          fontWeight: "600",
          fontSize: "2rem",
          textAlign: "center",
        }}
      >
        Edit Profile
      </h3>
      <RecruiterProfileFormWrapper onSubmit={handleSubmit}>
        <FormLabel htmlFor="userName">Username</FormLabel>

        <FormInput
          type="text"
          name="username"
          value={profileData?.username}
          placeholder="Username"
          onChange={getProfileData}
          disabled
        />
        <FormLabel htmlFor="firstName">First Name</FormLabel>
        <FormInput
          type="text"
          name="firstName"
          value={profileData?.firstName}
          placeholder="First Name"
          onChange={getProfileData}
        />
        <FormLabel htmlFor="lastName">Last Name</FormLabel>
        <FormInput
          type="text"
          name="lastName"
          value={profileData?.lastName}
          placeholder="Last Name"
          onChange={getProfileData}
        />
        <FormLabel htmlFor="email">Email</FormLabel>

        <FormInput
          type="email"
          name="email"
          value={profileData?.email}
          placeholder="Email"
          onChange={getProfileData}
        />
        <FormLabel htmlFor="mobileNumber">Mobile Number</FormLabel>

        <FormInput
          type="tel"
          name="mobileNumber"
          value={profileData?.mobileNumber}
          placeholder="Mobile Number"
          onChange={getProfileData}
        />
        <FormLabel htmlFor="address">Address</FormLabel>
        <FormTextArea
          type="textarea"
          name="address"
          value={profileData?.address}
          placeholder="Address"
          onChange={getProfileData}
        />
        <FormButton type="submit">Update Profile</FormButton>
        <Button onClick={() => navigate(-1)}>back</Button>
        {responseMessage && <p>{responseMessage}</p>}
      </RecruiterProfileFormWrapper>
    </>
  );
};

export default RecruiterProfileForm;
