import { Link } from "react-router-dom";
import styled from "styled-components";

interface JobCardProps {
  job: {
    id: string;
    jobTitle: string;
    company: string;
    salary: number;
    location: string;
    onApply: () => void;
  };
}

const Card = styled.div`
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: all 500ms;
  &:hover {
    transform: scale(1.1);
    background-color: #e0fbfc;
    // border: 1px solid #ee6c4d;
    box-shadow: rgba(238, 108, 77, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
  &:hover button {
    background-color: #ee6c4d;
  }
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
  background-color: #3d5a80;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  width: 100%;
  transition: background-color 500ms;
`;

const JobCard: React.FC<JobCardProps> = (props: JobCardProps) => {
  const { id, jobTitle, company, salary, location, onApply } = props.job;
  return (
    <Card>
      <Title>{jobTitle}</Title>
      <Company>{company}</Company>
      <Salary>{salary}$ /m</Salary>
      <Location>{location}</Location>
      <Link to={`/jobdetails/${id}`}>
        <DetailsButton onClick={onApply}>Show Details</DetailsButton>
      </Link>
    </Card>
  );
};

export default JobCard;
