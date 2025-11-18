// companyprofile
interface companyprofileType{
    paragraphs:string;
}

export const companyprofile:companyprofileType[]=[
    {
        paragraphs:"“Royal Swiss Auto Services — A one stop shop for auto repair needs in the UAE”."
    },
    {
        paragraphs:"Royal Swiss Auto Services was established in 2019 to serve our clients to higher standards of repair than what car dealerships provide, and at more competitive prices."
    },
    {
        paragraphs:"Now, we have 6 branches, 2 in Dubai, one in Abu Dhabi, Sharjah, Al Ain & Ras Al Khaimah. To make the vehicle services easier for our customers across GCC, We are planning to expand further."
    },
    {
        paragraphs:"We provide all the same repairs and services as the dealer-owned workshops of luxury cars, but with our own unbeatable benefits like affordable pricing and convenient scheduling. We are not just the alternative, but the service center of choice for luxury car repairs and service in UAE!"
    },
    {
        paragraphs:" With over 18 years of combined dealership experience, our team handles anything our customers’ vehicles can throw at us. Whether you drive a brand new or old car, and whether it needs scheduled maintenance or extensive engine work, you can count on us to provide quality repairs. The best part is that our customers receive these dealership-quality auto repairs for their vehicle without the inflated prices."
    },
    {
        paragraphs:"Our state-of-the-art, independently owned and operated auto repair service center, garage and workshop does not operate the same way as the dealer’s, which means we are able to offer our expertise and workmanship at a much lower cost — sometimes even half the cost of the dealership repair/ service without compromising the quality."
    },
    {
        paragraphs:"We have recently launched our mobile app, which enables you to schedule your service with just a click from anywhere."
    },
    {
        paragraphs:"The high quality service that we provide has earned the 5 star ESMA Certification & ISO Certification, which is the testament to our success."
    },
]

// CompanyServices
interface companyservicesType{
    heading:string;
    description:string;
    subheading:string;
    services:string[];
}
export const companyservices:companyservicesType=
    {
        heading:"FACILITIES AND SERVICE QUALITY",
        description:"At Our Luxury Car service Center in UAE, your comfort is our priority, we strive to make you feel good! Relax and let us take good care of your vehicle.",
        subheading:"We have:",
        services:[
            "Engine room dedicated to engine repair, engine refurbishment, or engine replacement.",
            "Highly qualified and experienced technicians specialized each of them on the brands we serve and main parts of the car.",
            "Spare parts department and own storage, with available parts on stock and dedicated teams. We track and ship our spare parts at the best rates!",
            "A professional and multi-cultural team, we speak your language!",
            "Warranty certificates for 12 months for both labour and parts work.",
            "A very sophisticated CRM system to keep the history of your car saved forever.",
            "Up to 15000 different spare parts available on stock.",
            "Easy and fast access.",
            "Intelligent security system equipped with CCTV cameras.",
            "Waiting area for men.",
            "Waiting area for ladies.",
            "AC, Free WI-FI and TVs.",
            "Dedicated service advisor and free recovery for ladies.",
            "Free EV Charging station."
        ]
    }
    // missionvision
    interface missionvisionType{
        heading:string;
        description:string;
    }
   export const missionvision:missionvisionType[]=[
        {
            heading:"OUR VISION",
            description:"Become one of the leading car repair workshops in Dubai and the UAE."
        },
        {
            heading:"OUR MISSION",
            description:"Our Mission takes our vision statement a stage further and describes how we will achieve our vision. We aim to provide a safe and enjoyable workplace for our employees, and an ethical environment that creates opportunity for all, and an extraordinary service to our customers, suppliers, and clients along the UAE and the Middle East."
        }
    ]
    interface cardsType{
        icon:string;
        heading:string;
        description:string;
    }
export const cards:cardsType[]=[
    {
        icon:"/assets/Card1.webp",
        heading:"EXPERIENCED",
        description:"Masters of our craft based on many years of practical experience, offering you an outstanding service."

    },
    {
        icon:"/assets/Card2.webp",
        heading:"HIGHLY QUALIFIED",
        description:"We will connect you with the best experts! Our highly qualified staff will value your vehicle and needs and take care of the smallest details. Guaranteed satisfaction!"

    },
    {
        icon:"/assets/Card3.webp",
        heading:"CREDIBLE",
        description:"We always provide our services with honesty, reliability, and respect."

    },
    {
        icon:"/assets/Card4.webp",
        heading:"AVAILABILITY",
        description:"Very approachable and responsive, we are always happy to answer any questions about the repair process or anything else you have in mind. You will never feel ignored. We have got your back!."

    },
    {
        icon:"/assets/Card5.webp",
        heading:"SERVICE",
        description:"we combine quality workmanship with courteous and professional service. We are always happy to answer any questions about the repair process. We promise we will exceed all your expectations."

    },
    {
        icon:"/assets/Card6.webp",
        heading:"PROFESSIONALISM & CREDIBILITY",
        description:"we always provide our services with honesty, reliability, and respect."
     }
]
