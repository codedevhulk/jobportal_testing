import React from "react";
import styled from "styled-components";

const AdContainer = styled.div`
  width: 100vw;
  background-color: #3d5a80;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding-top: 50px;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: #e0fbfc;
  margin-bottom: 20px;
  text-align: center;
`;

const Subtitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: #98c1d9;
  margin-bottom: 20px;
  text-align: center;
`;

const TextContent = styled.div`
  height: 100px;
  width: 80%;
  color: #293241;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 20px;
`;

const CompanyLogosContainer = styled.div`
  height: 50px;
  width: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  perspective: 1000px;
  box-sizing: border-box;
  @media screen and (max-width: 500px) {
    margin-top: 120px;
    margin-bottom: 100px;
  }
  @media screen and (min-width: 500px) and (max-width: 900px) {
    margin-top: 100px;
    margin-bottom: 110px;
  }
  @media screen and (min-width: 900px) {
    margin-top: 40px;
    margin-bottom: 100px;
  }
`;

const CompanyLogo = styled.img`
  margin: 20px;
  animation: spin 5s infinite linear;
  box-sizing: border-box;
  @media screen and (max-width: 500px) {
    margin: 10px;
  }

  @keyframes spin {
    0% {
      transform: rotateZ(0);
    }
    25% {
      transform: rotateZ(2deg);
    }
    50% {
      transform: rotateZ(0);
    }
    75% {
      transform: rotateZ(-2deg);
    }
    100% {
      transform: rotateZ(0);
    }
  }
`;

const AdContent: React.FC = () => {
  const companyLogos = [
    { src: "https://files.codingninjas.in/google-9542.svg", alt: "google" },
    {
      src: "https://files.codingninjas.in/microsoft-9541.svg",
      alt: "microsoft",
    },
    { src: "https://files.codingninjas.in/adobe-9540.svg", alt: "Adobe" },
    { src: "https://files.codingninjas.in/samsung-9534.svg", alt: "Samsung" },
  ];

  return (
    <AdContainer>
      <Title>
        More than 50k recruiters from leading tech companies are hiring
      </Title>
      <Subtitle>
        Join the ranks of top talent and land your dream job today!
      </Subtitle>
      <TextContent>
        Our job portal connects you with the best tech companies in the
        industry, offering positions in software development, data science, AI,
        and more. With our personalized job matching algorithm, you can find the
        perfect job for you in no time. Sign up today and start your journey to
        success!
      </TextContent>
      <CompanyLogosContainer>
        {companyLogos.map((logo) => (
          <CompanyLogo src={logo.src} alt={logo.alt} key={logo.alt} />
        ))}
      </CompanyLogosContainer>
    </AdContainer>
  );
};

export default AdContent;
