import Banner from "@/app/components/Services/Banner";
import Hero from "@/app/components/Services/Hero";
import CarWorkshopForm from "@/app/components/CarWorkshopForm";
import { findService } from "@/app/resources/services";
import WhyChooseUS from "@/app/components/WhyChooseUS";
import Faq from "@/app/components/Faq";
import { whyChooseUsTypes } from "@/app/resources/whyChooseUs";
import OurFeatures from "@/app/components/Services/Features";

export async function generateMetadata({ params }: { params: { service: string } }) {
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
    return <div>
        <Banner banner={selectedService.banner} />
        <Hero
            heading={selectedService.heading}
            heroTxt={selectedService.heroText}
            description={selectedService.description}
            contentimg={selectedService.contentimg} />
        <WhyChooseUS whyChooseUs={whychooseus} />
        <OurFeatures features={selectedService.features} />
        <Faq faq={selectedService.faqs} />
        <CarWorkshopForm />

    </div>;
};

export default page;
