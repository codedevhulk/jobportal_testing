import SearchBarComponent from "../SearchBar"
import JobsContainer from "../jobservicecomponents/JobsContainer";
import styled from "styled-components";

const SearchJobsContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;

const JobSeekerSearchJobs = () => {
    return (
        <SearchJobsContainer>
            <SearchBarComponent />
            <JobsContainer />
        </SearchJobsContainer>
    )
}

export default JobSeekerSearchJobs