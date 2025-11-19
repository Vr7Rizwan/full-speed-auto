import Banner from "@/app/components/Services/Banner";
import Hero from "@/app/components/Services/Hero";
import CarWorkshopForm from "@/app/components/CarWorkshopForm";
import { findService } from "@/app/resources/services";

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
    return <div>
        <Banner banner={selectedService.banner} />
        <Hero
            heading={selectedService.heading}
            heroTxt={selectedService.heroText}
            description={selectedService.description}
            whyChooseUs={selectedService.whyChooseUs}
            features={selectedService.features}
            contentimg={selectedService.contentimg} />
        <CarWorkshopForm />
    </div>;
};

export default page;
