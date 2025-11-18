import AboutBanner from "../components/About/AboutBanner"
import Cards from "../components/About/Cards"
import CompanyProfile from "../components/About/CompanyProfile"
import CompanyServices from "../components/About/CompanyServices"
import MissionVision from "../components/About/MissionVision"
const AboutPage=()=>{
    return(
        <>
        <AboutBanner/>
        <CompanyProfile/>
        <CompanyServices/>
        <MissionVision/>
         <Cards/>
        </>
    )
}
export default AboutPage