import Banner from "@/app/components/Brands/Banner";
import BrandDetail from "@/app/components/Brands/BrandDetail";
import BrandServices from "@/app/components/Services";
import CarWorkshopForm from "@/app/components/CarWorkshopForm";
import Faq from "@/app/components/Faq";
import WhyChooseUS from "@/app/components/WhyChooseUS";
import { commonServices, findBrand } from "@/app/resources/brands";

export async function generateMetadata({
  params,
}: {
  params: { brand: string };
}) {
  const data = await params;
  const selectedBrand = findBrand(data.brand);
  return {
    title: selectedBrand?.seoTitle || "Default Brand Title",
    description: selectedBrand?.seoDescription || "Default Brand Description",
  };
}
async function page({ params }: { params: { brand: string } }) {
  const data = await params;
  const selectedBrand = findBrand(data.brand);
  return (
    <div>
      <section className="relative">
        <Banner banner={selectedBrand?.banner} />
        <h1 className="heading hidden md:block text-primary bg-txtColor/75 backdrop-blur-[2px] rounded-2xl w-[95%] text-center py-10 leading-relaxed font-semibold absolute left-1/2 -translate-x-1/2 top-full -translate-y-1/2">
          {selectedBrand?.heading}
        </h1>
      </section>
      <h1 className="block md:hidden w-[92%] md:w-[95%] mx-auto pt-7 heading text-txtColor font-semibold">
        {selectedBrand?.heading}
      </h1>
      <BrandDetail
        heroText={selectedBrand?.heroText}
        description={selectedBrand?.description}
      />
      <BrandServices Services={commonServices} />
      <WhyChooseUS whyChooseUs={selectedBrand?.whyChooseUs} />
      <Faq faq={selectedBrand?.faqs} />
      <CarWorkshopForm />
    </div>
  );
}

export default page;
