import offers from "../resources/offers";

function Offers() {
  return (
    <div className="bg-gray-50">
      <div className="flex flex-col gap-5 px-5 py-15 items-center md:items-center md:justify-center">
        <h1 className="text-txtColor subHeading font-bold">WHAT WE OFFER</h1>
        <h2 className="text-txtColor heading text-center font-extrabold">
          To Our Customers At Our Luxury Car Service Center in Dubai
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-3"
          >
            <img
              src={offer.image}
              alt={offer.title}
              className="w-30 h-30 object-contain"
            />

            <h2 className="subHeading text-txtColor font-bold">
              {offer.title}
            </h2>

            <div className="text-txtColor space-y-1">
              {offer.text.map((item, i) => (
                <p className="normalText" key={i}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offers;
