import Banner from "./components/Banner";
import WhyChooseUS from "./components/WhyChooseUS";
import CarWorkshopForm from "./components/CarWorkshopForm";
import Faq from "./components/Faq";
import faq from "./resources/faq";
import whyChooseUs from "./resources/whyChooseUs";
import Services from "./components/Services";
import { commonServices } from "./resources/brands";
import LogoSlider from "./components/LogoSlider";
import { logos } from "./resources/logos";

export default function Home() {
  return (
    <div>
      <Banner />
      <Services Services={commonServices} />
      <WhyChooseUS whyChooseUs={whyChooseUs} />
      <Faq faq={faq} />
      <div className="w-[95%] mx-auto flex flex-col gap-7 md:gap-10 py-7 md:py-10">
        <h2 className="subHeading font-bold text-center">
          <span className="text-secondary">Brands</span> we have dealt with
        </h2>
        <LogoSlider logos={logos} />
      </div>
      <CarWorkshopForm />
    </div>
  );
}
