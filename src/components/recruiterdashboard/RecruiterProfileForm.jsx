import { useState } from "react";
import styled from "styled-components";
import { updateRecruiterProfile } from "../../store/slices/recruiterslice";
import { useSelector, useDispatch } from "react-redux";

const RecruiterProfileFormWrapper = styled.form`
  display:grid;
  grid-template-columns:repeat(2, 1fr);
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
  const recruiter = useSelector((state) => state.recruiterApp.recruiter);
  const dispatch = useDispatch();

  const [updatedRecruiter, setUpdatedRecruiter] = useState({
    id: recruiter.id,
    firstName: recruiter.firstName,
    lastName: recruiter.lastName,
    email: recruiter.email,
    mobileNumber: recruiter.mobileNumber,
    address: recruiter.address,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateRecruiterProfile(updatedRecruiter));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedRecruiter({ ...updatedRecruiter, [name]: value });
  };

  return (
  <>    
  <h3 style={{fontFamily:"sans-serif",fontWeight:"600", fontSize:"2rem",textAlign:"center"}}>Edit Profile</h3>
    <RecruiterProfileFormWrapper onSubmit={handleSubmit}>
      
      <FormLabel htmlFor="firstName">First Name</FormLabel>
      <FormInput
        type="text"
        name="firstName"
        value={updatedRecruiter.firstName}
        placeholder="First Name"
        onChange={handleChange}
        required
      />
      <FormLabel htmlFor="lastName">Last Name</FormLabel>
      <FormInput
        type="text"
        name="lastName"
        value={updatedRecruiter.lastName}
        placeholder="Last Name"
        onChange={handleChange}
        required
      />
                  <FormLabel htmlFor="email">Email</FormLabel>

      <FormInput
        type="email"
        name="email"
        value={updatedRecruiter.email}
        placeholder="Email"
        onChange={handleChange}
        required
      />
            <FormLabel htmlFor="mobileNumber">Mobile Number</FormLabel>

      <FormInput
        type="tel"
        name="mobileNumber"
        value={updatedRecruiter.mobileNumber}
        placeholder="Mobile Number"
        onChange={handleChange}
        required
      />
      <FormLabel htmlFor="address">Address</FormLabel>
      <FormInput
        name="address"
        value={updatedRecruiter.address}
        placeholder="Address"
        onChange={handleChange}
        required
      />
      <FormButton type="submit">Update Profile</FormButton>
    </RecruiterProfileFormWrapper>
    </>

  );
};

export default RecruiterProfileForm;


