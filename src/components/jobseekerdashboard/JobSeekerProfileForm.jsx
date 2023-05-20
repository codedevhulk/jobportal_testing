import { useState, useEffect } from 'react'
import axios from "axios";

const Datacheck = () => {
    const [jobseekerDetail, setjobseekerDetails] = useState({
        email: "abhishek@gmail.com",
        username: "josh",
        firstName: "abhishek",
        lastName: "Kumar",
        mobileNumber: "8099099004",
        qualification: "Btech",
        skillSet: "Java, Springboot, React",
        experience: "1 Year",
        summary: "Hardworking",
        address: "Gachibowli, Hydokbdciediniiniaaaaa"
    });

    const updateProfile = (x) => {

        console.log("update profile component", JSON.stringify(x));
        axios.post("http://localhost:7672/jobseeker/updateprofile",
            {
                email: "abhishek@gmail.com",
                username: "josh",
                firstName: "abhishek",
                lastName: "Kumar",
                mobileNumber: "8099099004",
                qualification: "Btech",
                skillSet: "Java, Springboot, React",
                experience: "1 Year",
                summary: "Hardworking",
                address: "Gachibowli, Hydokbdciediniinizz"
            }).then((res) => { console.log(res) }).catch((error) => { console.log("Error", error) });



    }

    const getProfile = async () => {
        const response = await fetch("http://localhost:7672/jobseeker/josh", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await response.data;
        setjobseekerDetails(data)
        console.log("getProfile from data", data)
        return data;
    }



    useEffect(() => {
        setTimeout(() => {
            updateProfile(jobseekerDetail)
            getProfile();

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

