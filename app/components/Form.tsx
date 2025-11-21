function Form({widthAfterMD}:{widthAfterMD?:string}) {
  return (
    <div className={`w-full md:${widthAfterMD || "w-1/2"} bg-primary p-6 sm:p-8 rounded-lg shadow-md`}>
                <h2 className="subHeading font-bold mb-6 text-txtColor">
                    Book Your <span className='subHeading font-bold mb-6 text-secondary'>Car Service</span>
                </h2>

                <form className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="border-3 border-secondary rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="border-3 border-secondary rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="border-3 border-secondary rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                    <input
                        type="text"
                        placeholder="Car Model"
                        className="border-3 border-secondary rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                    />

                    <textarea
                        placeholder="Additional Details"
                        rows={4}
                        className="border-3 border-secondary rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-secondary cursor-pointer text-txtColor normalText font-semibold py-3 rounded transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
  )
}

export default Form
