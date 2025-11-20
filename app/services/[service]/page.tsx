import Banner from "@/app/components/Services/Banner";
import Hero from "@/app/components/Services/Hero";
import CarWorkshopForm from "@/app/components/CarWorkshopForm";
import { findService } from "@/app/resources/services";
import WhyChooseUS from "@/app/components/WhyChooseUS";
import { whyChooseUsTypes } from "@/app/resources/whyChooseUs";

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
            features={selectedService.features}
            contentimg={selectedService.contentimg} />
        <WhyChooseUS whyChooseUs={whychooseus} />
        <CarWorkshopForm />

    </div>;
};

export default page;
