import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import { ErrorPage } from "./pages/ErrorPage";
import RecruiterSignIn from "./components/signin/RecruiterSignIn";
import JobSeekerSignIn from "./components/signin/JobSeekerSignIn";
import RecruiterSignUp from "./components/signup/RecruiterSignUp";
import JobSeekerSignUp from "./components/signup/JobSeekerSignUp";
import App from "./App";
import JobDetailsCard from "./components/JobDetailsCard";
import AboutUs from "./pages/AboutUs";

const appRouter: any = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/jobdetails/:id", element: <JobDetailsCard /> },
      { path: "/aboutus", element: <AboutUs /> },
    ],
  },
  {
    path: "/recruiter/signin",
    element: <RecruiterSignIn />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/recruiter/signup",
    element: <RecruiterSignUp />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/jobseeker/signup",
    element: <JobSeekerSignUp />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/jobseeker/signin",
    element: <JobSeekerSignIn />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
