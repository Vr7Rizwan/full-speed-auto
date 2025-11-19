import React from 'react'

const Hero = ({
    heading,
    heroTxt,
    description,
    whyChooseUs,
    contentimg,
    features
}: {
    heading: string,
    heroTxt: string,
    description: string[],
    whyChooseUs: string[],
    contentimg: string,
    features: string[];
}) => {
    return (
        <div className="flex flex-col justify-center p-5 md:p-10 gap-5">

            {/* TOP SECTION */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-0">

                {/* LEFT TEXT */}
                <div className="flex flex-col gap-6 md:gap-8 md:pr-10 md:w-[70%] w-full">
                    <h1 className="heading text-secondary font-bold">{heading}</h1>

                    {/* Description array ko handle karna */}
                    <div className="flex flex-col gap-2">
                        {description.map((desc, index) => (
                            <p key={index} className="normalText">{desc}</p>
                        ))}
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="md:w-[30%] w-full flex justify-center md:justify-end">
                    <img
                        src={contentimg}
                        alt=""
                        className="w-full max-w-[280px] md:max-w-full object-cover"
                    />
                </div>
            </div>

            {/* Subheading */}
            <h2 className="subHeading text-txtColor font-semibold">{heroTxt}</h2>

            {/* Why Choose Us */}
            <ul className="list-disc pl-5 space-y-2">
                {whyChooseUs.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            {/* Middle Image */}
            <img
                src="/assets/services/discountimg.webp"
                className="w-full p-3 md:p-10"
                alt=""
            />

            {/* Features */}
            <h2 className="heading text-secondary font-bold pt-5 md:pt-10">Our Features</h2>

            <ul className="list-disc pl-5 space-y-2">
                {features.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Hero;
