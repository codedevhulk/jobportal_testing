import { useEffect, useState } from "react";
import styled from "styled-components";
import { jobApplicatonsOfJobseeker } from "../../service/jobSeekerService";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card } from "@mui/material";

const AppliedJobDetailsCardContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  align-items: center;
  padding: 5%;
`;
const AppliedJobDetailsCard = styled.div`
  display: flex;
  width: 60%;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(200, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;

const Field = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const AppliedJobDetails = () => {
  const [applicationDetails, setApplicationDetails] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const jobApplicationByApplicationId = async () => {
    const jobApplications = await jobApplicatonsOfJobseeker();
    if(jobApplications.errorMessage){
      return;
    }
    const jobApplicationByAppId = jobApplications.filter(
      (application) => application.id == id
    )[0];
    setApplicationDetails(jobApplicationByAppId);
  };
  useEffect(() => {
    jobApplicationByApplicationId();
  }, []);
  return (
    <AppliedJobDetailsCardContainer>
      <AppliedJobDetailsCard>
        <p style={{ textAlign: "center" }}>Applied Job Detail</p>
        <ul
          style={{ listStyleType: "none", margin: 0, padding: 0, width: "90%" }}
        >
          {console.log(applicationDetails)}

          {applicationDetails &&
            Object.entries(applicationDetails).map((item) => {
              return (
                <li style={{ boxSizing: "border-box", width: "100%" }}>
                  {item[1] != null && !item[0].toLowerCase().includes("id") ? (
                    <Field>
                      <p
                        style={{
                          padding: "5px",
                          width: "50%",
                          letterSpacing: "1px",
                          textTransform: "uppercase",
                        }}
                      >
                        {item[0]}
                      </p>{" "}
                      <Card
                        sx={{
                          padding: "5px",
                          margin: "auto",
                          textAlign: "start",
                          width: "50%",
                          overflow: "scroll",
                        }}
                      >
                        {" "}
                        {item[1]}
                      </Card>{" "}
                    </Field>
                  ) : null}
                </li>
              );
            })}
        </ul>
        <Button onClick={() => navigate(-1)} style={{ margin: "20px" }}>
          BACK
        </Button>
      </AppliedJobDetailsCard>
    </AppliedJobDetailsCardContainer>
  );
};

export default AppliedJobDetails;
