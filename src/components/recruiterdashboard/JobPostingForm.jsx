import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { postNewJobAction } from "../../store/slices/recruiter/recruiternewjobslice";
import { setCommentRange } from "typescript";


const PostNewJob = () => {
  const [jobData, setJobData] = useState({});
  const [responseMessage, setResponseMessage] = useState(null);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.newJobPostApp.loading);
  const error = useSelector((state) => state.newJobPostApp.error);

  const handleInputChange = (event) => {
    setJobData({ ...jobData, [event.target.name]: event.target.value });

  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await dispatch(postNewJobAction(jobData));
    if (result.message) {
      setResponseMessage(result.message);
    }
    setTimeout(() => {
      setResponseMessage(null);
    }, 2000)
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="JobTitle"
        placeholder="Job Title"
        onChange={handleInputChange}
      />

      <Input
        type="text"
        name="location"
        placeholder="Job Location"
        onChange={handleInputChange}
      />
      <Input
        type="text"
        name="jobType"
        placeholder="Job Type"
        onChange={handleInputChange}
      />
      <Input
        type="text"
        name="experience"
        placeholder="Experience"
        onChange={handleInputChange}
      />
      <Input
        type="text"
        name="salary"
        placeholder="Salary"
        onChange={handleInputChange}
      />

      <Input
        type="text"
        name="qualification"
        placeholder="Qualification"
        onChange={handleInputChange}
      />

      <Input
        type="text"
        name="vacancies"
        placeholder="Vacancies"
        onChange={handleInputChange}
      />
      <TextArea style={{ gridColumnStart: 1, gridColumnEnd: 3 }}
        type="text"
        name="jobDescription"
        placeholder="Job Description"
        onChange={handleInputChange}
      />


      <Button type="submit" disabled={loading}>
        {loading ? "Posting..." : "Post Job"}
      </Button>
      {responseMessage && <div>{responseMessage}</div>}
    </Form>
  );
};

export default PostNewJob;


const Form = styled.form`
  display: grid;
  grid-template-columns:repeat(2,1fr);
  flex-direction: column;
  
`;

const Input = styled.input`
  margin: 10px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  margin: 10px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  grid-scale:span 2;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px;
  font-size: 16px;
  background-color: #428bca;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width:100px;
  
    grid-column-start: 2;
    grid-column-end: 3;
  
`;
