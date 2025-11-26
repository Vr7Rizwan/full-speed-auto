

export default function OurFeatures({ features }: { features: { icon: string; title: string; desc: string; }[] }) {
    return (
        <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
            <div className="text-center mb-12">
                <h2 className="subHeading font-bold txtColor mb-3">
                    Our Features
                </h2>
                <p className="txtColor max-w-2xl mx-auto text-base md:text-lg">
                    Why customers trust our services - premium quality, reliability, and professionalism.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((item, index) => (
                    <div
                        key={index}
                        className="bg-primary rounded-2xl shadow-md hover:shadow-lg transition-all p-8 text-center border border-secondary"
                    >
                        <div className="w-13 h-13 mx-auto mb-5 flex items-center justify-center">
                            <img src={item.icon} alt="" />
                        </div>

                        <h3 className="subHeading font-semibold txtColor mb-2">
                            {item.title}
                        </h3>

                        <p className="txtColor normalText leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}