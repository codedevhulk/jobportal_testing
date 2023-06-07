import { useSelector } from "react-redux";
import SearchBarComponent from "../SearchBar";
import JobsContainer from "../jobservicecomponents/JobsContainer";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SearchJobsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
`;

const JobSeekerSearchJobs = () => {
  const { firstName, lastName } = useSelector(
    (state) => state.jobseekerApp.jobseeker
  );
  return (
    <>
      {!firstName && !lastName && (
        <div>
          <p>Update Your Profile!</p>
          <Link to="profile/update">UPDATE</Link>
        </div>
      )}
      {firstName && lastName && (
        <SearchJobsContainer>
          <SearchBarComponent />
          <JobsContainer />
        </SearchJobsContainer>
      )}
    </>
  );
};

export default JobSeekerSearchJobs;
