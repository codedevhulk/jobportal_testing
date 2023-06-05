import {
  newjobpostApi,
  viewAllPostApi,
  viewAllApplicantsApi,
  approveApplicantApi,
  rejectApplicantApi,
  getRecruiterProfileApi,

} from "./constants";

export const newJobPost = async (newJobData) => {
  try {
    console.log("data client", newJobData)

    const response = await fetch(newjobpostApi, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newJobData),
    });
    const result = await response.json();
    console.log("data server", result)

    return result;
  } catch (error) {
    return error;
  }
};

export const viewAllJobPost = async (recruiter_id) => {
  try {
    const response = await fetch(`${viewAllPostApi}/${recruiter_id}`);
    const postedjobs = response.json();
    return postedjobs;
  } catch (error) {
    return error;
  }
};

export const applicantList = async (recruiter_id) => {
  try {
    const response = await fetch(`${viewAllApplicantsApi}/${recruiter_id}`);
    const applicantsList = await response.json();
    return applicantsList;
  } catch (error) {
    return error;
  }
};

export const approveApplicant = async (applicant_id) => {
  try {
    const url = approveApplicantApi + applicant_id;
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify({ applicant_id }),
    });
    const data = response.json();
    return data
  } catch (error) {
    return error;
  }
};

export const rejectApplicant = async (applicant_id) => {
  try {
    const url = rejectApplicantApi + applicant_id;
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify({ applicant_id }),
    });
    const data = response.json();
    return data
  } catch (error) {
    return error;
  }
};

export const getRecruiterProfileData = async () => {
  try {
    const username = localStorage.getItem("username")
    const url = `${getRecruiterProfileApi}${username}`
    console.log("actual", url)
    const response = await fetch(url)
    const data = response.json();
    return data;
  } catch (error) { return error }
}


