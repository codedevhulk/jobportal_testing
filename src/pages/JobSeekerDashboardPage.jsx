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
  return <div><Header page="jobseeker"/></div>;
};

export default JobSeekerDashboardPage;
