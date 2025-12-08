import { cards } from "@/app/resources/about"
const Cards=()=>{
    return(
        <section className="py-10">
            <div className="w-[95%] mx-auto flex rounded-2xl bg-txtColor flex-col md:flex-row md:items-start md:justify-around lg:justify-center px-4 gap-15 lg:gap-20 flex-wrap py-12">
               {
                    cards.map((value, i) => (
                        <div
                        key={`${value} ${i}`}
                        className="flex flex-col justify-center items-start w-full md:w-1/3 lg:w-1/4 md:h-130 lg:h-115 xl:h-95 gap-3 lg:gap-5 md:gap-10 px-6 py-6 md:px-8 md:py-6 border-secondary border rounded-2xl h-full">
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