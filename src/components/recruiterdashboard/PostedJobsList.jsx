import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { viewAllJobPostAction } from "../../store/slices/recruiter/recruiterViewAllPostedJobsSlice";
// import { postedJobs } from "../../sampledata";
const Container = styled.div`
  display: grid;
  padding-top:30px;
  grid-auto-columns:auto;
  grid-auto-rows:auto;
  @media screen and (min-width:700px){
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    grid-auto-columns:none;
    grid-auto-rows:none;
    margin:auto;

    
  }
`;

const JobCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-around;
  align-items: center;
  border-radius:10px;
  padding: 16px;
  margin: 16px;
  padding-top:20px;
  padding-bottom:20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

`;

const JobTitle = styled.h3`
  margin: 0;
`;

const JobDetails = styled.div`
  margin-top: 8px;
`;

const Button = styled.button`
  margin-top: 8px;
  width:150px;
  height:40px;
  border-radius:10px;
  background:#98c1d9;
  border:none;
  color:rgba(0,10,20,0.8);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  &:hover{
    background:#58c1cc;
    color:white;
  }
  &:active{
    background:#2cbc63;
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;  


  }
`;
const ButtonContainer = styled.div`
display:flex;
flex-direction:column;

`;


const PostedJobsList = () => {
  const dispatch = useDispatch();
  const [postedjobs, setPostedjobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hover, setHover] = useState(false)

  const getPostedJobs = async () => {
    setLoading(true);
    const res = await dispatch(viewAllJobPostAction());
    setLoading(false);
    console.dir(res?.payload)
    if (Array.isArray(res.payload))
      setPostedjobs(res.payload)

  }
  useEffect(() => {
    getPostedJobs()
  }, [dispatch]);



  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      {Array.isArray(postedjobs) && postedjobs.map((job) => (
        <JobCard key={job.id}>
          <div>
            <JobTitle>{job.jobTitle}</JobTitle>
            <JobDetails>
              <p>{job.description}</p>
              <p>Location: {job.location}</p>
              <p>Salary: {job.salary}</p>
            </JobDetails>
          </div>
          <ButtonContainer>
            <Link to={`edit/${job.id}`} target="_blank">
              <Button>VIEW DETAILS</Button>
            </Link>
            <Link to={`edit/${job.id}`} target="_blank">
              <Button style={!hover ? { background: "red" } : { background: "rgba(200,0,0,0.8)" }} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>DELETE</Button>
            </Link>
          </ButtonContainer>
        </JobCard>
      ))
      }
    </Container >
  );
};

export default PostedJobsList;
