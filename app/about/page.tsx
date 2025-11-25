import AboutBanner from "../components/About/AboutBanner";
import Cards from "../components/About/Cards";
import CompanyProfile from "../components/About/CompanyProfile";
import MissionVision from "../components/About/MissionVision";
import LogoSlider from "../components/LogoSlider";
import { logos } from "../resources/logos";
const AboutPage = () => {
  return (
    <>
      <AboutBanner />
      <CompanyProfile />
      <MissionVision />
      <Cards />
      <div className="w-[95%] mx-auto flex flex-col gap-5">
        <h2 className="subHeading font-bold text-center">
          Brands we have dealt with
        </h2>
        <LogoSlider logos={logos} />
      </div>
    </>
  );
};
export default AboutPage;
