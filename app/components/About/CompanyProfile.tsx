import { companyprofile } from "@/app/resources/about"
const CompanyProfile=()=>{
    return(
        <section className="px-3 md:px-0 md:pl-10 lg:pl-40 py-10">
            <div className="flex flex-col gap-5 lg:w-1/2  w-full">
              <h1 className="heading text-secondary font-bold">ABOUT THE COMPANY</h1>
              <div className="flex flex-col gap-10 normalText text-txtColor font-light text-justify ">
              {
                companyprofile.map((value,i)=>(
                       <p key={`${value} ${i}`}>{value.paragraphs}</p>
                ))}
     </div>
             
</div>
        </section>
    )
}
export default CompanyProfile