import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AppliedJobCard from "../AppliedJobCard";

const jobData = {
  id: "1",
  jobTitle: "Software Engineer",
  jobDescription: "Lorem ipsum dolor sit amet",
  salary: 50000,
  location: "New York",
  applicationStatus: "Pending",
};

describe("testing AppliedJobCard", () => {
  test("renders job card  correctly", () => {
    render(
      <BrowserRouter>
        <AppliedJobCard job={jobData} />
      </BrowserRouter>
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

  test("navigate to /jobseeker/appliedlist/ when Show Details button is clicked", () => {
    render(
      <BrowserRouter>
        <AppliedJobCard job={jobData} />
      </BrowserRouter>
    );

    const showDetailsButton = screen.getByText("Show Details");
    fireEvent.click(showDetailsButton);
    console.log(window.location.pathname);

    setTimeout(() => {
      expect(window.location.pathname).toBe(
        `/jobseeker/appliedlist/${jobData.id}`
      );
    }, 500);
  });

  test("branch null", () => {
    render(
      <BrowserRouter>
        <AppliedJobCard job={{ ...jobData, salary: null }} />
      </BrowserRouter>
    );

    const pEl = screen.queryByTestId("salary");
    expect(pEl).toBeEmptyDOMElement();
  });
});
