import React from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  background:"#e0fbfc"
  animation: ${fadeIn} 3s ease-in-out;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Description = styled.p`
  text-align: center;

  font-size: 24px;
  line-height: 1.5;
  margin-bottom: 40px;
  @media screen and (max-size: 700px) {
    font-size: 20px;
  }
`;

const Features = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Feature = styled.li`
  flex: 1 1 300px;
  margin: 0 20px 20px 0;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1s ease-in-out;

  &:last-child {
    margin-right: 0;
  }
`;

const AboutUs: React.FC = () => {
  return (
    <Container>
      <Title>About Us</Title>
      <Description>
        Welcome to our Job Portal! We are excited to have you here and help you
        find your dream job.
      </Description>
      <Features>
        <Feature>
          <h2>Advanced Search Filters</h2>
          <p>
            With our advanced search filters, you can narrow down your job
            search by location, industry, job type, and more. This makes it easy
            to find the jobs that are most relevant to you.
          </p>
        </Feature>
        <Feature>
          <h2>Personalized Recommendations</h2>
          <p>
            Based on your search history and profile information, our platform
            will recommend jobs that match your skills and interests. This helps
            you discover opportunities you might have otherwise missed.
          </p>
        </Feature>
        <Feature>
          <h2>Easy Application Process</h2>
          <p>
            Applying for jobs on our platform is quick and easy. You can upload
            your resume, cover letter, and other relevant documents directly to
            our website, and track the status of your applications in real-time.
          </p>
        </Feature>
        <Feature>
          <h2>Engaging Animations</h2>
          <p>
            Our website is designed with beautiful animations and transitions
            that make the user experience engaging and delightful. From hover
            effects to page transitions, our animations create a seamless and
            immersive experience.
          </p>
        </Feature>
        <Feature>
          <h2>User-Friendly Interface</h2>
          <p>
            Our platform is easy to navigate, with a clean and intuitive
            interface that makes it easy to find what you're looking for.
            Whether you're a job seeker or an employer, you'll find everything
            you need on our platform.
          </p>
        </Feature>
      </Features>
    </Container>
  );
};

export default AboutUs;
