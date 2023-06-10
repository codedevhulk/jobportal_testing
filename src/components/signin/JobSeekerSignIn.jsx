import { useEffect, useState } from "react";
import styled from "styled-components";
import { TextField, IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import { useDispatch} from "react-redux";
import { jobseekerSignIn } from "../../store/slices/jobseekerslice";



const SignInFormContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw; 
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin: auto;
  padding: 20px;
`;

const SignInForm = styled.form`
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

const SignInButton = styled.button`
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

const JobseekerSignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [actionResponseMessage, setActionResponseMessage] = useState(null)
  const [jobseekerSignInDetails, setJobseekerSignInDetails] = useState({ email: "", password: "" });
  const [jwttoken] = useState(localStorage.getItem("jtoken"));
  useEffect(() => {
    if (!jwttoken) {
      navigate("/jobseeker/signin");
    }
  }, [navigate, jwttoken]);

  const handleSignIn = async (event) => {
    event.preventDefault();
    console.log(jobseekerSignInDetails);
    const result = await dispatch(jobseekerSignIn(jobseekerSignInDetails));

    if (localStorage.getItem("jtoken")) {
      navigate("/jobseeker")
    }
    else {
      setActionResponseMessage(result.payload.message + "  Try Again")
    }
    setTimeout(() => {
      setActionResponseMessage(null);
    }, 3000)
  };

  const getSignInDetails = (e) => {
    setJobseekerSignInDetails({
      ...jobseekerSignInDetails,
      [e.target.name]: e.target.value,
    });
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
      <SignInFormContainer>
        <SignInForm onSubmit={handleSignIn}>
          <Title>Jobseeker Signin</Title>

          <TextField
            type="text"
            label="Username"
            name="username"
            size="small"
            variant="outlined"
            fullWidth
            value={jobseekerSignInDetails?.username}
            onChange={getSignInDetails}
          />
          <TextField
            type={showPassword ? "text" : "password"}
            label="Password"
            size="small"
            variant="outlined"
            fullWidth
            name="password"
            value={jobseekerSignInDetails?.password}
            onChange={getSignInDetails}
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
          <SignInButton type="submit">Sign In</SignInButton>
          <Link
            to="/jobseeker/signup"
            style={{
              textDecoration: "none",
              color: "#16488a",
            }}
          >
            Create Account
          </Link>
          {actionResponseMessage && <p>{actionResponseMessage}</p>}
          <span
            style={{ color: "#98c1d9", cursor: "pointer" }}
            onClick={() => navigate(-1)}
          >
            back
          </span>
        </SignInForm>
      </SignInFormContainer>
    </>
  );
};

export default JobseekerSignIn;
