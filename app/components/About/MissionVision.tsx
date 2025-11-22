import { missionvision } from "@/app/resources/about"
const MissionVision=()=>{
    return(
        <section className="pt-10">
            
      <div className="w-[95%] mx-auto flex flex-col gap-7 md:flex-row md:gap-10">
        {
            missionvision.map((value,i)=>(
            <div key={`${value} ${i}`} className={`flex flex-col w-full px-4 py-8 items-start bg-gray-100 rounded-2xl md:px-10 gap-5 md:py-10
            `}>
                <h1 className="subHeading font-bold text-txtColor">{value.heading}</h1>
                <p className="normalText text-txtColor">{value.description}</p>
                
            </div>
               ))
        }
        </div>
        </section>
    )
}
export default MissionVision