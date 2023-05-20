import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { applyToJobAction } from "../../store/slices/jobserviceslice";
import { getJobseekerProfileAction } from "../../store/slices/jobseekerslice";
// interface IJobInfoProps {
//   jobInfo: {
//     id: string;
//     jobTitle: string;
//     companyName: string;
//     location: string;
//     jobType: string;
//     jobCategory: string;
//     jobDescription: string;
//     salary: string;
//     applicationLink: string;
//   };
// }

const JobDetailsStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 1rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  margin: 10px;
  max-width: 60vw;
  box-sizing: border-box;
  .job-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .details-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
    border: 1px solid red;
    padding: 10px;
    .label {
      font-weight: bold;
      margin-right: 0.5rem;
    }
  }

  .job-description {
    margin-top: 1rem;

    p {
      margin: 0;
    }
  }
`;
const Button = styled.button``;

const JobDetailsCard = () => {
  const dispatch = useDispatch();
  const [appliedResponseMessage, setAppliedResponseMessage] = useState(null);
  const { id: jobid } = useParams();
  console.log(jobid);

  const jobInfo = useSelector((state) =>
    state.jobserviceApp.jobs.filter((job) => job.id === Number(jobid))
  )[0] || {
    id: "",
    jobTitle: " ",
    jobDescription: "",
    location: "",
    jobType: "",
    experience: "",
    salary: "",
    qualification: "",
    vacancies: "",
    recruiterId: "",
    skillSet: "",
    companyName: "",
  };
  console.log(jobInfo);
  const navigate = useNavigate();
  const [jtoken, setJtoken] = useState(localStorage.getItem("jtoken"));
  const back = () => {
    navigate(-1);
  };

  const onApply = async () => {
    try {
      const jobseekerId = localStorage.getItem("jobseekerId");
      // const userdetailsRes = await dispatch(getJobseekerProfileAction());
      // console.log("userdetailsRes", userdetailsRes)
      // if (userdetailsRes?.firstName === "" && userdetailsRes?.qualification === "") {
      //   setAppliedResponseMessage("Update your profile first");
      //   setTimeout(() => {
      //     setAppliedResponseMessage(null)
      //   }, 3000)
      //   return;
      // }
      const response = await dispatch(applyToJobAction({ jobSeekerId: jobseekerId, jobId: jobid }));
      // console.log("applytoaction", response)
      setAppliedResponseMessage(response.payload.error)
      setTimeout(() => {
        setAppliedResponseMessage(null);
      }, 3000);
    } catch (error) {
      setAppliedResponseMessage("some error");
      setTimeout(() => {
        setAppliedResponseMessage(null);
      }, 3000);
    }
  };

  useEffect(() => {
    console.log(jobid);
    console.log(jobInfo);
    if (jtoken) {
      navigate("/jobseeker");
      navigate(`jobdetails/${jobid}`);
    } else {
      navigate("/jobseeker/signin");
    }

  }, []);

  const {
    jobTitle = "",
    jobDescription = "",
    location = "",
    jobType = "",
    experience = "",
    salary = "",
    qualifation = "",
    vacancies = "",
    recruiterId = "",
    skillset = "",
    companyName = "",
  } = jobInfo;

  return (
    <div>
      <div>
        <button onClick={back}>Back</button>
      </div>
      <JobDetailsStyle>
        <div className="job-title">{jobTitle}</div>
        <div className="details-row">
          <span className="label">Company Name:</span>
          <span>{companyName}</span>
        </div>
        <div className="details-row">
          <span className="label">Location:</span>
          <span>{location}</span>
        </div>
        <div className="details-row">
          <span className="label">Job Type:</span>
          <span>{jobType}</span>
        </div>
        <div className="details-row">
          <span className="label">Salary:</span>
          <span>{salary}</span>
        </div>

        <div className="job-description">
          <h6>Job Description</h6>
          <p>{jobDescription}</p>
        </div>
        <Button type="button" onClick={onApply}>
          Apply
        </Button>
        {appliedResponseMessage && <p>{appliedResponseMessage}</p>}
      </JobDetailsStyle>
    </div>
  );
};

export default JobDetailsCard;
