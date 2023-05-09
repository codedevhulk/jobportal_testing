import styled from "styled-components";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import JobCard from "../components/JobCard";
import AdContent from "../ui/AdContent";
// import AddOnAboveSearchBar from "../components/addoncomponents/AddOnAboveSearchBar";

interface Job {
  title: string;
  company: string;
  salary: number;
  location: string;
}

interface HomePageProps {
  landing?: boolean;
}

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e0fbfc;
`;

const SearchBar = styled.input`
  width: 100%;
  max-width: 600px;
  padding: 10px;
  margin: 20px 0;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 5px #98c1d9;
  font-size: 16px;
  outline: none;
  margin-top: 50px;
  height: 30px;
  padding-left: 30px;
  font-family: "san-serif";
  color: rgba(0, 0, 0, 0.5);
  @media screen and (max-width: 700px) {
    width: 60%;
  }
`;

const JobCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  width: 100%;
  max-width: 1200px;
  padding: 20px;
`;

const jobData: Job[] = [
  {
    title: "Software Engineer",
    company: "Google",
    salary: 100000,
    location: "Mountain View, CA",
  },
  {
    title: "Frontend Developer",
    company: "Facebook",
    salary: 90000,
    location: "Menlo Park, CA",
  },
  {
    title: "Full Stack Developer",
    company: "Amazon",
    salary: 80000,
    location: "Seattle, WA",
  },
];

const HomePage: React.FC<HomePageProps> = ({ landing = false }) => {
  const onApply: () => void = () => {
    console.log("applied");
  };
  return (
    <HomePageContainer>
      <Header page="landing" />
      {/* <AddOnAboveSearchBar /> */}
      <SearchBar placeholder="Search for Jobs" type="text" />
      <JobCardContainer>
        {jobData.map((job, index) => (
          <JobCard key={index} job={{ ...job, onApply }} />
        ))}
      </JobCardContainer>
      <div>
        <AdContent />
      </div>
      <div>
        <Footer />
      </div>
    </HomePageContainer>
  );
};

export default HomePage;
