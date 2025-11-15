import whyChooseUs from "../resources/whyChooseUs";

function WhyChooseUS() {
  return (
    <div
      className="bg-cover relative bg-center bg-no-repeat min-h-screen flex justify-center"
      style={{ backgroundImage: "url('/assets/backGround.webp')" }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="z-30 py-15 flex items-center flex-col gap-15">
        <h2 className="text-primary font-bold subHeading">WHY CHOOSE US</h2>
        <div className="flex flex-col md:flex-row flex-wrap gap-5 justify-around px-5">
          {whyChooseUs.map((item, index) => (
            <div
              key={index}
              className="bg-[#742B2A]/60 px-10 py-10 flex flex-col gap-5 rounded-2xl text-primary"
            >
              <h3 className="text-primary subHeading font-bold">
                {item.title}
              </h3>
              <p className="text-primary normalText">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUS;
