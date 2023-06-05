import styled from "styled-components";
import AppliedJobCard from "../jobseekerdashboard/AppliedJobCard"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { jobApplicatonsOfJobseekerApi } from "../../service/constants";
import { jobApplicatonsOfJobseeker } from "../../service/jobSeekerService"

const AppliedJobsListContainer = styled.div`
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    align-items:center;
    grid-gap:20px 20px;
    margin:auto;
    width:80%;
    padding:2%;
    box-sizing:border-box;

`;
const Title = styled.p`
    font-weight:600;
    font-size:24px;
    text-align:center;
`;
const AppliedJobsList = () => {

  const [applications, setApplications] = useState(null);

  const jobApplications = async () => {
    const res = await jobApplicatonsOfJobseeker();
    setApplications(res)

  }

  useEffect(() => {
    jobApplications()

  }, [])
  return (<>
    <Title> Applied Jobs List</Title>
    <AppliedJobsListContainer>
      {applications && applications?.map(application => <AppliedJobCard key={application.id} job={application} />)}
    </AppliedJobsListContainer>
  </>)


};

export default AppliedJobsList;
