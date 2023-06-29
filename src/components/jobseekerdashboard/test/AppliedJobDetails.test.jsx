import { BrowserRouter as Router } from "react-router-dom";
import { screen, render, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import AppliedJobDetails from "../AppliedJobDetails";

const jobDetails = {
  firstName: "Anil",
  lastName: "Kumar",
  email: "dojsh@mail.com",
  jobseekerQualification: "btech",
  jobseekerSkillset: "javascript",
  jobseekerExperience: "2 years",
  jobtitle: "Javascript Developer",
  jobDescription: "Required 2 years of experience in ecmascript",
  requiredExperience: "2 years",
  applicationStatus: "pending",
};

describe("testing appliedJobDetails component", () => {
  test("check applied job details data rendering correctly", async () => {
    render(
      <Router>
        <AppliedJobDetails />
      </Router>
    );
    const jobApplicationByApplicationId = jest.fn(async () => {
      return await jobDetails;
    });

    await waitFor(() => {
      const firstnameLabelEl = screen.getByText(/firstname/i);
      const firstnameValueEl = screen.getByText(/`${jobDetails.firstName}`/i);

      const lastnameLabelEl = screen.getByText(/lastname/i);
      const lastnameValueEl = screen.getByText(/`${jobDetails.lastName}`/i);

      const emailLabelEl = screen.getByText(/email/i);
      const emailValueEl = screen.getByText(/`${jobDetails.email}`/i);

      const jobseekerQualificationLabelEl = screen.getByText(
        /jobseekerQualification/i
      );
      const jobseekerQualificationValueEl = screen.getByText(
        /`${jobDetails.jobseekerQualification}`/i
      );

      const jobseekerSkillsetLabelEl = screen.getByText(/jobseekerskillset/i);
      const jobseekerSkillsetValueEl = screen.getByText(
        /`${jobDetails.jobseekerSkillset}`/i
      );

      const jobseekerExperienceLabelEl =
        screen.getByText(/jobseekerexperience/i);
      const jobseekerExperienceValueEl = screen.getByText(
        /`${jobDetails.jobseekerExperience}`/i
      );

      const jobtitleLabelEl = screen.getByText(/jobtitle/i);
      const jobtitleValueEl = screen.getByText(/`${jobDetails.jobtitle}`/i);

      const jobDescriptionLabelEl = screen.getByText(/jobdescription/i);
      const jobDescriptionValueEl = screen.getByText(
        /`${jobDetails.jobDescription}`/i
      );

      const requiredExperienceLabelEl = screen.getByText(/requiredexperience/i);
      const requiredExperienceValueEl = screen.getByText(
        /`${jobDetails.requiredExperience}`/i
      );

      const applicationStatusLabelEl = screen.getByText(/applicationstatus/i);
      const applicationStatusValueEl = screen.getByText(
        /`${jobDetails.applicationStatus}`/i
      );
    });
  });
});
