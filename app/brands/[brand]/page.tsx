import Banner from "@/app/components/Brands/Banner";

async function page({ params }: { params: { brand: string } }) {
  const data = await params;
  return (
    <div>
      <Banner brand={data.brand} />
    </div>
  );
}

export default page;
