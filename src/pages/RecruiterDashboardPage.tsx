// EmployerProfileCard
// PostedJobsList
// ApplicantsList
// ShortlistedCandidatesList
// RejectedCandidatesList

import { useEffect } from "react";
import Header from "../ui/Header";
import { useNavigate } from "react-router-dom";

const RecruiterDashboardPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("rtoken") === null) {
      navigate("/recruiter/signin");
    }
  }, []);
  return (
    <div>
      <Header page="employer" />
    </div>
  );
};

export default RecruiterDashboardPage;
