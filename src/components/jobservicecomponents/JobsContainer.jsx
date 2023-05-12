import React, { useEffect, useState } from "react";
import {useDispatch,useSelector} from "react-redux"
import styled from "styled-components"
import JobCard from "./JobCard";
import {getAllJobs} from "../../store/slices/jobserviceslice";


const JobCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  width: 100%;
  max-width: 1200px;
  padding: 20px;

`;
const PageLinksContainer = styled.ul`
    display:flex;
    margin:10px auto;
    justify-content:center;
    list-style-type:none;
    border:1px solid white; 
    border-radius:30px;
    background:white;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

`;

const PageLinks = styled.li`
    cursor:pointer;
    margin:2px;
    padding:0 12px;
    background:${({ isActive }) => isActive ? "#98c1d9" : "#007bff"};
    border:1px solid grey;
    border-radius:32px;
    color:white;
   
`;

const JobsContainer = () => {
  const itemsPerPage = 12;
  const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
  const {jobs,loading,error} = useSelector(state=>state.jobserviceApp)
  const [rejected,setRejected] = useState(false);
  

  const onApply = ()=>{}
  const getAllJobsData = async () =>{
    const result =await dispatch(getAllJobs());
    if(result.type === "getAllJobs/rejected"){
      setRejected(true)
    }else{
      setRejected(false);
    }

  }
  const handlePageClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  useEffect(()=>{
      getAllJobsData()
      
  },[])
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Array.isArray(jobs)?jobs.slice(indexOfFirstItem, indexOfLastItem):[];

  const totalPages = Math.ceil(Array.isArray(jobs)?jobs?.length / itemsPerPage:[]);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  if(loading) return <p>Loading....</p>
  if(error) return <p>{error}</p>
  if(!loading && !error && !rejected){
    return (<>
      
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
