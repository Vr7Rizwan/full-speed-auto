import { missionvision } from "@/app/resources/about"
const MissionVision=()=>{
    return(
        <section className="flex flex-col md:flex-row justify-around pt-12 gap-8 md:gap-0">
        {
            missionvision.map((value,i)=>(
            <div key={`${value} ${i}`} className={`flex flex-col w-full px-2 md:pl-0 items-center gap-5
            ${i===1?"md:w-1/3":"md:w-1/2"}`}>
                <h1 className="heading text-secondary font-bold">{value.heading}</h1>
                <p className="normalText text-txtColor font-light">{value.description}</p>
                
            </div>
               ))
        }
        </section>
    )
}
export default MissionVision