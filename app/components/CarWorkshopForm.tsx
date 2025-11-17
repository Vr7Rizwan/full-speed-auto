import React from "react";

const CarWorkshopForm = () => {
    return (
        <section className="w-full flex flex-col md:flex-row items-center justify-center bg-gray-50 py-16 px-6 md:px-12 lg:px-20 gap-8">

            {/* Left Image */}
            <div className="w-full h-full md:w-1/2">
                <img
                    src="assets\car-workshop.jpg"
                    alt="Car Workshop"
                    className="w-full h-full object-cover rounded-lg shadow-md"
                />
            </div>

            {/* Right Form */}
            <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-md">
                <h2 className="subHeading font-bold mb-6 text-txtColor">
                    Book Your Car Service
                </h2>
                <form className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                    <input
                        type="text"
                        placeholder="Car Model"
                        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                    />

                    <textarea
                        placeholder="Additional Details"
                        rows={4}
                        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-secondary cursor-pointer text-white font-semibold py-3 rounded  transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default CarWorkshopForm;
