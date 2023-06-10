// JobSeekerProfileCard
// AppliedJobsList
// SavedJobsList
// JobSearchHistory
// RecommendedJobsList
//JobSearchBar
//

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from '../ui/Header'
import { Outlet } from "react-router-dom";


const JobSeekerContainer = styled.div`
        display:flex;
        justify-content:center;
        flex-direction:column;
        align-items:center;
        width:100%;
        flex-wrap:wrap;
`;

const JobSeekerDashboardPage = () => {
  const navigate = useNavigate();
  const [, setJtoken] = useState(null);
  const jtoken = localStorage.getItem("jtoken");


  useEffect(() => {
    setJtoken(jtoken);
    if (!jtoken) {
      navigate("/jobseeker/signin");
    } else {

    }
  }, [navigate,jtoken]);
  return <div >
    <Header page="jobseeker" />
    <JobSeekerContainer>
      <Outlet />
    </JobSeekerContainer>
  </div>;
};

export default JobSeekerDashboardPage;
