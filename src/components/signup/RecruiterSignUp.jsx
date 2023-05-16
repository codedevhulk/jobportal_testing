import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { TextField, IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import { useDispatch } from "react-redux";
import { recruiterSignUp } from "../../store/slices/recruiter/recruiterslice";
import { useSelector } from "react-redux";

// interface SignInProps {
//   onSignIn: (email: string, password: string) => void;
// }

const SignUpFormContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin: auto;
  padding: 20px;
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  gap: 10px;
  box-sizing: border-box;
  padding: 70px;
  border: 0px solid grey;
  box-shadow: 0px 7px 29px 0px rgba(100, 100, 111, 0.2);

  @media screen and (max-width: 700px) {
    width: 80vw;
    padding: 10px;
    margin-top: -50px;
  }
`;

const SignUpButton = styled.button`
  background-color: #0077cc;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005fa3;
  }
`;

const Title = styled.label`
  font-family: sans-serif;
  letter-spacing: 1px;
  font-weight: 600;
  color: #3d5a81;
  margin-bottom: 20px;
`;

const RecruiterSignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {error} =  useSelector(state=>state.recruiterApp)
  const [actionResponseMessage, setActionResponseMessage] = useState(null);
  const [recruiterSignUpDetails, setRecruiterSignUpDetails] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [rtoken,setRtoken] = useState();


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const getSigUpDetails = (e) => {
    setRecruiterSignUpDetails({
      ...recruiterSignUpDetails,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(()=>{
    if(rtoken){
      navigate("/recruiter")
    }
  },[rtoken])

  const handleSignUp = async (event) => {
    event.preventDefault();
    const result = await dispatch(recruiterSignUp(recruiterSignUpDetails));
    if(!result.error ){
      const token = localStorage.getItem("rtoken");
      if(token){
        setRtoken(token)
      }

    }
    
   
  };
  return (
    <>
      <div>
        <Link
          to="/"
          style={{
            position: "fixed",
            top: "25px",
            left: "20px",
            textDecoration: "none",
            color: "#eef",
            background: "#ee6c4d",
            width: "100px",
            height: "32px",
            textAlign: "center",
            borderRadius: "7px",
            paddingTop: "10px",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
          }}
        >
          Home
        </Link>
      </div>
      <SignUpFormContainer>
        <SignUpForm onSubmit={handleSignUp}>
          <Title>Recruiter Signup</Title>

          <TextField
            type="text"
             
            label="First Name"
            name="firstName"
            size="small"
            variant="outlined"
            fullWidth
            value={recruiterSignUpDetails?.firstName}
            onChange={getSigUpDetails}
            required
          />
          <TextField
            type="text"
             
            label="Last Name"
            name="lastName"
            size="small"
            variant="outlined"
            fullWidth
            value={recruiterSignUpDetails?.lastName}
            onChange={getSigUpDetails}
            required
          />
          <TextField
            type="email"
             
            label="Email"
            name="email"
            size="small"
            variant="outlined"
            fullWidth
            value={recruiterSignUpDetails?.email}
            onChange={getSigUpDetails}
            required
          />

          <TextField
            type="text"
             
            label="Mobile Number"
            name="mobileNumber"
            size="small"
            variant="outlined"
            fullWidth
            value={recruiterSignUpDetails?.mobileNumber}
            onChange={getSigUpDetails}
            required
          />

          <TextField
            type={showPassword ? "text" : "password"}
             
            label="Password"
            size="small"
            variant="outlined"
            fullWidth
            name="password"
            value={recruiterSignUpDetails?.password}
            onChange={getSigUpDetails}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordVisibility}>
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            type="text"
             
            label="Address"
            name="address"
            size="small"
            variant="outlined"
            fullWidth
            value={recruiterSignUpDetails?.address}
            onChange={getSigUpDetails}
          />

          <SignUpButton type="submit">Sign Up</SignUpButton>
          {actionResponseMessage && <div>{actionResponseMessage}</div>}
          <span
            style={{ color: "#98c1d9", cursor: "pointer" }}
            onClick={() => navigate(-1)}
          >
            back
          </span>
        </SignUpForm>
      </SignUpFormContainer>
    </>
  );
};

export default RecruiterSignUp;

