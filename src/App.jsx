import "./App.css";
import { Outlet } from "react-router-dom";


import "./index.css";
import { createBrowserRouter } from 'react-router-dom'

import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import { ErrorPage } from "./pages/ErrorPage";
import RecruiterSignIn from "./components/signin/RecruiterSignIn";
import JobSeekerSignIn from "./components/signin/JobSeekerSignIn";
import RecruiterSignUp from "./components/signup/RecruiterSignUp";
import JobSeekerSignUp from "./components/signup/JobSeekerSignUp";

//jobseeker
import JobSeekerDashboardPage from "./pages/JobSeekerDashboardPage";
import JobSeekerProfileCard from "./components/jobseekerdashboard/JobSeekerProfileCard";
import JobSeekerProfileForm from "./components/jobseekerdashboard/JobSeekerProfileForm";
import JobDetailsCard from "./components/jobservicecomponents/JobDetailsCard";
import AppliedJobsList from "./components/jobseekerdashboard/AppliedJobsList";


//recruiter
import RecruiterDashboardPage from "./pages/RecruiterDashboardPage";
import RecruiterProfileCard from "./components/recruiterdashboard/RecruiterProfileCard";
import RecruiterProfileForm from "./components/recruiterdashboard/RecruiterProfileForm";
import JobPostingForm from "./components/recruiterdashboard/JobPostingForm";
import ApplicantsList from "./components/recruiterdashboard/ApplicantsList";
import PostedJobsList from "./components/recruiterdashboard/PostedJobsList";
import EditPostedJob from "./components/recruiterdashboard/EditPostedJob";
import RejectedCandidatesList from "./components/recruiterdashboard/RejectedCandidatesList";
import ShortListedCandidatesList from "./components/recruiterdashboard/ShortlistedCandidatesList";
import ApplicantView from "./components/recruiterdashboard/ApplicantView";
import JobSeekerSearchJobs from "./components/jobseekerdashboard/JobSeekerSearchJobs";



export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },

      { path: "/aboutus", element: <AboutUs /> },
      {
        path: "/recruiter",
        element: <RecruiterDashboardPage />,
        children: [
          { path: "/recruiter/", element: <ApplicantsList /> },
          { path: "/recruiter/profile", element: <RecruiterProfileCard /> },
          { path: "/recruiter/profile/edit", element: <RecruiterProfileForm /> },
          { path: "/recruiter/applicants", element: <ApplicantsList /> },
          { path: "/recruiter/applicants/:id", element: <ApplicantView /> },
          { path: "/recruiter/postedjobs", element: <PostedJobsList /> },
          { path: "/recruiter/postedjobs/edit/:id", element: <EditPostedJob /> },
          { path: "/recruiter/rejectedcandidates", element: <RejectedCandidatesList /> },
          { path: "/recruiter/shortlistedcandidates", element: <ShortListedCandidatesList /> },
          { path: "/recruiter/newjobpost", element: <JobPostingForm /> },


        ]
      },
      {
        path: "/jobseeker",
        element: (
          <JobSeekerDashboardPage />
        ),
        children: [
          { path: "/jobseeker", element: <JobSeekerSearchJobs /> },
          { path: "/jobseeker/profile", element: <JobSeekerProfileCard /> },
          { path: "/jobseeker/profile/update", element: <JobSeekerProfileForm /> },
          { path: "/jobseeker/appliedlist", element: <AppliedJobsList /> }
        ]

      },
    ],
  },

  {
    path: "/jobseeker/jobdetails/:id",
    element: <JobDetailsCard />,
  },

  {
    path: "/recruiter/signin",
    element: <RecruiterSignIn />,
  },
  {
    path: "/recruiter/signup",
    element: <RecruiterSignUp />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/jobseeker/signup",
    element: <JobSeekerSignUp />,
  },
  {
    path: "/jobseeker/signin",
    element: <JobSeekerSignIn />,
  },
],

);

function App() {
  return (
    <div className="">
      <Outlet />
    </div>
  );
}

export default App;
