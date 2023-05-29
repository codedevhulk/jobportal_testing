import { applytojobApi, jobApplicatonsOfJobseekerApi } from "./constants";
import { updateJobseekerProfileApi } from "./constants"
import { getJobseekerProfileApi } from "./constants";

export const applyToJob = async (jobApplied) => {
    try {
        const response = await fetch(applytojobApi, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(jobApplied) })
        const data = response.json();
        console.log("response from jobapplied", data)
        return data;
    } catch (error) {
        return error
    }
}

export const updateJobseekerProfile = async (jobseekerDetails) => {
    try {

        const response = await fetch(updateJobseekerProfileApi, { method: "PUT", headers: { "content-type": "application/json" }, body: JSON.stringify(jobseekerDetails) })
        const data = response.json();
        console.log("data from response", data);
        return data;
    } catch (error) { return error }
}


export const getJobseekerProfileData = async (y) => {
    try {
        const url = `${getJobseekerProfileApi}${y}`
        console.log("actual", url)
        const response = await fetch(url)
        const data = response.json();
        return data;
    } catch (error) { return error }
}


export const jobApplicatonsOfJobseeker = async () => {

    const id = localStorage.getItem("jobseekerId")
    const url = `${jobApplicatonsOfJobseekerApi}${id}`;
    console.log(url)
    const response = await fetch(url);
    const data = await response.json();
    console.log(`jobapplication of jobseeker with id : ${id} is `)
    console.log(data)

    return data;

}
