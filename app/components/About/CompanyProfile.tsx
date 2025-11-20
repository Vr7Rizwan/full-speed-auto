import { companyprofile } from "@/app/resources/about"
const CompanyProfile=()=>{
    return(
        <section className="flex justify-center py-10">
            <div className="w-[95%] lg:w-8/10">
            <div className="flex flex-col gap-5 lg:w-1/2  w-[95%]">
              <h1 className="heading text-secondary font-bold">ABOUT THE COMPANY</h1>
              <div className="flex flex-col gap-10 normalText text-txtColor font-light">
              {
                companyprofile.map((value,i)=>(
                       <p key={`${value} ${i}`}>{value.paragraphs}</p>
                ))}
     </div>
             
</div>
</div>
        </section>
    )
}
export default CompanyProfile