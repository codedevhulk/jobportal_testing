// // // "https://64571a7e5f9a4f236151cbaf.mockapi.io/api/jobs";
// // export const viewAllPostApi = "http://localhost:8020/jobservice/alljobs";
// // export const signupApi = "http://localhost:7171/api/auth/signup";

// // export const recruiterSignupApi = "http://localhost:7171/api/auth/recruiter/signup";
// // export const signinApi = "http://localhost:7171/api/auth/signin";
// // export const signoutApi = "http://localhost:7171/api/auth/signout";
// // export const newjobpostApi =
// //   "http://localhost:8020/jobservice/recruiter/jobpost";
// // export const deleteJobByIdApi =
// //   "http://localhost:8020/jobservice/recruiter/deletejobpost/";
// // export const updateAJobPost =
// //   "http://localhost:8020/jobservice/recruiter/updatejobpost/2";
// // export const viewAllApplicantsApi = "";
// // export const rejectApplicantApi = "";
// // export const approveApplicantApi = "";
// // export const updateRecruiterProfileApi = "";
// // const appliedJobsByJobseekerApi = "http://localhost:8020/jobservice/jobseeker/applications/";
// // export const applytojobApi = "http://localhost:8020/jobservice/jobseeker/apply/"
// // export const updateJobseekerProfileApi = "http://localhost:7672/jobseeker/updateprofile"
// // export const getJobseekerProfileApi = "http://localhost:7672/jobseeker/"
// // export const jobApplicatonsOfJobseekerApi = appliedJobsByJobseekerApi;

// // "https://64571a7e5f9a4f236151cbaf.mockapi.io/api/jobs";

// export const signoutApi = "http://localhost:8062/api/auth/signout";
// //jobseeker
// export const signupApi = "http://localhost:7171/api/auth/signup";
// export const signinApi = "http://localhost:7171/api/auth/signin";

// //jobservice
// export const viewAllPostApi = "http://localhost:8062/jobservice/alljobs";

// //recruiter
// export const recruiterSignupApi =
//   "http://localhost:7171/api/auth/recruiter/signup";
// export const recruiterSigninApi =
//   "http://localhost:7171/api/auth/recruiter/signin";
// export const getRecruiterProfileApi = "http://localhost:8062/recruiter/";

// export const newjobpostApi =
//   "http://localhost:8062/jobservice/recruiter/jobpost";
// export const deleteJobByIdApi =
//   "http://localhost:8062/jobservice/recruiter/deletejobpost/";
// export const updateAJobPostApi =
//   "http://localhost:7672/jobservice/recruiter/updatejobpost/";
// export const viewAllApplicantsApi =
//   "http://localhost:8020/jobservice/recruiter/applications";
// export const updateRecruiterProfileApi =
//   "http://localhost:7673/recruiter/updateprofile";
// const appliedJobsByJobseekerApi =
//   "http://localhost:8020/jobservice/jobseeker/applications/";
// export const applytojobApi =
//   "http://localhost:8062/jobservice/jobseeker/apply/";
// export const updateJobseekerProfileApi =
//   "http://localhost:7672/jobseeker/updateprofile";
// export const getJobseekerProfileApi = "http://localhost:7672/jobseeker/";
// export const jobApplicatonsOfJobseekerApi = appliedJobsByJobseekerApi;
// export const approveApplicantApi =
//   "http://localhost:8020/jobservice/recruiter/application/accept/";
// export const rejectApplicantApi =
//   "http://localhost:8020/jobservice/recruiter/application/reject/";
// export const getAJobByIdApi = "http://localhost:8020/jobservice/job/";

// export const deleteApplicantApi =
//   "http://localhost:8062/jobservice/deleteapplication/";
// //need api getApplicantById, but using viewAllApplicantsApi and filtering it

const setGateway = false;

const RECRUITER_PORT = 7673;

const JOB_SEEKER_PORT = 7672;

const SECURITY_PORT = 7171; //for signup signin

const GATEWAY_PORT = 8062;

const JOB_SERVICE_PORT = 8020;

//security
export const signoutApi = `http://localhost:${
  setGateway ? GATEWAY_PORT : SECURITY_PORT
}/api/auth/signout`;

//JobSeeker
export const signupApi = `http://localhost:${
  setGateway ? GATEWAY_PORT : SECURITY_PORT
}/api/auth/signup`;
export const signinApi = `http://localhost:${
  setGateway ? GATEWAY_PORT : SECURITY_PORT
}/api/auth/signin`;
export const updateJobseekerProfileApi = `http://localhost:${
  setGateway ? GATEWAY_PORT : JOB_SEEKER_PORT
}/jobseeker/updateprofile`;
export const getJobseekerProfileApi = `http://localhost:${
  setGateway ? GATEWAY_PORT : JOB_SEEKER_PORT
}/jobseeker/`;

//Recruiter
export const recruiterSignupApi = `http://localhost:${
  setGateway ? GATEWAY_PORT : SECURITY_PORT
}/api/auth/recruiter/signup`;
export const recruiterSigninApi = `http://localhost:${
  setGateway ? GATEWAY_PORT : SECURITY_PORT
}/api/auth/recruiter/signin`;
export const getRecruiterProfileApi = `http://localhost:${
  setGateway ? GATEWAY_PORT : RECRUITER_PORT
}/recruiter/`;
export const updateRecruiterProfileApi = `http://localhost:${
  setGateway ? GATEWAY_PORT : RECRUITER_PORT
}/recruiter/updateprofile`;

//job service
export const viewAllPostApi = `http://localhost:${
  setGateway ? GATEWAY_PORT : JOB_SERVICE_PORT
}/jobservice/alljobs`;
export const newjobpostApi = `http://localhost:${
  setGateway ? GATEWAY_PORT : JOB_SERVICE_PORT
}/jobservice/recruiter/jobpost`;
export const deleteJobByIdApi = `http://localhost:${
  setGateway ? GATEWAY_PORT : JOB_SERVICE_PORT
}/jobservice/recruiter/deletejobpost/`;
export const updateAJobPostApi = `http://localhost:${
  setGateway ? GATEWAY_PORT : JOB_SERVICE_PORT
}/jobservice/recruiter/updatejobpost/`;
export const viewAllApplicantsApi = `http://localhost:${
  setGateway ? GATEWAY_PORT : JOB_SERVICE_PORT
}/jobservice/recruiter/applications`;
export const jobApplicatonsOfJobseekerApi = `http://localhost:${
  setGateway ? GATEWAY_PORT : JOB_SERVICE_PORT
}/jobservice/jobseeker/applications/`;
export const applytojobApi = `http://localhost:${
  setGateway ? GATEWAY_PORT : JOB_SERVICE_PORT
}/jobservice/jobseeker/apply/`;
export const approveApplicantApi = `http://localhost:${
  setGateway ? GATEWAY_PORT : JOB_SERVICE_PORT
}/jobservice/recruiter/application/accept/`;
export const rejectApplicantApi = `http://localhost:${
  setGateway ? GATEWAY_PORT : JOB_SERVICE_PORT
}/jobservice/recruiter/application/reject/`;
export const getAJobByIdApi = `http://localhost:${
  setGateway ? GATEWAY_PORT : JOB_SERVICE_PORT
}/jobservice/job/`;
export const deleteApplicantApi = `http://localhost:${
  setGateway ? GATEWAY_PORT : JOB_SERVICE_PORT
}8062/jobservice/deleteapplication/`;

//need api getApplicantById, but using viewAllApplicantsApi and filtering it
