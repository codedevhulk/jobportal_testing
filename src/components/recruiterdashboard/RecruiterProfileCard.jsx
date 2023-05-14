import {Link} from "react-router-dom";
import {useSelector } from "react-redux";
import styled from "styled-components";
import {recruiter_one} from "../../sampledata"

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const ProfileCard = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-gap: 1rem;
  
  align-items: center;
  padding: 20px;
  border: 1px solid gray;
  border-radius: 5px;
  box-shadow: 2px 2px 5px gray;
  width: 500px;
`;

const Label = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const Value = styled.span`
  margin-left: 10px;
`;

const EditButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: darkblue;
  }
`;

const RecruiterProfileCard = () => {
  // const { recruiter, loading, error } = useSelector((state) => state.recruiterApp);
 const  recruiter = recruiter_one;
 const loading = false;
 const error = null;

  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <ProfileWrapper>
      <ProfileCard>
        <Label>ID:</Label>
        <Value>{recruiter.id}</Value>
        <Label>First Name:</Label>
        <Value>{recruiter.firstName}</Value>
        <Label>Last Name:</Label>
        <Value>{recruiter.lastName}</Value>
        <Label>Email:</Label>
        <Value>{recruiter.email}</Value>
        <Label>Mobile Number:</Label>
        <Value>{recruiter.mobileNumber}</Value>
        <Label>Address:</Label>
        <Value>{recruiter.address}</Value>
      </ProfileCard>
      <Link to="/recruiter/profile/edit"><EditButton>Edit</EditButton></Link>
    </ProfileWrapper>
  );
};

export default RecruiterProfileCard;
