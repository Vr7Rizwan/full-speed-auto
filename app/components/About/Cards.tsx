import { cards } from "@/app/resources/about"
const Cards=()=>{
    return(
        <section>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 flex-wrap py-12">
                {
                   cards.map((value,i)=>(                   
            <div key={`${value} ${i}`} className="flex flex-col items-center w-full md:w-1/4 gap-3 px-2 md:px-0">
                <img src={value.icon} alt="Error" className="w-20"/>
                <h1 className="subHeading font-medium">{value.heading}</h1>
                <p className="normalText font-light">{value.description}</p>
            </div>
            ))}
            </div>
        </section>
    )
}
export default Cards