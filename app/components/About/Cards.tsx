import { cards } from "@/app/resources/about"
const Cards=()=>{
    return(
        <section className="py-10">
            <div className="w-[95%] mx-auto flex rounded-2xl bg-txtColor flex-col md:flex-row md:items-start justify-center px-4 gap-15 md:gap-20 flex-wrap py-12">
               {
                    cards.map((value, i) => (
                        <div
                        key={`${value} ${i}`}
                        className="flex flex-col justify-start items-start w-full lg:w-1/4 gap-3 px-6 py-6 md:px-8 md:py-6 border-secondary border rounded-2xl h-full">
                        <img src={value.icon} alt="Error" className="w-20 invert" />
                        <h1 className="subHeading font-medium text-primary">{value.heading}</h1>
                        <p className="normalText text-primary">{value.description}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
export default Cards