interface brandDetailPropType{
    heading:string | undefined;
    heroText:string | undefined;
    description:string[] | undefined;
}
const BrandDetail=({heading,heroText,description}:brandDetailPropType )=>{
    return(
        <section className="flex justify-center py-10">
            { heading && heroText && description &&
                <div className="w-[95%] flex flex-col gap-3">
                   <h1 className="heading text-txtColor font-semibold">{heading}</h1>
                   <div className="flex flex-col gap-5">
                   <p className="italic text-txtColor normalText font-medium">{heroText}</p>
                   <div className="flex flex-col">
                   {
                    description.map((value,i)=>(

                    
                   <p key={`${value} ${i}`} className="normalText text-txtColor">{value}</p>
                   ))}
                   </div>
                   </div>
                </div>
            }
        </section>
    )
}
export default BrandDetail