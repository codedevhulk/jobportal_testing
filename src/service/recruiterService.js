import {
  newjobpostApi,
  viewAllPostApi,
  viewAllApplicantsApi,
  approveApplicantApi,
  rejectApplicantApi,
  getRecruiterProfileApi,
  getAJobByIdApi,
  deleteJobByIdApi,
  updateAJobPostApi,
  deleteApplicantApi,
} from "./constants";

export const updateJobPost = async (updatedJobData) => {
  try {
    const jwttoken_recruiter = localStorage.getItem("jwttoken_recruiter")
    console.log("data client_", updatedJobData);
    const { id } = updatedJobData;
    const response = await fetch(updateAJobPostApi + id, {
      method: "PUT",
      headers: { "content-type": "application/json", Authorization:jwttoken_recruiter},
      body: JSON.stringify(updatedJobData),
    });
    const result = await response.json();
    console.log("data server", result);

    return result;
  } catch (error) {
    return error;
  }
};

export const newJobPost = async (newJobData) => {
  try {
    const jwttoken_recruiter = localStorage.getItem("jwttoken_recruiter")
    console.log("data client", newJobData);

    const response = await fetch(newjobpostApi, {
      method: "POST",
      headers: { "content-type": "application/json" ,Authorization:jwttoken_recruiter},
      body: JSON.stringify(newJobData),
    });
    const result = await response.json();
    console.log("data server", result);

    return result;
  } catch (error) {
    return error;
  }
};

export const viewAllJobPost = async (recruiter_id) => {
  try {
    const jwttoken_recruiter = localStorage.getItem("jwttoken_recruiter")
    const response = await fetch(viewAllPostApi ,{headers:{Authorization:jwttoken_recruiter}}
      );
    const postedjobs = await response.json();
    return postedjobs;
  } catch (error) {
    return error;
  }
};

export const applicantList = async (recruiter_id) => {
  try {
    const jwttoken_recruiter = localStorage.getItem("jwttoken_recruiter")
    const response = await fetch(`${viewAllApplicantsApi}/${recruiter_id}`, {headers:{Authorization:jwttoken_recruiter}}
    );
    const applicantsList = await response.json();
    return applicantsList;
  } catch (error) {
    return error;
  }
};
export const getApplicantById = async () => {
  try {
    const jwttoken_recruiter = localStorage.getItem("jwttoken_recruiter")
    const id = Number(
      window.location.pathname.split("/")[
        window.location.pathname.split("/").length - 1
      ]
    );
    console.log("id:", id);
    const recruiter_id = localStorage.getItem("recruiterId");
    const response = await fetch(`${viewAllApplicantsApi}/${recruiter_id}`,  {headers:{Authorization:jwttoken_recruiter}}
    );
    const applicantsList = await response.json();
    const res = applicantsList.filter((applicant) => applicant.id === id)[0];
    return res;
  } catch (error) {
    return error;
  }
};

export const approveApplicant = async (applicant_id) => {
  try {
    const jwttoken_recruiter = localStorage.getItem("jwttoken_recruiter")
    const url = approveApplicantApi + applicant_id;
    const response = await fetch(url, {
      method: "PUT",
      headers:{Authorization:jwttoken_recruiter},
      body: JSON.stringify({ applicant_id }),
    });
    const data = response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const rejectApplicant = async (applicant_id) => {
  try {
    const jwttoken_recruiter = localStorage.getItem("jwttoken_recruiter")
    const url = rejectApplicantApi + applicant_id;
    const response = await fetch(url, {
      method: "PUT",
      headers:{Authorization:jwttoken_recruiter},
      body: JSON.stringify({ applicant_id }),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    return error;
  }
};

export const deleteApplicant = async (applicant_id) => {
  try {
    const jwttoken_recruiter = localStorage.getItem("jwttoken_recruiter")
    const url = deleteApplicantApi + applicant_id;
    const response = await fetch(url, {
      method: "DELETE",
      headers:{Authorization:jwttoken_recruiter}
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    return error;
  }
};

export const getRecruiterProfileData = async () => {
  try {
    const jwttoken_recruiter = localStorage.getItem("jwttoken_recruiter")
    const username = localStorage.getItem("username");
    const url = `${getRecruiterProfileApi}${username}`;
    console.log("actual", url);
    const response = await fetch(url,{headers:{Authorization:jwttoken_recruiter}});
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const getAJobById = async (jobId) => {
  try {
    const jwttoken_recruiter = localStorage.getItem("jwttoken_recruiter")
    const res = await fetch(getAJobByIdApi + jobId,{headers:{Authorization:jwttoken_recruiter}});
    const data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
};

export const deleteJobById = async (id) => {
  const jwttoken_recruiter = localStorage.getItem("jwttoken_recruiter")
  const res = await fetch(deleteJobByIdApi + id, { method: "DELETE" ,headers:{Authorization:jwttoken_recruiter}});
  const result = await res;
  console.log(result);
  return result;
};

