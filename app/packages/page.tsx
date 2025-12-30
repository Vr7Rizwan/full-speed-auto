import CarWorkshopForm from "../components/CarWorkshopForm";
import ContactBtn from "../components/ContactBtn";
import packageDetails from "../resources/packages";

export async function generateMetadata() {
  return {
    alternates: {
      canonical: `https://www.speedfullauto.com/packages`,
    },
  };
}
function page() {
  return (
    <section>
      <div className="w-full overflow-hidden">
        <img
          src="/assets/packages/banner.webp"
          alt="Hero"
          className="w-full max-h-[400px] object-cover"
        />
      </div>

      <div className="px-6 md:px-20 py-10 space-y-10">
        <h2 className="heading font-semibold">Offers</h2>

        {packageDetails.map((pack, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 md:gap-6 md:bg-primary  bg-gray-100 rounded-2xl md:rounded-xl overflow-hidden"
          >
            {/* Left Image */}
            <div className="relative w-full md:h-full">
              <img className="md:rounded-3xl" src={pack.image} alt="" />
            </div>

            {/* Right Content */}
            <div className="flex flex-col justify-center p-8 space-y-4 md:bg-gray-100 md:rounded-3xl">
              <h3 className="subHeading font-bold text-txtColor">
                {pack.title}
              </h3>
              <p className="text-txtColor">{pack.desc}</p>
              <ContactBtn
                text={pack.btn}
                classes="bg-txtColor text-primary px-3 py-3 rounded-md cursor-pointer hover:bg-secondary transition hover:text-txtColor"
              />
            </div>
          </div>
        ))}
      </div>
      <CarWorkshopForm />
    </section>
  );
}

export default page;
