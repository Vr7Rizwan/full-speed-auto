import { faqTypes } from "../resources/faq";

function Faq({faq}:{faq:faqTypes[]|undefined}) {
  
  return (
    <div>
      <div className="flex justify-center">
        <h2 className="subHeading font-bold text-secondary py-10">
          FREQUENTLY ASKED QUESTIONS
        </h2>
      </div>

      <div className="grid md:grid-cols-2 md:gap-1 px-4 py-10 bg-primary">
        {faq && faq.map((item, index) => (
          <details
            key={index}
            className=" text-primary p-2 rounded-md cursor-pointer"
          >
            <summary className="normalText font-medium flex justify-between items-center bg-secondary px-4 py-5 rounded-2xl ">
              <span> {item.Question}</span>
            </summary>

            <p className="normalText mt-2 bg-primary px-5 py-5 text-txtColor border-2 rounded-2xl border-secondary">{item.Answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

export default Faq;
