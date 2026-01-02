import Banner from "@/app/components/Brands/Banner";
import BrandDetail from "@/app/components/Brands/BrandDetail";
import Services from "@/app/components/Services";
import CarWorkshopForm from "@/app/components/CarWorkshopForm";
import Faq from "@/app/components/Faq";
import WhyChooseUS from "@/app/components/WhyChooseUS";
import { commonServices, findBrand } from "@/app/resources/brands";
import WhatCanYouExpect from "@/app/components/Brands/WhatCanYouExpect";
import Facilities from "@/app/components/Brands/Facilities";

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
    alternates: {
      canonical: `https://www.speedfullauto.com/brands/${data.brand}`,
    },
  };
}
async function page({ params }: { params: { brand: string } }) {
  const data = await params;
  const selectedBrand = findBrand(data.brand);
  return !selectedBrand ? (
    <div className="h-[50vh] flex justify-center items-center">
      <h1 className="heading">404 : Page not found!</h1>
    </div>
  ) : (
    <div>
      <section className="relative">
        <Banner banner={selectedBrand?.banner} />
        <h1 className="heading block md:text-primary md:bg-txtColor md:backdrop-blur-[2px] rounded-2xl w-[92%] md:w-[95%] mx-auto md:text-center md:py-10 leading-relaxed font-semibold md:absolute md:left-1/2 md:-translate-x-1/2 md:top-full md:-translate-y-1/2">
          {selectedBrand?.heading}
        </h1>
      </section>
      <BrandDetail
        heroText={selectedBrand?.heroText}
        description={selectedBrand?.description}
      />
      <Services
        Services={commonServices}
        brand={selectedBrand?.name}
        expertService={selectedBrand?.expertServices}
      />
      <section className="flex flex-col gap-5 w-[95%] mx-auto py-5">
        <WhatCanYouExpect whatToExpect={selectedBrand?.whatToExpect} />
        <Facilities
          facilities={selectedBrand?.facilities}
          brand={selectedBrand?.name}
        />
      </section>
      <WhyChooseUS whyChooseUs={selectedBrand?.whyChooseUs} />
      <Faq faq={selectedBrand?.faqs} />
      <CarWorkshopForm />
    </div>
  );
}

export default page;
