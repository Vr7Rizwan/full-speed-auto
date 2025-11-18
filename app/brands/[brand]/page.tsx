import { findBrand } from "@/app/resources/brands";

async function page({ params }: { params: { brand: string } }) {
  const data = await params;
  const selectedBrand = findBrand(data.brand);
  return <div>{selectedBrand?.heading}</div>;
}

export default page;
