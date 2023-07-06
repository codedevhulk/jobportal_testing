import { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { deleteJobById } from "../../service/recruiterService";
import { viewAllJobPostAction } from "../../store/slices/recruiter/recruiterViewAllPostedJobsSlice";
const Container = styled.div`
  display: flex;
  padding-top: 30px;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (min-width: 700px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

    margin: auto;
  }
`;

const JobCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  padding: 16px;
  margin: 16px;
  padding-top: 20px;
  padding-bottom: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

const JobTitle = styled.h3`
  margin: 0;
`;

const JobDetails = styled.div`
  margin-top: 8px;
`;

const Button = styled.button`
  margin-top: 8px;
  width: 150px;
  height: 40px;
  border-radius: 10px;
  background: #98c1d9;
  border: none;
  color: rgba(0, 10, 20, 0.8);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  &:hover {
    background: #58c1cc;
    color: white;
  }
  &:active {
    background: #2cbc63;
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
      rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostedJobsList = () => {
  const dispatch = useDispatch();
  const [postedjobs, setPostedjobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hover, setHover] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);

  const getPostedJobs = async () => {
    setLoading(true);
    const res = await dispatch(viewAllJobPostAction());
    setLoading(false);
    console.log(res);
    console.dir("response jobposts : ", res?.payload);

    if (Array.isArray(res.payload) && res.payload.length > 0) {
      setPostedjobs([...res.payload]);
    } else if (Array.isArray(res.payload) && res.payload.length === 0) {
      setPostedjobs([...res.payload]);
    }
  };
  const getPostedJobss = useCallback(getPostedJobs, [dispatch]);

  const deleteAJob = async (id) => {
    await deleteJobById(id);
    setResponseMessage("Deleted Job with JobId ", id);
    getPostedJobs();
    setTimeout(() => {
      setResponseMessage(null);
    }, []);
  };
  useEffect(() => {
    getPostedJobss();
  }, [getPostedJobss]);
  if (loading) {
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    );
  }
  //delay this

  if (Array.isArray(postedjobs) && postedjobs.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          fontSize: "32px",
          fontWeight: "600",
          justifyContent: "center",
        }}
      >
        <p>You Have Not Posted Any Job Yet</p>
      </div>
    );
  }

  return (
    <Container>
      {responseMessage && <p>{responseMessage}</p>}
      {Array.isArray(postedjobs) &&
        postedjobs.map((job) => (
          <JobCard key={job.id}>
            <div>
              <JobTitle style={{ textTransform: "capitalize" }}>
                {job.jobTitle}
              </JobTitle>
              <JobDetails>
                <p>{job.description}</p>
                <p>Location: {job.location}</p>
                <p>Salary: {job.salary}</p>
              </JobDetails>
            </div>
            <ButtonContainer style={{ marginLeft: "20px" }}>
              <Link to={`edit/${job.id}`} target="_blank">
                <Button>VIEW DETAILS</Button>
              </Link>
              <Link to={`/recruiter/postedjobs`}>
                <Button
                  style={
                    !hover
                      ? { background: "red" }
                      : { background: "rgba(200,0,0,0.8)" }
                  }
                  onMouseOver={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  onClick={() => {
                    deleteAJob(job.id);
                  }}
                >
                  DELETE
                </Button>
              </Link>
            </ButtonContainer>
          </JobCard>
        ))}
    </Container>
  );
};

export default PostedJobsList;
