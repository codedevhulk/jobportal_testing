import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface JobCardProps {
  job: {
    title: string;
    company: string;
    salary: number;
    location: string;
    onApply: () => void;
  };
}

const Card = styled.div`
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.h3`
  margin: 0;
`;

const Company = styled.p`
  margin: 0;
  font-size: 14px;
`;

const Salary = styled.p`
  margin: 0;
  font-size: 14px;
`;

const Location = styled.p`
  margin: 0;
  font-size: 14px;
`;

const DetailsButton = styled.button`
  background-color: #0a66c2;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
`;

const JobCard: React.FC<JobCardProps> = (props: JobCardProps) => {
  const { title, company, salary, location, onApply } = props.job;
  return (
    <Card>
      <Title>{title}</Title>
      <Company>{company}</Company>
      <Salary>{salary}</Salary>
      <Location>{location}</Location>
      <Link to="/jobdetails">
        <DetailsButton onClick={onApply}>Show Details</DetailsButton>
      </Link>
    </Card>
  );
};

export default JobCard;
