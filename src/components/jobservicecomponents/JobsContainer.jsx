import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import JobCard from "./JobCard";
import { getAllJobs } from "../../store/slices/jobserviceslice";

const JobCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  width: 90%;
  max-width: 1200px;
  padding: 20px;
`;
const PageLinksContainer = styled.ul`
  display: flex;
  margin: 10px auto;
  justify-content: center;
  list-style-type: none;
  padding: 5px 4px;
  border-radius: 30px;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  box-shadow: rgba(238, 108, 77, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

const PageLinks = styled.li`
  cursor: pointer;
  margin: 2px;
  padding: 0 12px;
  background: ${({ isActive }) => (isActive ? "#98c1d9" : "#3d5a80")};
  border-radius: 32px;
  color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

const JobsContainer = () => {
  const itemsPerPage = 12;
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const { jobs, loading, error } = useSelector((state) => state.jobserviceApp);
  const value = useSelector((state) => state.searchserviceApp.value);
  const [rejected, setRejected] = useState(false);
  const [jobsSearchResult, setJobSearchResult] = useState([]);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Array.isArray(jobsSearchResult)
    ? jobsSearchResult.slice(indexOfFirstItem, indexOfLastItem)
    : [];
  const totalPages = Math.ceil(
    Array.isArray(jobsSearchResult)
      ? jobsSearchResult?.length / itemsPerPage
      : []
  );
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const onApply = () => {};

  const handlePageClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const getAllJobsData = async () => {
    const result = await dispatch(getAllJobs());
    if (result.type === "getAllJobs/rejected") {
      setRejected(true);
    } else {
      setRejected(false);
    }
  };

  useEffect(() => {
    getAllJobsData();
  }, []);

  useEffect(() => {
    if (loading === false) {
      let jobsFromFilterResult = Array.isArray(jobs)
        ? jobs.filter((job) =>
            job.jobTitle.toLowerCase().includes(value.toLowerCase())
          )
        : [];
      setJobSearchResult(jobsFromFilterResult);
    }
  }, [loading, value]);

  if (loading) return <p>Loading....</p>;
  if (error) return <p>{error}</p>;
  if (!loading && !error && !rejected) {
    return (
      <>
        <JobCardContainer>
          {currentItems?.map((job) => (
            <JobCard key={job.id} job={{ ...job, onApply }} />
          ))}
        </JobCardContainer>
        <PageLinksContainer>
          {pageNumbers?.map((pageNumber) => (
            <PageLinks
              key={pageNumber}
              isActive={currentPage === pageNumber}
              onClick={handlePageClick}
              id={pageNumber}
            >
              {pageNumber}
            </PageLinks>
          ))}
        </PageLinksContainer>
      </>
    );
  }
};

export default JobsContainer;
