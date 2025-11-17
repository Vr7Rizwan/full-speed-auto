import Navbar from "./components/Navbar";
import ShowCasePlan from "./components/ShowCasePlan";
import Offers from "./components/Offers";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import WhyChooseUS from "./components/WhyChooseUS";
<<<<<<< Updated upstream
import CarWorkshopForm from "./components/CarWorkshopForm";
=======
import Faq from "./components/Faq";

>>>>>>> Stashed changes

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <ShowCasePlan />
      <Offers />
<<<<<<< Updated upstream
      {/* <<<<<<< Updated upstream */}
      {/* ======= */}
      <WhyChooseUS />
      <CarWorkshopForm />
      <Footer />
      {/* >>>>>>> Stashed changes */}
=======
      <WhyChooseUS />
      <Faq />
      <Footer />
>>>>>>> Stashed changes
    </div>
  );
}
