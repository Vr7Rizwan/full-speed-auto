import { whyChooseUsTypes } from "../resources/whyChooseUs";

function WhyChooseUS({
  whyChooseUs,
}: {
  whyChooseUs: whyChooseUsTypes[] | undefined;
}) {
  return (
    <div className="bg-primary bg-cover relative bg-center bg-no-repeat flex justify-center">
      <div className="w-full z-10 py-3 md:py-7 flex items-center flex-col gap-7">
        <h2 className="text-txtColor font-bold subHeading">
          WHY CHOOSE{" "}
          <span className="text-secondary font-bold subHeading">US</span>
        </h2>
        <div className="flex flex-col w-full gap-5 justify-around px-5">
          {whyChooseUs &&
            whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="p-5 flex flex-col gap-2 rounded-2xl border-2 border-secondary hover:bg-secondary hover:border-txtColor hover:cursor-pointer transition-all duration-500"
              >
                <h3 className="text-txtColor subHeading font-bold">
                  {item.title}
                </h3>
                <p className="text-txtColor normalText text-justify">{item.text}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUS;
