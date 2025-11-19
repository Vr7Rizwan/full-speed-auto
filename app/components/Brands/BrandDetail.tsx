interface brandDetailPropType{
    heading:string | undefined;
    heroText:string | undefined;
    description:string[] | undefined;
}
const BrandDetail=({heading,heroText,description}:brandDetailPropType )=>{
    return(
        <section className="flex justify-center py-10">
            { heading && heroText && description &&
                <div className="w-[95%]  md:w-8/10 flex flex-col gap-3">
                   <h1 className="heading text-secondary font-semibold">{heading}</h1>
                   <div className="flex flex-col gap-5">
                   <p className="italic text-secondary normalText font-medium">{heroText}</p>
                   <p className="normalText text-txtColor font-light">{description}</p>
                   </div>
                </div>
            }
        </section>
    )
}
export default BrandDetail