const WhyChooseUs=({whychooseus}:{whychooseus:string[] | undefined})=>{
    return(
        <section className="flex justify-center">
           {whychooseus &&
           <div className="w-[95%] md:w-8/10 flex flex-col gap-3">
            <h1 className="text-secondary subHeading font-semibold">Why Choose Us</h1>
            <ul className="list-disc list-inside flex flex-col">
               {
                whychooseus.map((value,i)=>(
                    <li key={`${value} ${i}`} className="text-txtColor font-light normalText">{value}</li>
                ))
               }
            </ul>
           </div>
             
           }
        </section>
    )
}
export default WhyChooseUs