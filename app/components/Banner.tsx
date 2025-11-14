import { banner } from "@/app/Data Structure/Banner"
const Banner=()=>{
    return(
            
            <>
            <img className="lg:hidden" src="/assets/banner.webp" alt="banner" />
            <section className="h-screen bg-primary lg:bg-[url('/assets/banner.webp')] w-full flex  justify-center items-center
            bg-cover bg-center bg-no-repeat flex-wrap">
        
            {
                banner.map((value,i)=>(
                    
                     <div key={`${value} ${i}`} className={`w-full lg:w-1/4 h-90 lg:h-100 flex flex-col justify-center p-7
                      [clip-path:polygon(0_0,100%_0,85%_100%,0%_100%)] ${i%2 !==0 ?' bg-secondary/75':'bg-black/70'}
                      ${i===3?'gap-20':'gap-10'}`}>
                     <h1 className="text-4xl text-white font-bold w-50">{value.title}</h1>
                     <div className="flex flex-col gap-5">
                     <p className="text-gray-200 text-lg pr-6">{value.description}</p>
                     <button className={`border py-2 px-3 text-gray-200 w-35 relative
                     before:absolute before:top-0 before:left-0 before:w-0 before:h-full
                  ${i%2 !==0?'before:bg-black/70':'before:bg-secondary/75'}  hover:before:w-full before:transition-all before:duration-1000`}><span className="relative z-10">{value.button}</span></button>
                     </div>
            </div>
             ))}
            </section></>
        
    )
}
export default Banner