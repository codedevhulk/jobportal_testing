import { applytojobApi } from "./constants";
import { updateJobseekerProfileApi } from "./constants"
import { getJobseekerProfileApi } from "./constants";

export const applyToJob = async (jobApplied) => {
    try {
        const response = await fetch(applytojobApi, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(jobApplied) })

    } catch (error) {
        return error
    }
}

export const updateJobseekerProfile = async (jobseekerDetails) => {
    try {
        const response = await fetch(updateJobseekerProfileApi, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(jobseekerDetails) })
        return response;
    } catch (error) { return error }
}


export const getJobseekerProfileData = async (username) => {
    try {
        const response = await fetch(`${getJobseekerProfileApi}${username}`)
        return response;
    } catch (error) { return error }
}

