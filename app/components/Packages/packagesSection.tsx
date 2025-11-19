"use client";
function packagesSection() {
    const offerDetails = [
  {
    title: "BODY SHOP OFFERS",
    desc: "Now get 30% off on all bodyshop services while ensuring superior car care. T & C Apply",
    btn: "AVAIL OFFER",
    image: "/assets/packages/bodyshop.webp",
  },
  {
    title: "OIL SERVICE PACKAGE",
    desc: "This time we come up with huge offers on the oil service package starting from only PKR 8,999.",
    btn: "CHECK PACKAGE",
    image: "/images/oil-service.webp",
  },
  {
    title: "25% off on Major Services",
    desc: "Regardless of the model of your car, we are offering a 25% discount on any major service. Taking care of your vehicle just got easier. Don’t let this offer pass you by. T&C Apply",
    btn: "AVAIL OFFER",
    image: "/images/25-off-on-major-service.webp",
  },
 
];

   return (
    <section className="px-6 md:px-20 py-10 space-y-10">
      <h2 className="subHeading font-semibold">Offers</h2>

      {offerDetails.map((offer, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-primary shadow-md rounded-xl overflow-hidden"
        >
          {/* Left Image */}
          <div className="relative w-full h-60 md:h-full">
            <Image
              src={offer.image}
              alt={offer.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center p-6 space-y-4">
            <h3 className="subHeading font-bold text-secondary">{offer.title}</h3>
            <p className="text-txtColor">{offer.desc}</p>

            <button className="bg-txtColor text-primary py-3 rounded-md hover:bg-gray-700 transition">
              {offer.btn}
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default packagesSection
