async function page({ params }: { params: { brand: string } }) {
  const data = await params;
  return <div>{data.brand}</div>;
}

export default page;
