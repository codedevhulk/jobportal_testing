import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { displayAllApplicantsAction } from "../../store/slices/recruiter/applicantsSlice";
import {generateApplicants} from "../../sampledata";

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
  &:hover {
    background-color: ${(props) => (props.isApprove ? "#3e8e41" : "#f44336")};
  }
`;

const ViewAllApplicantComponent = ({ recruiter_id }) => {
  const dispatch = useDispatch();
  // const { applicants, loading, error } = useSelector(
  //   (state) => state.displayAllApplicantsSlice
  // );
  const applicants = generateApplicants(10);
  const loading=false;
  const error=null

  useEffect(() => {
    dispatch(displayAllApplicantsAction(recruiter_id));
  }, [dispatch, recruiter_id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
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
          {applicants.map((applicant) => (
            <TableRow key={applicant.id}>
              <TableCell>{applicant.name}</TableCell>
              <TableCell>{applicant.email}</TableCell>
              <TableCell>{applicant.phone}</TableCell>
              <TableCell>
                <a href={applicant.resume}>Download Resume</a>
              </TableCell>
              <TableCell>
                <Button
                  isApprove={true}
                  onClick={() => {
                    // Dispatch approveApplicantAction with applicant.id
                  }}
                >
                  Approve
                </Button>
                <Button
                  isApprove={false}
                  onClick={() => {
                    // Dispatch rejectApplicantAction with applicant.id
                  }}
                >
                  Reject
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ViewAllApplicantComponent;
