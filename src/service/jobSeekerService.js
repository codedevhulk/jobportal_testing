import { applytojobApi } from "./constants";

export const applyToJob = async (jobApplied) => {
    try {
        const response = await fetch(applytojobApi, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(jobApplied) })

    } catch (error) {
        return error
    }
}