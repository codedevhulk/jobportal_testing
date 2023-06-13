import { useSelector } from "react-redux";
import SearchBarComponent from "../SearchBar";
import JobsContainer from "../jobservicecomponents/JobsContainer";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const SearchJobsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
`;

const JobSeekerSearchJobs = () => {
  const navigate = useNavigate();
  const { firstName, lastName } = useSelector(
    (state) => state.jobseekerApp.jobseeker
  );
  if (!firstName && !lastName) {
    navigate("/jobseeker/profile");
  }

  return (
    <>
      {
        <SearchJobsContainer>
          <SearchBarComponent />
          <JobsContainer />
        </SearchJobsContainer>
      }
    </>
  );
};

export default JobSeekerSearchJobs;
