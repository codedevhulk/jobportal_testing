import { useState, useEffect } from 'react'
import JobDetailsCard from '../jobservicecomponents/JobDetailsCard';

const Datacheck = () => {
    const [jobseekerDetail, setjobseekerDetails] = useState({
        email: "abhishek@gmail.com",
        username: "guestlord",
        password: "Rajesh@789",
        firstName: "abhishek",
        lastName: "Kumar",
        mobileNumber: "8099099004",
        qualification: "Btech",
        skillSet: "Java, Springboot, React",
        experience: "1 Year",
        summary: "Hardworking",
        address: "Gachibowli, Hydokook"
    });

    const updateProfile = async (x) => {
        try {
            console.log("update profile component", JSON.stringify(x));
            const response = await fetch("http://localhost:7672/jobseeker/updateprofile", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(x) })
            const res = response.json();
            console.log("update profile from response", res)
        } catch (error) { console.log("updateprofile error", error) }
    }

    const getProfile = async () => {
        const response = await fetch("http://localhost:7672/jobseeker/lordguest");
        const data = response.json();
        console.log("getProfile from data", data)
        return data;
    }



    useEffect(() => {
        setTimeout(() => {
            updateProfile(jobseekerDetail)
            const jobseeker = getProfile();
            setjobseekerDetails(jobseeker)
        }, 5000);
    }, [])
    return (
        <div>
            <ul>
                {Object.values(jobseekerDetail).map(value => <li>{value}</li>)}
            </ul>
        </div>
    )
}

export default Datacheck