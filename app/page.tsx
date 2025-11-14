import Navbar from "./components/Navbar";
import Component1 from "./components/Component1";
import Offers from "./components/Offers";
import Banner from "./components/Banner";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
    <Component1 />
    <Offers />
    </div>
  );
}
