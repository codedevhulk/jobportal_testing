import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AppliedJobCard from "../AppliedJobCard";

const jobData = {
  id: "1",
  jobTitle: "Software Engineer",
  jobDescription: "Lorem ipsum dolor sit amet",
  salary: 50000,
  location: "New York",
  applicationStatus: "Pending",
};

test("renders job card correctly", () => {
  render(
    <Router>
      <AppliedJobCard job={jobData} />
    </Router>
  );

  // Check if all the elements are rendered correctly
  expect(screen.getByText(jobData.jobTitle)).toBeInTheDocument();
  expect(screen.getByText(jobData.jobDescription)).toBeInTheDocument();
  expect(screen.getByText(`${jobData.salary}$/hr`)).toBeInTheDocument();
  expect(screen.getByText(jobData.location)).toBeInTheDocument();
  expect(
    screen.getByText(`Your Application Status is ${jobData.applicationStatus}`)
  ).toBeInTheDocument();
  expect(screen.getByText("Show Details")).toBeInTheDocument();
});

// test("navigates to job details page when 'Show Details' button is clicked", () => {
//   const mockNavigate = jest.fn();
//   jest.mock("react-router-dom", () => ({
//     ...jest.requireActual("react-router-dom"),
//     useNavigate: () => mockNavigate,
//   }));

// render(
//   <Router>
//     <AppliedJobCard job={jobData} />
//   </Router>
// );

// // Simulate a click on the 'Show Details' button
// fireEvent.click(screen.getByText("Show Details"));

// // Check if the navigate function is called with the correct path
// expect(mockNavigate).toHaveBeenCalledWith(`/jobseeker/appliedlist/${jobData.id}`);
