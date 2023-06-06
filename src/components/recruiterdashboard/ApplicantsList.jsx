import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { displayAllApplicantsAction } from "../../store/slices/recruiter/applicantsSlice";
import { generateApplicants } from "../../sampledata";
import { Link } from "react-router-dom";
import { rejectApplicant, approveApplicant } from "../../service/recruiterService";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 10px;
  text-align: left;
  border-bottom: 2px solid #ddd;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const Button = styled.button`
  background-color: ${(props) => (props.isApprove ? "#4CAF50" : "#f44336")};
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right:10px;
  margin-bottom:10px;
  width:100%;
  &:hover {
    background-color: ${(props) => (props.isApprove ? "#3e8e41" : "#f44336")};
  }
`;

const ViewAllApplicantComponent = () => {
  const dispatch = useDispatch();
  const recruiter_id = localStorage.getItem("recruiterId")
  // const { applicants, loading, error } = useSelector(
  //   (state) => state.displayAllApplicantsSlice
  // );
  const [loading, setLoading] = useState(false);
  const [allapplicants, setAllApplicants] = useState([]);
  const [error, setError] = useState(null)
  const [responseMessage, setResponseMessage] = useState(null);
  // const applicants = generateApplicants(10);


  const rejectFn = async (id) => {
    const res = await rejectApplicant(id);
    setResponseMessage(res);
    console.log("reject : ", res)
    if (res) {
      setTimeout(() => {
        setResponseMessage(null)
      }, 5000)
    }

  }
  const approveFn = async (id) => {
    const res = await approveApplicant(id);
    setResponseMessage(res);
    console.log("approve : ", res)
    if (res) {
      setTimeout(() => {
        setResponseMessage(null)
      }, 5000)
    }
  }
  const getAllApplicants = async () => {
    setLoading(true);
    const applicants = await dispatch(displayAllApplicantsAction(recruiter_id));
    setLoading(false);
    console.log(applicants.payload)
    if (applicants.payload.length > 0) {
      setLoading(false)
      setError(null);
      setAllApplicants(applicants.payload)
      console.log("all applicants")
    } else
      setError(applicants)
  }

  useEffect(() => {
    getAllApplicants()
  }, [dispatch, error, allapplicants.length]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (loading) {
    return <p style={{ margin: "auto", fontweight: "bold" }}>Loading...</p>
  }
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <TableHeader>Name</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Phone</TableHeader>
            <TableHeader>Resume</TableHeader>
            <TableHeader>Action</TableHeader>
          </tr>
        </thead>
        <tbody>

          {!loading && !error && allapplicants.map((applicant) => (
            <>
              <TableRow key={applicant.id}>
                <TableCell>{applicant.name}</TableCell>
                <TableCell>{applicant.email}</TableCell>
                <TableCell>{applicant.phone}</TableCell>
                <TableCell>
                  <Link to={`/recruiter/applicants/${applicant.id}`} target="_blank" style={{ textDecoration: "none", color: "green" }}>Show Details</Link>
                </TableCell>
                <TableCell>
                  <Button
                    isApprove={true}
                    onClick={() => {
                      rejectFn(applicant.id)
                    }}
                  >
                    Approve
                  </Button>
                  <Button
                    isApprove={false}
                    onClick={() => {
                      approveFn(applicant.id)

                    }}
                  >
                    Reject
                  </Button>
                </TableCell>
              </TableRow>
              {responseMessage && <p style={{ margin: "auto", fontweight: "bold" }}>{responseMessage}</p>}
            </>

          ))}

        </tbody>
      </Table>
    </Container>
  );
};

export default ViewAllApplicantComponent;
