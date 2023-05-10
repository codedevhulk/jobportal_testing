import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface HeaderProps {
  page: "landing" | "jobseeker" | "employer";
}

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
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.3);
`;

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

const NavigationLink = styled.button<{ active?: boolean }>`
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

const Header: React.FC<HeaderProps> = ({ page }) => {
  return (
    <HeaderContainer>
      <Logo>JOBPORTAL</Logo>

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
            <NavigationLink>Search Jobs</NavigationLink>
            <NavigationLink>Applied Jobs</NavigationLink>
            <NavigationLink>Profile</NavigationLink>
          </>
        ) : null}
        {page === "employer" ? (
          <>
            <NavigationLink>Applicants</NavigationLink>
            <NavigationLink>Post New Job</NavigationLink>
            <NavigationLink>Recruiter Profile</NavigationLink>
          </>
        ) : null}
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
