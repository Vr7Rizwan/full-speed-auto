import ContactBtn from "./ContactBtn";
const Banner = () => {
  return (
    <section
      className="relative w-full  lg:h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: "url('/assets/banner.webp')" }}
    >
      
      <div className="absolute inset-0 bg-black/50"></div>


      <div className="relative z-10 w-[90%] md:w-[80%] lg:w-[70%] mx-auto text-center flex flex-col items-center gap-10 animate-fadeIn">
   
        <h1 className="heading  font-bold text-primary leading-tight drop-shadow-xl">
          Premium Luxury Car Service<br /> You Can Trust
        </h1>

     
        <p className="text-primary/95 max-w-3xl normalText mt-3 leading-relaxed">
          Dealership-level diagnostics, genuine manufacturer parts, and expert technicians
          all in one place.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <ContactBtn
            text="Schedule now"
            classes="px-6 py-3 cursor-pointer bg-secondary normalText text-txtcolor rounded-md text-base font-semibold hover:bg-secondary/85 transition duration-700"
          />
          
        </div>
        
      </div>
    </section>
  );
};

export default Banner;
