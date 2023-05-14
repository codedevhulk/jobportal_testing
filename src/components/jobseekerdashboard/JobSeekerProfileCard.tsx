import { Link } from "react-router-dom";
import Header from "../../ui/Header";
import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
`;

const JobSeekerProfileCard = () => {
  return (
    <div>
      <ProfileContainer>
        <p>Job hello</p>
        <Link to="/jobseeker/profile/update">edit</Link>
      </ProfileContainer>
    </div>
  );
};

export default JobSeekerProfileCard;
