import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { viewAllJobPostAction } from "../..store/slices/viewAllPostedJobsSlice";
import { postedJobs } from "../../sampledata";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  //   const { data: jobPosts, loading } = useSelector(
  //     (state) => state.viewAllPostedJobs
  //   );
  const jobPosts = postedJobs;
  const loading = false;
  //   const recruiter_id = 1;
  //   useEffect(() => {
  //     dispatch(viewAllJobPostAction(recruiter_id));
  //   }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      {jobPosts.map((job) => (
        <JobCard key={job.id}>
          <JobTitle>{job.title}</JobTitle>
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
