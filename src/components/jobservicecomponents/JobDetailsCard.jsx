import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "@mui/material";
import { applyToJobAction } from "../../store/slices/jobserviceslice";
import { getJobseekerProfileAction } from "../../store/slices/jobseekerslice";

const JobDetailsStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  margin: 10px;
  margin-top:100px;
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
    padding-bottom: 168px;
    border-bottom:2px solid rgba(10,10,10,0.1);
    padding: 10px;
    .label {
      font-weight: bold;
      margin-right: 0.5rem;
    }
    
  }
  .enlarge{
    height:100px;
    
  }
  .enlarge span{
    line-break:auto;
  }

 
  }
`;

const JobTitlee = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const Label = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  textalign: start;
`;

const Button = styled.button`
  display: block;
  width: 200px;
  height: 40px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  background-color: #00a0ff;
  color: #fff;
  cursor: pointer;
`;

const BackButton = styled.button`
position:absolute; 
top-left-corner; 
margin-left:20px;
width:80px; 
height:40px; 
border:none; 
border-radius:5px; 
background-color:#ee6c4d; 
color:#333
`;
const FieldStyle = {
  boxSizing: "border-box",
  margin: "1px",
  padding: "2px",
  background: "inherit",

  textAlign: "left",
  boxShadow: "none",
  fontWeight: "600",
  fontFamily: "sans-serif",
};

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

      const response = await dispatch(
        applyToJobAction({ jobSeekerId: jobseekerId, jobId: jobid })
      );
      console.log("response after apply: ", response);
      if (!response.payload.error) {
        setAppliedResponseMessage("Job Applied Successfully");
      } else {
        setAppliedResponseMessage(response.payload.error);
      }

      setTimeout(() => {
        setAppliedResponseMessage(null);
      }, 30000);
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
    <JobDetailsStyle>
      <JobTitlee>{jobTitle}</JobTitlee>

      <div className="details-row" style={{ ...FieldStyle }}>
        <Label className="label">Company Name:</Label>
        <span style={{ marginLeft: "40px" }}>{companyName}</span>
      </div>
      <div className="details-row" style={{ ...FieldStyle }}>
        <Label className="label">Location:</Label>
        <span style={{ marginLeft: "40px" }}>{location}</span>
      </div>
      <div className="details-row" style={{ ...FieldStyle }}>
        <Label className="label">Job Type:</Label>
        <span style={{ marginLeft: "40px" }}>{jobType}</span>
      </div>
      <div className="details-row" style={{ ...FieldStyle }}>
        <Label className="label">Salary:</Label>
        <span style={{ marginLeft: "40px" }}>{salary}</span>
      </div>

      <div className="details-row enlarge" style={{ ...FieldStyle }}>
        <Label className="label">Job Description:</Label>
        <span
          style={{ marginLeft: "40px", overflow: "auto" }}
          className="enlarge"
        >
          {jobDescription}
        </span>
      </div>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Button type="button" onClick={onApply}>
          Apply
        </Button>
        <Button
          onClick={back}
          style={{ background: "#ee6c4d", marginLeft: "10px" }}
        >
          Back
        </Button>
      </div>
      {appliedResponseMessage && (
        <p style={{ color: "black", margin: "auto", fontWeight: "bold" }}>
          {appliedResponseMessage}
        </p>
      )}
    </JobDetailsStyle>
  );
};

export default JobDetailsCard;
