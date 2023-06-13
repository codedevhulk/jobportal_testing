import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { updateJobPostAction } from "../../store/slices/recruiter/recruiternewjobslice";
import { getAJobById } from "../../service/recruiterService";
import { useNavigate, useParams } from "react-router-dom";

const EditPostedJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [jobData, setJobData] = useState({});
  const [responseMessage, setResponseMessage] = useState(null);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.newJobPostApp);

  const handleInputChange = (event) => {
    setJobData({ ...jobData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch(updateJobPostAction(jobData));

    setResponseMessage("job post updated succesfully");

    setTimeout(() => {
      setResponseMessage(null);
    }, 5000);
  };

  const getJob = async () => {
    const res = await getAJobById(id);
    console.log("job", res);
    setJobData(res);
  };
  const getJobForEdit = useCallback(getJob, [id]);

  useEffect(() => {
    getJobForEdit();
  }, [getJobForEdit, navigate]);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        {responseMessage && <p>{responseMessage}</p>}
      </div>

      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="jobTitle"
          placeholder="Job Title"
          value={jobData.jobTitle}
          onChange={handleInputChange}
        />

        <Input
          type="text"
          name="location"
          value={jobData.location}
          placeholder="Job Location"
          onChange={handleInputChange}
        />

        <Input
          type="text"
          name="jobType"
          placeholder="Job Type"
          value={jobData.jobType}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="experience"
          placeholder="Experience"
          value={jobData.experience}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="salary"
          placeholder="Salary"
          value={jobData.salary}
          onChange={handleInputChange}
        />

        <Input
          type="text"
          name="qualification"
          placeholder="Qualification"
          value={jobData.qualification}
          onChange={handleInputChange}
        />

        <Input
          type="text"
          name="vacancies"
          placeholder="Vacancies"
          value={jobData.vacancies}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="companyName"
          placeholder="companyName"
          value={jobData.companyName}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="skillSet"
          placeholder="Skillset"
          value={jobData.skillset}
          onChange={handleInputChange}
        />

        <TextArea
          style={{ gridColumnStart: 1, gridColumnEnd: 3 }}
          type="text"
          name="jobDescription"
          placeholder="Job Description"
          value={jobData.jobDescription}
          onChange={handleInputChange}
        ></TextArea>

        <Button type="submit" disabled={loading}>
          UPDATE JOB
        </Button>
      </Form>
    </>
  );
};

export default EditPostedJob;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
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
  min-height: 100px;
  max-height: 300px;
  overflow: auto;
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
  width: 100px;
  grid-column-start: 2;
  grid-column-end: 3;
  width: 120px;
`;
