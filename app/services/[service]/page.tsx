import { findService } from "@/app/resources/services";

const page = async ({ params }: { params: { service: string } }) => {
  const data = await params;
  const selectedService = findService(data.service);
  if (!selectedService) {
    return <div>Service not found</div>;
  }
  return <div>{selectedService.name}</div>;
};

export default page;
