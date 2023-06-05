import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Button } from "@mui/material";
import { getRecruiterProfileAction, updateRecruiterProfile } from "../../store/slices/recruiter/recruiterslice"
import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  touch-action: manipulation;
  align-items: center;
  color: black;
  transition:all 300ms;
  box-sizing:border-box;
  margin:0;
  padding:0;
  &:hover{
    transform:scale(1.03)
  }
  @media screen and (max-width:700px){
    &:hover{
      transform:scale(1.03) translateY(20px)
    }

  }
`;



const ProfileItemsContainer = styled.div`
    display:grid;
    grid-template-columns:40% 60%;
    width:80vw;
    box-sizing:border-box;
    margin-top:50px;
    border-radius:20px;
    padding:30px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(200, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;    @media screen and (max-width:700px){
      grid-template-rows:20% 80%;
      grid-template-columns:none;
      width:90vw;
      box-sizing:border-box;
      grid-row-gap:10%;
    }


`;


const ProfileEditContainer = styled.div`
    display:grid;
    grid-template-columns:1fr;
    grid-template-rows:1fr 1fr;
    grid-row-gap:35%;
    box-sizing:border-box;
    @media screen and (max-width:700px){
      grid-row-gap:15%;
      
    }

   


`;
const ProfilePhoto = styled.div`
  background-color:pink;
  vertical-align: middle;
  width: 200px;
  height:200px;
  border-radius: 50%;
  background-image : url(${props => props.imgUrl});
  background-size:cover;
  margin:auto;
  box-sizing:border-box;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position:relative;
  top:20px;
  @media screen and (max-width:700px){
    width:120px;
    height:120px;

  }


`;

const FieldItemsContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`;
const FieldItems = styled.ul`


background-color:#98c1d9;
padding:10%;
box-sizing:border-box;
width:85%;
border-radius:25px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
text-align:center;

`;

const FieldItem = styled.li`
display:grid;
grid-template-columns:40% 60%;
grid-template-rows:1fr;
grid-column-gap:5%;
box-sizing:border-box;
margin:auto;


`;


const FieldStyle = {
  boxSizing: "border-box",
  margin: "1px",
  padding: "2px",
  background: "inherit",
  width: "100%",
  textAlign: "left",
  boxShadow: "none",
  fontWeight: "600",
  fontFamily: "sans-serif"


}


const RecruiterProfileCard = () => {
  const dispatch = useDispatch();
  const { recruiter } = useSelector(
    (state) => state.recruiterApp

  );

  const getProfile = async () => {
    await dispatch(getRecruiterProfileAction());
  }

  useEffect(() => {
    getProfile();
  }, [])

  return (

    <ProfileContainer>

      <ProfileItemsContainer>
        <ProfileEditContainer>
          <ProfilePhoto imgUrl={"url"} />
          <Button sx={{ marginLeft: 0, paddingLeft: 0, "&:hover": { background: "none", color: "red" } }}> <Link to="/recruiter/profile/edit" style={{ color: "inherit", textDecoration: "none" }}>Edit Profile</Link></Button>
        </ProfileEditContainer>
        <FieldItemsContainer>
          {recruiter && <FieldItems style={{ listStyleType: "none", height: "360px" }}>

            {
              Object.entries(recruiter).map(entry => {
                const label = entry[0]
                const value = entry[1]
                return label !== "recruiterId" && label !== "password" ? <FieldItem><Card style={{ ...FieldStyle, textTransform: "uppercase", lineSpacing: "1px" }} >{label}</Card>  <Card style={{ ...FieldStyle, background: "rgba(255,255,255,0.6)", textTransform: "capitalize", overflow: "scroll", minHeight: "30px" }}>{value}</Card> </FieldItem> : null;
              })}

          </FieldItems>

          }
        </FieldItemsContainer>



      </ProfileItemsContainer>


    </ProfileContainer >

  );
};

export default RecruiterProfileCard;
