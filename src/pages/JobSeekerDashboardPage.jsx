// JobSeekerProfileCard
// AppliedJobsList
// SavedJobsList
// JobSearchHistory
// RecommendedJobsList
//JobSearchBar
//

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../ui/Header'
import JobsContainer from "../components/jobservicecomponents/JobsContainer";
import SearchBarComponent from "../components/SearchBar";

const JobSeekerDashboardPage = () => {
  const navigate = useNavigate();
  const [token, setJtoken] = useState(null);
  const jtoken = localStorage.getItem("jtoken");

  useEffect(() => {
    setJtoken(jtoken);
    if (!jtoken) {
      navigate("/jobseeker/signin");
    }
  }, [jtoken]);
  return <div><Header page="jobseeker"/>
  <SearchBarComponent/>
  <JobsContainer/>
  </div>;
};

export default JobSeekerDashboardPage;
