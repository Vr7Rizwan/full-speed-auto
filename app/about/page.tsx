import AboutBanner from "../components/About/AboutBanner";
import Cards from "../components/About/Cards";
import CompanyProfile from "../components/About/CompanyProfile";
import MissionVision from "../components/About/MissionVision";
import BrandServices from "../components/Brands/BrandServices";
import { commonServices } from "../resources/brands";
const AboutPage = () => {
  return (
    <>
      <AboutBanner />
      <CompanyProfile />
      <BrandServices Services={commonServices} />
      <MissionVision />
      <Cards />
    </>
  );
};
export default AboutPage;
