import { useEffect, useState } from "react";
import styled from "styled-components";
import { jobApplicatonsOfJobseeker } from "../../service/jobSeekerService"
import { useParams } from "react-router-dom";

const AppliedJobDetailsCardContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;

`
const AppliedJobDetailsCard = styled.div`
    display:flex;
    flex-direction:column;
    
    

`
const Field = styled.div`
    

`


const AppliedJobDetails = () => {
    const [applicationDetails, setApplicationDetails] = useState(null);
    const { id } = useParams();
    const jobApplicationByApplicationId = async () => {
        const jobApplications = await jobApplicatonsOfJobseeker();
        const jobApplicationByAppId = jobApplications.filter(application => application.id === id);
        setApplicationDetails(jobApplicationByAppId);

    }
    useEffect(() => {
        jobApplicationByApplicationId();
    })
    return (
        <AppliedJobDetailsCardContainer>
            <AppliedJobDetailsCard>
                <p>Applied Job Detail</p>
                <ul>
                    {applicationDetails && Object.entries(applicationDetails).map(item => {
                        <div>
                            <p>{item[0]} {item[1]}</p>

                        </div>
                    })}
                </ul>
            </AppliedJobDetailsCard>
        </AppliedJobDetailsCardContainer>
    )
}

export default AppliedJobDetails