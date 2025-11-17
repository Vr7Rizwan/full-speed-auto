import Navbar from "./components/Navbar";
import ShowCasePlan from "./components/ShowCasePlan";
import Offers from "./components/Offers";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import WhyChooseUS from "./components/WhyChooseUS";
import CarWorkshopForm from "./components/CarWorkshopForm";
import Faq from "./components/Faq";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <ShowCasePlan />
      <Offers />
      <WhyChooseUS />
      <Faq />
      <CarWorkshopForm />
      <Footer />
    </div>
  );
}
