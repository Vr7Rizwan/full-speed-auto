import Banner from "@/app/components/Brands/Banner";
import BrandDetail from "@/app/components/Brands/BrandDetail";
import BrandServices from "@/app/components/Brands/BrandServices";
import WhyChooseUs from "@/app/components/Brands/WhyChooseUs";
import CarWorkshopForm from "@/app/components/CarWorkshopForm";
import Faq from "@/app/components/Faq";
import WhyChooseUS from "@/app/components/WhyChooseUS";
import { findBrand } from "@/app/resources/brands";

export async function generateMetadata({ params }: { params: { brand: string } }) {
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
  return <div>
     <Banner banner={selectedBrand?.banner}/>
     <BrandDetail heading={selectedBrand?.heading} heroText={selectedBrand?.heroText} description={selectedBrand?.description}  />
     <BrandServices Services={selectedBrand?.services} />
     {/* <WhyChooseUs whychooseus={selectedBrand?.whyChooseUs}/> */}
     <WhyChooseUS whyChooseUs={selectedBrand?.whyChooseUs} />
     <Faq faq={selectedBrand?.faqs}/>
     <CarWorkshopForm />
  </div>;
}

export default page;
