
import Banner from "./components/Banner";
import WhyChooseUS from "./components/WhyChooseUS";
import CarWorkshopForm from "./components/CarWorkshopForm";
import Faq from "./components/Faq";
import faq from "./resources/faq";
import whyChooseUs from "./resources/whyChooseUs";
import Services from "./components/Services";
import { commonServices } from "./resources/brands";

export default function Home() {
  return (
    <div>
      <Banner />
      <Services Services={commonServices} />
      <WhyChooseUS whyChooseUs={whyChooseUs} />
      <Faq faq={faq} />
      <CarWorkshopForm />
    </div>
  );
}
