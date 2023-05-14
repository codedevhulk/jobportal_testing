import {
  newjobpostApi,
  viewAllPostApi,
  viewAllApplicantsApi,
  approveApplicantApi,
  rejectApplicantApi,
} from "./constants";

export const newJobPost = async (newJobData) => {
  try {
    const response = await fetch(newjobpostApi, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newJobData),
    });
    const result = response.json();
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
    const applicantsList = response.json();
    return applicantsList;
  } catch (error) {
    return error;
  }
};

export const approveApplicant = async (applicant_id) => {
  try {
    const response = await fetch(approveApplicantApi, {
      method: "POST",
      body: JSON.stringify({ applicant_id }),
    });
    return response.json();
  } catch (error) {
    return error;
  }
};

export const rejectApplicant = async (applicant_id) => {
  try {
    const response = await fetch(rejectApplicantApi, {
      method: "POST",
      body: JSON.stringify({ applicant_id }),
    });
    return response.json();
  } catch (error) {
    return error;
  }
};
