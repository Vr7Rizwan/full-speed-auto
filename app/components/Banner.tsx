import banner from "../resources/banner";
import ContactBtn from "./ContactBtn";
const Banner = () => {
  return (
    <>
      <img className="lg:hidden" src="/assets/banner.webp" alt="banner" />
      <section
        className="lg:h-screen bg-primary lg:bg-[url('/assets/banner.webp')] w-full flex  justify-center items-center
            bg-cover bg-center bg-no-repeat flex-wrap"
      >
        {banner.map((value, i) => (
          <div
            key={`${value} ${i}`}
            className={`w-full lg:w-1/4 h-90 lg:h-100 flex flex-col justify-center p-7
                      [clip-path:polygon(0_0,100%_0,85%_100%,0%_100%)] ${
                        i % 2 !== 0
                          ? "bg-secondary lg:bg-secondary/75"
                          : "bg-black lg:bg-black/70"
                      }
                      ${i === 3 ? "gap-20" : "gap-10"}`}
          >
            <h2 className="subHeading text-primary font-bold w-50">
              {value.title}
            </h2>
            <div className="flex flex-col gap-5">
              <p className="text-primary normalText pr-6">
                {value.description}
              </p>
              <ContactBtn
                text={value.button}
                classes={`border py-2 px-3 normalText text-primary w-35 relative
                     before:absolute before:-z-10 before:top-0 before:left-0 before:w-0 before:h-full
                  ${
                    i % 2 !== 0
                      ? "before:bg-black/70"
                      : "before:bg-secondary/75"
                  } active:before:w-full md:hover:before:w-full before:transition-all md:before:duration-1000
                   duration-300`}
              />
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
export default Banner;
