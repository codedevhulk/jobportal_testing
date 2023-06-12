import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AppliedJobDetails from "../AppliedJobDetails";
import { jobApplicatonsOfJobseeker } from "../../../service/jobSeekerService";

jest.mock("../../../service/jobSeekerService", () => ({
  jobApplicatonsOfJobseeker: jest.fn(),
}));

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
  useParams: () => ({ id: "1" }),
}));

test("renders applied job details correctly", async () => {
  const applicationDetails = {
    id: "1",
    jobTitle: "Software Engineer",
    jobDescription: "Lorem ipsum dolor sit amet",
    salary: 50000,
    location: "New York",
    applicationStatus: "Pending",
  };

  jobApplicatonsOfJobseeker.mockResolvedValueOnce([applicationDetails]);

  render(
    <Router>
      <AppliedJobDetails />
    </Router>
  );

  // Wait for the data to be fetched and rendered
  await screen.findByText("Applied Job Detail");

  // Check if all the details are rendered correctly
  expect(screen.getByText(applicationDetails.jobTitle)).toBeInTheDocument();
  expect(screen.getByText(applicationDetails.jobDescription)).toBeInTheDocument();
  expect(screen.getByText(`${applicationDetails.salary}`)).toBeInTheDocument();
  expect(screen.getByText(applicationDetails.location)).toBeInTheDocument();
  expect(screen.getByText(applicationDetails.applicationStatus)).toBeInTheDocument();
});

test("navigates back when 'BACK' button is clicked", () => {
  render(
    <Router>
      <AppliedJobDetails />
    </Router>
  );

  // Simulate a click on the 'BACK' button
  screen.getByText("BACK").click();

  // Check if the navigate function is called to go back
  expect(mockNavigate).toHaveBeenCalledWith(-1);
});
