import styled from "styled-components";
import JobCard from "../jobservicecomponents/JobCard"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { jobApplicatonsOfJobseekerAction } from "../../store/slices/jobseekerslice";

const AppliedJobsListContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin:auto;
`;
const Title = styled.p`
    font-weight:600;
    font-size:24px;
    text-align:center;
`;
const AppliedJobsList = () => {
  const dispatch = useDispatch();
  const { applications } = useSelector(state => state.jobseekerApp)
  const dispatchfc = async () => {
    await dispatch(jobApplicatonsOfJobseekerAction())
  }
  const onApply = () => ""
  useEffect(() => {
    dispatchfc();

  }, [])
  return (<>
    <Title> Applied Jobs List</Title>
    <AppliedJobsListContainer>
      {applications.map(application => <JobCard key={application.id} job={{ ...application, onApply }} />)}
    </AppliedJobsListContainer>
  </>)


};

export default AppliedJobsList;
