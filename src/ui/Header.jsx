import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import MenuIcon from '@mui/icons-material/Menu';
import styled from "styled-components";
import { signout } from "../service/authService";

const MenuList = styled.ul`
   display:flex;
   flex-direction:column;
   list-style-type:none;
    z-index:2;
`;

const MenuItem = styled.li`

`;
const Button = styled.button`
box-sizing:border-box;

`;

const SmallMenuContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-top:75px;
    box-sizing:border-box;
    z-index:2;
    
   @media screen and (min-width:701px){
    display:none;
 }

`;


const Header = ({ page }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = async () => {
    await signout()
    const rtoken = localStorage.getItem("rtoken");
    const jtoken = localStorage.getItem("jtoken");
    const jobseekerId = localStorage.getItem("jobseekerId");
    if (rtoken) {
      localStorage.removeItem("rtoken");
      navigate("/recruiter/signin");
    }
    if (jtoken && jobseekerId) {
      localStorage.removeItem("jtoken");
      localStorage.removeItem("jobseekerId")
      navigate("/jobseeker/signin");
    }
  };
  return (
    <HeaderContainer>
      <Logo>
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          JOBPORTAL
        </Link>
      </Logo>
      <SmallMenuContainer>
        <Button><MenuIcon />
          <MenuList active={page === "landing"}>
            <MenuItem><Link
              to="/aboutus"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              About Us
            </Link></MenuItem>

            <MenuItem><Link
              to="/recruiter/signin"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <NavigationLink>
                Recruiter Signin
              </NavigationLink>
            </Link></MenuItem>
            <MenuItem> <Link
              to="/jobseeker/signin"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <NavigationLink>
                Jobseeker Signin
              </NavigationLink>
            </Link></MenuItem>
          </MenuList>
        </Button>
      </SmallMenuContainer>

      <Navigation>
        <NavigationLink active={page === "landing"}>
          <Link
            to="/aboutus"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            About Us
          </Link>
        </NavigationLink>
        {page === "landing" ? (
          <>
            <Link to="/recruiter/signin">
              <NavigationLink>Recruiter Signin/Signup</NavigationLink>
            </Link>
            <Link to="/jobseeker/signin">
              <NavigationLink>Jobseeker Signin/Signup</NavigationLink>
            </Link>
          </>
        ) : null}
        {page === "jobseeker" ? (
          <>
            {console.log("jobseeker header")}

            <Link
              to="/jobseeker"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <NavigationLink>
                Search Jobs
              </NavigationLink>
            </Link>
            <Link
              to="/jobseeker/appliedlist"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <NavigationLink>
                Applied Jobs
              </NavigationLink>
            </Link>
            <Link
              to="/jobseeker/profile"
              style={{ color: "inherit", textDecoration: "none" }}
            > <NavigationLink>
                Profile
              </NavigationLink>

            </Link>
            <NavigationLink onClick={handleSignOut}>Sign out</NavigationLink>
          </>
        ) : null}
        {page === "employer" ? (
          <>
            <Link to="/recruiter/applicants" style={{ textDecoration: "none" }}>
              <NavigationLink>Applicants</NavigationLink>
            </Link>
            <Link to="/recruiter/newjobpost" style={{ textDecoration: "none" }}>
              <NavigationLink>Post New Job</NavigationLink>
            </Link>
            <Link to="/recruiter/postedjobs" style={{ textDecoration: "none" }}>
              <NavigationLink>posted jobs</NavigationLink>
            </Link>
            <Link
              to="/recruiter/profile"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <NavigationLink>Profile</NavigationLink>
            </Link>
            <NavigationLink onClick={handleSignOut}>Sign out</NavigationLink>
          </>
        ) : null}
      </Navigation>
    </HeaderContainer >
  );
};

export default Header;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  letter-spacing: 1px;
  font-family: sans-serif;
  padding: 0 10px;
`;

const Navigation = styled.nav`
  display: flex;
  gap: 10px;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const NavigationLink = styled.button`
  color: ${(props) => (props.active ? "blue" : "black")};
  cursor: pointer;
  background-color: #ee6c4d;
  border-radius: 7px;
  border: 1px solid #7aa7c7;
  box-shadow: rgba(255, 255, 255, 0.7) 0 1px 0 0 inset;
  box-sizing: border-box;
  color: #e0fbfc;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", "Liberation Sans",
    sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.15385;
  margin: 0;
  outline: none;
  padding: 8px 0.8em;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;
  transition: all 300ms ease-in;

  &:hover,
  &:focus {
    background-color: #b3d3ea;
    color: #2c5777;
  }

  &:focus {
    box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);
  }

  &:active {
    background-color: #a0c7e4;
    box-shadow: none;
    color: #2c5777;
  }
`;


const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  background-color: #98c1d9;
  border-bottom: 1px solid 98c1d8;
  height: 60px;
  padding: 20px;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  box-shadow: rgba(238, 108, 77, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;
