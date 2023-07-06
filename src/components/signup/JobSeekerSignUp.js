import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TextField, IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import { useDispatch } from "react-redux";
import { jobseekerSignUp } from "../../store/slices/jobseekerslice";

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
    margin-top: -200px;
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
// type TJobseekerSignUpDetails = {
//   firstName: string;
//   lastName: string;
//   mobileNumber: string;
//   email: string;
//   address?: string | undefined;
//   password: string;
// };

const JobseekerSignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [jtoken] = useState(localStorage.getItem("jtoken"));
  const [jobseekerSignUpDetails, setJobseekerSignUpDetails] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [actionResponseMessage, setActionResponseMessage] = useState(null);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    const result = await dispatch(jobseekerSignUp(jobseekerSignUpDetails));
    console.log("results ", result);
    if (result.payload.error) {
      setActionResponseMessage(result.payload.error);
    } else {
      setActionResponseMessage(result.payload.message);
    }

    let token = localStorage.getItem("jtoken");
    if (token) {
      navigate("/jobseeker");
    }

    setTimeout(() => {
      setActionResponseMessage(null);
    }, 10000);
  };
  useEffect(() => {
    if (jtoken) {
      navigate("/jobseeker");
    }
  }, [navigate, jtoken]);

  const getSigUpDetails = (e) => {
    setJobseekerSignUpDetails({
      ...jobseekerSignUpDetails,
      [e.target.name]: e.target.value,
    });
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
          <Title>JobSeeker SignUp</Title>
          <TextField
            type="text"
            label="Username"
            name="username"
            size="small"
            variant="outlined"
            fullWidth
            value={jobseekerSignUpDetails?.username}
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
            value={jobseekerSignUpDetails?.email}
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
            value={jobseekerSignUpDetails?.password}
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

export default JobseekerSignUp;
