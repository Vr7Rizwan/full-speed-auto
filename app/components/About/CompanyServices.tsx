import { companyservices } from "@/app/resources/about"
const CompanyServices=()=>{
    return(
       <section className="flex flex-col gap-10 pl-3 md:pl-10 lg:pl-40">
        
  <h1 className="heading text-secondary font-bold">{companyservices.heading}</h1>
  <p className="normalText font-light">
   {companyservices.description}
</p>

  <h2 className="subHeading font-medium">{companyservices.subheading}</h2>
  <ul className="list-disc px-2 lg:px-0 flex flex-col gap-2 normalText font-light">
     {
      companyservices.services.map((value,i)=>(
<li key={`${value} ${i}`}>{value}</li>
    )) }
  </ul>
</section>

    )
}
export default CompanyServices