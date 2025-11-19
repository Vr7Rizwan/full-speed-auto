const BrandServices=({Services}:{Services:string[] | undefined})=>{
    return(
        
          <section className="flex justify-center py-10">
           {Services &&
           <div className="w-[95%] md:w-8/10 flex flex-col gap-3">
            <h1 className="text-secondary subHeading font-semibold">Our Services</h1>
            <ul className="list-disc list-inside flex flex-col">
               {
                Services.map((value,i)=>(
                    <li key={`${value} ${i}`} className="text-txtColor font-light normalText">{value}</li>
                ))
               }
            </ul>
           </div>
             
           }
        </section>
        
    )
}
export default BrandServices