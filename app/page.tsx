import Navbar from "./components/Navbar";
import ShowCasePlan from "./components/ShowCasePlan";
import Offers from "./components/Offers";
import Banner from "./components/Banner";
// <<<<<<< Updated upstream
import Footer from "./components/Footer";
// =======
import WhyChooseUS from "./components/WhyChooseUS";

// >>>>>>> Stashed changes
export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <ShowCasePlan />
      <Offers />
{/* <<<<<<< Updated upstream */}
{/* ======= */}
      <WhyChooseUS />
      <Footer />
{/* >>>>>>> Stashed changes */}
    </div>
  );
}
