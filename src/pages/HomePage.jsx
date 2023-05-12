import styled from "styled-components";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import AdContent from "../ui/AdContent";
import JobsContainer from "../components/jobservicecomponents/JobsContainer";
import SearchBarComponent from "../components/homepagecomponents/SearchBar";

// interface Job {
//   id: string;
//   title: string;
//   company: string;
//   salary: number;
//   location: string;
// }

// interface HomePageProps {
//   landing?: boolean;
// }

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e0fbfc;
`;

// const SearchBar = styled.input`
//   width: 100%;
//   max-width: 600px;
//   padding: 10px;
//   margin: 20px 0;
//   border: none;
//   border-radius: 4px;
//   box-shadow: 0px 0px 5px #98c1d9;
//   font-size: 16px;
//   outline: none;
//   margin-top: 50px;
//   height: 30px;
//   padding-left: 30px;
//   color: rgba(0, 0, 0, 0.6);
//   @media screen and (max-width: 700px) {
//     width: 60%;
//   }
// `;
const JobCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  width: 100%;
  max-width: 1200px;
  padding: 20px;
`;


const HomePage = ({ landing = false }) => {
  const onApply = () => {
    console.log("applied");
  };
  return (
    <HomePageContainer>
      <Header page="landing" />
      {/* <SearchBar placeholder="Search for Jobs" type="text" /> */}
      <SearchBarComponent/>
      <JobsContainer/>
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
