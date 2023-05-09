import React from "react";
import styled from "styled-components";
import withAuth from "./authentication/withAuth";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

interface IJobInfoProps {
  jobInfo: {
    id: string;
    jobTitle: string;
    companyName: string;
    location: string;
    jobType: string;
    jobCategory: string;
    jobDescription: string;
    salary: string;
    applicationLink: string;
  };
}

const JobDetailsStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 1rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  margin: 10px;
  max-width: 60vw;

  .job-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .details-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
    border: 1px solid red;
    padding: 10px;
    .label {
      font-weight: bold;
      margin-right: 0.5rem;
    }
  }

  .job-description {
    margin-top: 1rem;

    p {
      margin: 0;
    }
  }
`;

const JobDetailsCard: React.FC = () => {
  const { id: jobid } = useParams();
  // const jobInfo = useSelector((state) =>
  //   state?.jobs?.find((job) => job.id === jobid)
  // );
  const jobInfo = {
    id: 1,
    jobTitle: "Full Stack",
    companyName: "Persistent",
    location: "hyderabad",
    jobType: "full time",
    jobDescription: "job description",
    salary: "$6789",
  };
  const {
    id,
    jobTitle,
    companyName,
    location,
    jobType,
    jobDescription,
    salary,
  } = jobInfo;

  return (
    <JobDetailsStyle>
      <div className="job-title">{jobTitle}</div>
      <div className="details-row">
        <span className="label">Company Name:</span>
        <span>{companyName}</span>
      </div>
      <div className="details-row">
        <span className="label">Location:</span>
        <span>{location}</span>
      </div>
      <div className="details-row">
        <span className="label">Job Type:</span>
        <span>{jobType}</span>
      </div>
      <div className="details-row">
        <span className="label">Salary:</span>
        <span>{salary}</span>
      </div>

      <div className="job-description">
        <h6>Job Description</h6>
        <p>{jobDescription}</p>
      </div>
    </JobDetailsStyle>
  );
};

export default withAuth(JobDetailsCard);
