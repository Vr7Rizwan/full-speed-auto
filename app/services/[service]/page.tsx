import Banner from "@/app/components/Services/Banner";
import Hero from "@/app/components/Services/Hero";
import CarWorkshopForm from "@/app/components/CarWorkshopForm";
import { findService } from "@/app/resources/services";
import WhyChooseUS from "@/app/components/WhyChooseUS";
import Faq from "@/app/components/Faq";
import { whyChooseUsTypes } from "@/app/resources/whyChooseUs";
import OurFeatures from "@/app/components/Services/Features";

export async function generateMetadata({
  params,
}: {
  params: { service: string };
}) {
  const data = await params;
  const selectedService = findService(data.service);
  return {
    title: selectedService?.seoTitle || "Default Brand Title",
    description: selectedService?.seoDescription || "Default Brand Description",
  };
}

const page = async ({ params }: { params: { service: string } }) => {
  const data = await params;
  const selectedService = findService(data.service);
  if (!selectedService) {
    return <div>Service not found</div>;
  }
  const whychooseus: whyChooseUsTypes[] = selectedService.whyChooseUs;
  return (
    <div className="bg-gray-50">
      <section className="relative">
        <Banner banner={selectedService.banner} />
        <h1 className="heading hidden md:block text-primary bg-txtColor backdrop-blur-[2px] rounded-2xl w-[95%] text-center py-10 leading-relaxed font-semibold absolute left-1/2 -translate-x-1/2 top-full -translate-y-1/2">
          {selectedService.heading}
        </h1>
      </section>
      <h1 className="block md:hidden bg-gray-50 w-[92%] md:w-[95%] mx-auto pt-7 heading text-txtColor font-semibold">
        {selectedService.heading}
      </h1>
      <Hero
        heroTxt={selectedService.heroText}
        description={selectedService.description}
        subheading={selectedService.subheading}
        contentimg={selectedService.contentimg}
      />
      <WhyChooseUS whyChooseUs={whychooseus} />
      <OurFeatures features={selectedService.features} />
      <Faq faq={selectedService.faqs} />
      <CarWorkshopForm />
    </div>
  );
};

export default page;
