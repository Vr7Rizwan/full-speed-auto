import AboutBanner from "../components/About/AboutBanner";
import Cards from "../components/About/Cards";
import CompanyProfile from "../components/About/CompanyProfile";
import MissionVision from "../components/About/MissionVision";
import CarWorkshopForm from "../components/CarWorkshopForm";
import LogoSlider from "../components/LogoSlider";
import { logos } from "../resources/logos";
const AboutPage = () => {
  return (
    <>
      <AboutBanner />
      <CompanyProfile />
      <MissionVision />
      <div className="w-[95%] mx-auto flex flex-col gap-7 md:gap-10 py-7 md:py-10">
        <h2 className="subHeading font-bold text-center">
          <span className="text-secondary">Brands</span> we have dealt with
        </h2>
        <LogoSlider logos={logos} />
      </div>
      <Cards />
      <CarWorkshopForm/>
    </>
  );
};
export default AboutPage;
