import { useEffect, useState } from "react";
import { getApplicantById } from "../../service/recruiterService";
import styled from "styled-components";
import { rejectFn, approveFn } from "./ApplicantsList";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
const Card = {
  display: "flex",
  border: "1px solid black",
  boxSizing: "border-box",
  margin: "0",
  padding: "10px",
  paddingBottom: "0",
  marginBottom: "0",
  borderRadius: "10px",
  height: "100%",
  paddingLeft: "10px",
  alignItems: "center",
  overflowX: "scroll",
};
const ApplicantView = () => {
  const [applicant, setApplicant] = useState();
  const [loading, setLoading] = useState(true);
  const mapFields = {
    firstName: "First Name",
    lastName: "Last Name",
    mobileNumber: "Mobile Number",
    email: "Email",
    jobSeekerQualification: "Jobseeker Qualification",
    jobSeekerSkillSet: "Jobseeker Skills",
    jobSeekerExperience: "Jobseeker Experience",
    jobSeekerSummary: "Jobseeker Summary",
    jobSeekerAddress: "Jobseeker Location",
    jobTitle: "Job Title",
    jobDescription: "Job Description",
    location: "Job Location",
    jobType: "Job Type",
    requiredExperience: "Required Experience",
    salary: "ctc",
    requiredQualification: "Required Qualification",
    requiredskillSet: "Required Skills",
    applicationStatus: "Application Status",
  };
  const getApplicant = async () => {
    const applicant = await getApplicantById();
    console.log("applicant ", applicant);
    setApplicant(applicant);
    setLoading(false);
  };

  useEffect(() => {
    getApplicant();
  }, []);

  const fieldException = ["id", "jobSeekerId", "recruiterId", "jobId"];

  if (loading) {
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    );
  }

  return (
    <>
      {!loading && (
        <Container>
          <SubContainer>
            {typeof applicant === "object" &&
              Object.entries(applicant).map((item) => {
                if (!fieldException.includes(item[0]))
                  return (
                    <FieldContainer id={item[0]}>
                      <span>{mapFields[item[0]].toUpperCase()}</span>
                      <p style={Card}>{item[1]}</p>
                    </FieldContainer>
                  );
              })}
          </SubContainer>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              sx={{
                margin: "20px",
                background: "green",
                color: "white",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              }}
              onClick={() => {
                approveFn(applicant.id);
              }}
            >
              Approve
            </Button>
            <Button
              sx={{
                margin: "20px",
                color: "white",
                background: "red",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              }}
              onClick={() => {
                rejectFn(applicant.id);
              }}
            >
              Reject
            </Button>
          </div>
        </Container>
      )}
    </>
  );
};

export default ApplicantView;

const FieldContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 1fr;
  align-items: center;
`;
const Container = styled.div`
  margin: 30px auto;
  width: 80%;
`;
const SubContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  border-radius: 10px;
  padding: 30px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  grid-template-areas:
    "firstName lastName"
    "mobileNumber email" "jobTitle jobType" "location salary" "jobSeekerQualification requiredQualification"
    "jobSeekerSkillSet requiredskillSet"
    "jobSeekerExperience requiredExperience"
    "jobSeekerSummary jobDescription" "jobSeekerAddress applicationStatus";
  grid-template-columns: 50% 50%;
  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "firstName" "lastName"
      "mobileNumber" "email" "jobTitle" "jobType" "location" "salary" "jobSeekerQualification" "requiredQualification"
      "jobSeekerSkillSet" "requiredskillSet"
      "jobSeekerExperience" "requiredExperience"
      "jobSeekerSummary" "jobDescription" "jobSeekerAddress" "applicationStatus";
  }
  #firstName {
    grid-area: firstName;
  }
  #lastName {
    grid-area: lastName;
  }
  #mobileNumber {
    grid-area: mobileNumber;
  }
  #email {
    grid-area: email;
  }
  #jobSeekerQualification {
    grid-area: jobSeekerQualification;
  }
  #requiredQualification {
    grid-area: requiredQualification;
  }
  #jobSeekerSkillSet {
    grid-area: jobSeekerSkillSet;
  }
  #requiredskillSet {
    grid-area: requiredskillSet;
  }
  #jobSeekerExperience {
    grid-area: jobSeekerExperience;
  }
  #requiredExperience {
    grid-area: requiredExperience;
  }
  #jobSeekerAddress {
    grid-area: jobSeekerAddress;
  }
  #jobTitle {
    grid-area: jobTitle;
  }
  #salary {
    grid-area: salary;
  }
  #jobType {
    grid-area: jobType;
  }
  #jobDescription {
    grid-area: jobDescription;
  }
  #location {
    grid-area: location;
  }
  #applicationStatus {
    grid-area: applicationStatus;
  }
`;

// #firstName,#lastName,#mobileNumber,#email ,#jobSeekerQualification,
// #jobSeekerSkillSet,#jobSeekerExperience,#jobSeekerSummary,
// #jobSeekerAddress,#jobTitle
// ,#jobDescription,#location,#jobType,
// #requiredExperience,#salary,
// #requiredQualification,#requiredskillSet,
// #applicationStatus
