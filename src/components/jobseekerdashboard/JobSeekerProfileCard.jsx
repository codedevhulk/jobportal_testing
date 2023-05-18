import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import Header from "../../ui/Header";
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
  const { jobseeker } = useSelector(state => state.jobseekerApp)
  console.log(jobseeker)
  return (
    <div>
      <ProfileContainer>
        <div>
          <div>
            <div>
              { /* <p>username : {username}</p> */}
              { /*<p>email : {email}</p> */}
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <Link to="/jobseeker/profile/update">edit</Link>
      </ProfileContainer>
    </div>
  );
};

export default JobSeekerProfileCard;
