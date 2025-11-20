import { missionvision } from "@/app/resources/about"
const MissionVision=()=>{
    return(
        <section className="pt-10">
            
      <div className="w-[95%] mx-auto flex flex-col gap-7 md:flex-row md:gap-0">
        {
            missionvision.map((value,i)=>(
            <div key={`${value} ${i}`} className={`flex flex-col w-full px-2 md:pl-0 gap-5
            `}>
                <h1 className="heading text-secondary font-bold">{value.heading}</h1>
                <p className="normalText text-txtColor font-light">{value.description}</p>
                
            </div>
               ))
        }
        </div>
        </section>
    )
}
export default MissionVision