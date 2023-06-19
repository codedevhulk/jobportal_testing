import React from "react";
import { render, screen } from "@testing-library/react";
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
describe("AppliedJobCard Test", () => {
  test("renders job card correctly", () => {
    render(
      <Router>
        <AppliedJobCard job={jobData} />
      </Router>
    );

    expect(screen.getByText(jobData.jobTitle)).toBeInTheDocument();
    expect(screen.getByText(jobData.jobDescription)).toBeInTheDocument();
    expect(screen.getByText(`${jobData.salary}$/hr`)).toBeInTheDocument();
    expect(screen.getByText(jobData.location)).toBeInTheDocument();
    expect(
      screen.getByText(
        `Your Application Status is ${jobData.applicationStatus}`
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Show Details")).toBeInTheDocument();
  });
});
