import { whyChooseUsTypes } from "../resources/whyChooseUs";

function WhyChooseUS({
  whyChooseUs,
}: {
  whyChooseUs: whyChooseUsTypes[] | undefined;
}) {
  return (
    <div
      className="bg-cover relative bg-center bg-no-repeat min-h-screen flex justify-center"
      style={{ backgroundImage: "url('/assets/background.png')" }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="z-10 py-15 flex items-center flex-col gap-15">
        <h2 className="text-primary font-bold subHeading">WHY CHOOSE <span className="text-secondary font-bold subHeading">US</span></h2>
        <div className="flex flex-col w-full gap-5 justify-around px-5">
          {whyChooseUs &&
            whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-secondary/80 px-10 py-10 flex flex-col gap-5 rounded-2xl text-primary"
              >
                <h3 className="text-txtColor subHeading font-bold">
                  {item.title}
                </h3>
                <p className="text-txtColor normalText">{item.text}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUS;
