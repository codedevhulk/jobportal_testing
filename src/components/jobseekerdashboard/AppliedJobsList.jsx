import styled from "styled-components";
import AppliedJobCard from "../jobseekerdashboard/AppliedJobCard";
import { useEffect, useState } from "react";
import { jobApplicatonsOfJobseeker } from "../../service/jobSeekerService";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const AppliedJobsListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  align-items: center;
  grid-gap: 20px 20px;
  margin: auto;
  width: 80%;
  padding: 2%;
  box-sizing: border-box;
`;
const Title = styled.p`
  font-weight: 600;
  font-size: 24px;
  text-align: center;
`;
const AppliedJobsList = () => {
  const [applications, setApplications] = useState(null);

  const jobApplications = async () => {
    const res = await jobApplicatonsOfJobseeker();
    if(res.errorMessage){
      setApplications([])
    }
    if (Array.isArray(res)) setApplications(res);
   
  };

 

  useEffect(() => {
    jobApplications();
  }, []);

  if (!Array.isArray(applications)) {
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    );
  }

  if (Array.isArray(applications) && applications.length === 0) {
    return (
      <div style={{ display: "flex", fontSize: "32px" }}>
        <p>You Have not applied to any job yet</p>
      </div>
    );
  }
  return (
    <>
      <Title> Applied Jobs List</Title>
      <AppliedJobsListContainer>
        {Array.isArray(applications) &&
          applications?.map((application) => (
            <AppliedJobCard key={application.id} job={application} />
          ))}
      </AppliedJobsListContainer>
    </>
  );
};

export default AppliedJobsList;
