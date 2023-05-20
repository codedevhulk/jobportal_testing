import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getJobseekerProfileAction, updateJobseekerProfileAction } from "../../store/slices/jobseekerslice"
import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
`;
/*
"id": 40,
    "username": "abhiiii",
    "email": "abhi123456@gmail.com",
    "roles": [
        "ROLE_USER"
    ]
}

*/
const JobSeekerProfileCard = () => {
  const dispatch = useDispatch();
  const { jobseeker } = useSelector(
    (state) => state.jobseekerApp
  );

  const getProfile = async () => {
    await dispatch(getJobseekerProfileAction())



  }

  useEffect(() => {
    getProfile();
  }, [])

  return (
    <div>
      <ProfileContainer>
        <div>
          <div>
            <ul>
              {jobseeker && console.log(jobseeker)}
              {jobseeker && Array.isArray(Object.values(jobseeker)) ? Object.values(jobseeker).map(seeker => <li>{seeker}</li>) : null}
            </ul>
          </div>
        </div>
        <Link to="/jobseeker/profile/update">edit</Link>
      </ProfileContainer>
    </div>
  );
};

export default JobSeekerProfileCard;
