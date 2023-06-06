import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { viewAllJobPostAction } from "../../store/slices/recruiter/recruiterViewAllPostedJobsSlice";
import { AnyAction } from "@reduxjs/toolkit";
// import { postedJobs } from "../../sampledata";
const Container = styled.div`
  display: grid;
  grid-auto-columns:auto;
  align-items: center;
  @media screen and (min-width:700px){
    width:70%;
    margin:auto;
    
  }
`;

const JobCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  padding: 16px;
  margin: 16px;
`;

const JobTitle = styled.h3`
  margin: 0;
`;

const JobDetails = styled.div`
  margin-top: 8px;
`;

const Button = styled.button`
  margin-top: 8px;
`;

const PostedJobsList = () => {
  const dispatch = useDispatch();
  const [postedjobs, setPostedjobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPostedJobs = async () => {
    setLoading(true);
    const res = await dispatch(viewAllJobPostAction());
    setLoading(false);
    console.dir(res?.payload)
    if (Array.isArray(res.payload))
      setPostedjobs(res.payload)

  }
  useEffect(() => {
    getPostedJobs()
  }, [dispatch]);



  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      {Array.isArray(postedjobs) && postedjobs.map((job) => (
        <JobCard key={job.id}>
          <JobTitle>{job.jobTitle}</JobTitle>
          <JobDetails>
            <p>{job.description}</p>
            <p>Location: {job.location}</p>
            <p>Salary: {job.salary}</p>
          </JobDetails>
          <Link to={`/job/${job.id}`}>
            <Button>View Details</Button>
          </Link>
        </JobCard>
      ))}
    </Container>
  );
};

export default PostedJobsList;
