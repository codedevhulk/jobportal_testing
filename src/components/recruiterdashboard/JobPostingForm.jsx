import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { postNewJobAction } from "../../store/slices/recruiter/recruiternewjobslice";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin: 10px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
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
`;

const PostNewJob = () => {
  const [jobData, setJobData] = useState({});
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.newJobPostApp.loading);
  const error = useSelector((state) => state.newJobPostApp.error);

  const handleInputChange = (event) => {
    setJobData({ ...jobData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postNewJobAction(jobData));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="title"
        placeholder="Job Title"
        onChange={handleInputChange}
      />
      <Input
        type="text"
        name="description"
        placeholder="Job Description"
        onChange={handleInputChange}
      />
      <Input
        type="text"
        name="location"
        placeholder="Job Location"
        onChange={handleInputChange}
      />
      <Button type="submit" disabled={loading}>
        {loading ? "Posting..." : "Post Job"}
      </Button>
      {error && <div>{error.message}</div>}
    </Form>
  );
};

export default PostNewJob;
