const Banner=({banner}:{banner:string | undefined})=>{
     return(
        <section>
        {banner && 
        <div>
            <img src={banner} alt="Error" className="w-full object-center object-cover" />
        </div>
        }
        </section>
    )
}
export default Banner