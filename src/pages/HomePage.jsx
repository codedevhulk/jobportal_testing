import styled from "styled-components";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import AdContent from "../ui/AdContent";
import JobsContainer from "../components/jobservicecomponents/JobsContainer";
import SearchBarComponent from "../components/SearchBar";



const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e0fbfc;
`;




const HomePage = ({ landing = false }) => {
  
  return (
    <HomePageContainer>
      <Header page="landing" />
      <SearchBarComponent/>
      <JobsContainer/>
        <AdContent />
        <Footer />
    </HomePageContainer>
  );
};

export default HomePage;
