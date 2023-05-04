import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../components/JobCard";
import JobSearchResultsPage from "../components/JobCard";
import JobDetailsPage from "../components/JobCard";
import JobApplicationPage from "../components/JobCard";
import EmployerDashboardPage from "../components/JobCard";
import JobPostingPage from "../components/JobCard";
import JobSeekerDashboardPage from "../components/JobCard";
import { ErrorPage } from "../pages/ErrorPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/employer/dashboard",
        element: <EmployerDashboardPage />,
      },
      {
        path: "/job-seeker/dashboard",
        element: <JobSeekerDashboardPage />,
      },
    ],
  },
  {
    path: "/jobs",
    element: <JobSearchResultsPage />,
  },
  {
    path: "/jobs/:id",
    element: <JobDetailsPage />,
  },
  {
    path: "/jobs/:id/apply",
    element: <JobApplicationPage />,
  },
  {
    path: "/employer/dashboard",
    element: <EmployerDashboardPage />,
  },
  {
    path: "/employer/postjob",
    element: <JobPostingPage />,
  },

  //   {
  //     path: "/job-seeker/profile",
  //     element: <JobSeekerProfilePage />,
  //   },
  //   {
  //     path: "/employer/profile",
  //     element: <EmployerProfilePage />,
  //   },
  //   {
  //     path: "*",
  //     element: <ErrorPage />,
  //   },
  //   {
  //     path: "/job-seeker/signin",
  //     element: <JobSeekerSignInPage />,
  //   },
  //   {
  //     path: "/job-seeker/signup",
  //     element: <JobSeekerSignUpPage />,
  //   },
  //   {
  //     path: "/employer/signin",
  //     element: <EmployerSignInPage />,
  //   },
  //   {
  //     path: "/employer/signup",
  //     element: <EmployerSignUpPage />,
  //   },
]);

export default <RouterProvider router={appRouter} />;
