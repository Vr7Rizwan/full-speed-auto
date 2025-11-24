const BrandServices = ({ Services }: { Services: string[] | undefined }) => {
    return (
        <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
            {Services && (
                <div>
                    <div className="text-center mb-12">
                        <h1 className="heading md:text-4xl font-bold text-txtColor mb-3">
                            Our Services
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
                            Premium services designed to maintain, repair, and enhance your vehicle.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Services.map((value, i) => (
                            <div
                                key={`${value} ${i}`}
                                className="bg-primary flex flex-col rounded-2xl shadow-md hover:shadow-lg 
                                transition-all p-8 text-center border border-gray-200"
                            >
                                <h3 className="subHeading font-semibold text-txtColor mb-2">
                                    {value}
                                </h3>

                                <p className="text-gray-600 normalText leading-relaxed">
                                    High-quality service ensuring top performance and reliability.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

export default BrandServices;
