import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #3d5a80;
  padding: 30px 0;
  width: 100vw;
`;

const Advertisement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e0fbfc;
  border: 1px solid #98c1d9;
  border-radius: 4px;
  padding: 20px;
  max-width: 100vw;
  margin-bottom: 30px;

  & h4 {
    margin-right: 20px;
    color: #ee6c4d;
  }

  & p {
    color: #293241;
  }

  & button {
    background-color: #ee6c4d;
    color: #e0fbfc;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #98c1d9;
    }
  }
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #e0fbfc;

  & a {
    color: #e0fbfc;
    margin: 0 10px;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #98c1d9;
    }
  }
`;

const StaticFooter: React.FC = () => {
  return (
    <FooterContainer>
      <Advertisement>
        <h4>Looking for a job?</h4>
        <p>Check out our job portal and find your dream job today!</p>
        <button>Learn More</button>
      </Advertisement>
      <FooterLinks>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Contact Us</a>
      </FooterLinks>
      <p>© 2023 My Job Portal. All Rights Reserved.</p>
    </FooterContainer>
  );
};

export default StaticFooter;
