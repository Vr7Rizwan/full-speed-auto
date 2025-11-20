import ShowCasePlan from "./components/ShowCasePlan";
import Offers from "./components/Offers";
import Banner from "./components/Banner";
import WhyChooseUS from "./components/WhyChooseUS";
import CarWorkshopForm from "./components/CarWorkshopForm";
import Faq from "./components/Faq";
import faq from "./resources/faq";
import whyChooseUs from "./resources/whyChooseUs";

export default function Home() {
  return (
    <div>
      <Banner />
      <ShowCasePlan />
      <Offers />
      <WhyChooseUS whyChooseUs={whyChooseUs} />
      <Faq faq={faq} />
      <CarWorkshopForm />
      
    </div>
  );
}
