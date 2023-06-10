import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { displayAllApplicantsAction } from "../../store/slices/recruiter/applicantsSlice";
// import { generateApplicants } from "../../sampledata";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { Link } from "react-router-dom";
import {
  rejectApplicant,
  approveApplicant,
  deleteApplicant,
} from "../../service/recruiterService";

const Container = styled.div`
  max-width: 800px;
  margin: 30px auto;
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
  margin-right: 10px;
  margin-bottom: 10px;
  width: 100%;
  &:hover {
    background-color: ${(props) => (props.isApprove ? "#3e8e41" : "#f44336")};
  }
`;
export const rejectFn = async (id) => {
  const res = await rejectApplicant(id);
  return res;
};
export const approveFn = async (id) => {
  const res = await approveApplicant(id);
  return res;
};
export const deleteFn = async (id) => {
  const res = await deleteApplicant(id);
  return res;
};

const ViewAllApplicantComponent = () => {
  const dispatch = useDispatch();
  const recruiter_id = localStorage.getItem("recruiterId");
  const {
    applicants: allapplicants,
    loading,
    error,
  } = useSelector((state) => state.applicantsApp);
 
  const [responseMessage, setResponseMessage] = useState(null);

  const getAllApplicants = async () => {
    await dispatch(displayAllApplicantsAction(recruiter_id));
  };

  const rejectsApplicant = async (id) => {
    const res = await rejectFn(id);
    setResponseMessage("Job Application Rejected");
    console.log("rejected application res ", res);
    setTimeout(() => {
      setResponseMessage(null);
    }, 5000);
  };

  const acceptApplicant = async (id) => {
    const res = await approveFn(id);
    setResponseMessage("job application accepted for further process");
    console.log("approved application res ", res);
    setTimeout(() => {
      setResponseMessage(null);
    }, 5000);
  };

  const deletesApplicant = async (id) => {
    const res = await deleteFn(id);
    setResponseMessage("Applicant Deleted Successfully");
    console.log("approved application res ", res);
    setTimeout(() => {
      setResponseMessage(null);
    }, 5000);
  };
const getAllApplicantss = useCallback(getAllApplicants,[recruiter_id,dispatch])
  useEffect(() => {
    getAllApplicantss();
  }, [getAllApplicantss]);

  if (loading) {
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          fontSize: "36px",
        }}
      >
        <p>You Have No Applications Yet</p>
      </div>
    );
  }

  return (
    <>
      {responseMessage && (
        <p style={{ margin: "auto", fontweight: "bold" }}>{responseMessage}</p>
      )}

      <Container>
        {!loading && !error && Array.isArray(allapplicants) && (
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
              {allapplicants.map((applicant) => (
                <TableRow key={applicant.id}>
                  <TableCell>
                    {applicant.firstName} {applicant.lastName}
                  </TableCell>
                  <TableCell>{applicant.email}</TableCell>
                  <TableCell>{applicant.phone}</TableCell>
                  <TableCell>
                    <Link
                      to={`/recruiter/applicants/${applicant.id}`}
                      target="_blank"
                      style={{ textDecoration: "none", color: "green" }}
                    >
                      Show Details
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Button
                      isApprove={true}
                      onClick={() => {
                        acceptApplicant(applicant.id);
                      }}
                    >
                      Approve
                    </Button>
                    <Button
                      isApprove={false}
                      onClick={() => {
                        rejectsApplicant(applicant.id);
                      }}
                    >
                      Reject
                    </Button>
                    <Button
                      isApprove={false}
                      onClick={() => {
                        deletesApplicant(applicant.id);
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        )}
      </Container>
    </>
  );
};

export default ViewAllApplicantComponent;
