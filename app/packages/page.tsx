import packageDetails from "../resources/packages";

function page() {
   return (
    <section>
      <div className="w-full h-64 bg-[url('/assets/packages/banner.webp')] bg-cover bg-center"></div>
      <div className='px-6 md:px-20 py-10 space-y-10'>
        <h2 className="heading font-semibold">Offers</h2>

      {packageDetails.map((pack, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-primary  rounded-xl overflow-hidden"
        >
          {/* Left Image */}
          <div className="relative w-full h-60 md:h-full">
            <img className='rounded-3xl' src={pack.image} alt="" />
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center p-6 space-y-4 bg-gray-100 rounded-3xl">
            <h3 className="subHeading font-bold text-secondary">{pack.title}</h3>
            <p className="text-txtColor">{pack.desc}</p>

            <button className="bg-txtColor text-primary py-3 rounded-md cursor-pointer hover:bg-secondary transition">
              {pack.btn}
            </button>
          </div>
        </div>
      ))}
      </div>
    </section>
  );
}
    
  


export default page
