import Navbar from "./components/Navbar";
import ShowCasePlan from "./components/ShowCasePlan";
import Offers from "./components/Offers";
import Banner from "./components/Banner";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <ShowCasePlan />
      <Offers />
    </div>
  );
}
