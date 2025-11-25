import AboutBanner from "../components/About/AboutBanner";
import Cards from "../components/About/Cards";
import CompanyProfile from "../components/About/CompanyProfile";
import MissionVision from "../components/About/MissionVision";
import Services from "../components/Services";
import { commonServices } from "../resources/brands";
const AboutPage = () => {
  return (
    <>
      <AboutBanner />
      <CompanyProfile />
      
      <MissionVision />
      <Cards />
    </>
  );
};
export default AboutPage;
