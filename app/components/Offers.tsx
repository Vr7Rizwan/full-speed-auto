

function Offers() {
    const offers = [
        {
            title:"Mechanical Services",
            image:"/assets/offer1.webp",
            text:["Axle/ Driveshaft Repair",
                "Brake Repair",
                "Gearbox Repair",
                "Suspension Repair",
                "Transmission Repair"
            ]
        },
        {
            title:"Electrical Services",
            image:"/assets/offer2.webp",
            text:["AC Repair",
                "Comfort System Repair"
            ]
        },
        {
            title:"Programming & Retrofit",
            image:"/assets/offer3.webp",
            text:["Car Software Repair & Programming",
                "Camera / Radar Calibration"
            ]
        },
        {
            title:"Engine Repair Services",
            image:"/assets/offer4.webp",
            text:["Engine Control Unit Repair","Engine Cooling System Repair","Engine Cooling System Repair"]
        },
        {
            title:"Service Packages",
            image:"/assets/offer5.webp",
            text:["Luxury Car Service Packages","Service & Warranty Packages"]
        },
        {
            title:"Extended Warranty",
            image:"/assets/offer6.webp",
            text:["New Cars Warranty Packages","Pre-Owned Cars Warranty Packages","Luxury Cars Warranty Packages"]
        },

    ]
  return (
    <div className='bg-primary'>
      <div className='flex flex-col gap-5 px-5 py-5 items-center md:items-center md:justify-center'>
        <p className='text-secondary text-3xl  font-bold'>WHAT WE OFFER</p>
        <h1 className='text-txtColor text-4xl text-center font-extrabold'>To Our Customers At Our Luxury Car Service Center in Dubai</h1>
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

          <h2 className="text-3xl text-txtColor font-bold">
            {offer.title}
          </h2>

          <div className="text-txtColor space-y-1">
            {offer.text.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Offers
