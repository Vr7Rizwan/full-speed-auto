"use client";
import { faqTypes } from "../resources/faq";
import { useRef, useState, useEffect } from "react";

function Faq({ faq }: { faq: faqTypes[] | undefined }) {
  return (
    <div className="bg-gray-50 py-2">
      <div className="flex justify-center">
        <h2 className="subHeading font-bold text-txtColor">
          FREQUENTLY ASKED{" "}
          <span className="subHeading font-bold text-secondary">QUESTIONS</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 md:gap-1 px-4 py-1 bg-gray-50">
        {faq?.map((item, index) => (
          <FaqItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

function FaqItem({ item }: { item: faqTypes }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  // Auto-adjust height when opening
  useEffect(() => {
    if (open && ref.current) {
      // Set exact scroll height + some buffer to fully include border
      setHeight(ref.current.scrollHeight + 20 + "px");
    } else {
      setHeight("0px");
    }
  }, [open]);

  return (
    <div className="text-txtColor p-2 rounded-md">
      <button
        onClick={() => setOpen(!open)}
        className="w-full normalText font-medium flex justify-between items-center bg-secondary px-4 py-5 rounded-2xl cursor-pointer"
      >
        <span className="flex text-start w-[90%] md:w-[95%]">
          {item.Question}
        </span>

        <span
          className={`transition-transform duration-300 w-[10%] md:w-[5%] ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
          ▼
        </span>
      </button>

      {/* Smooth animated container */}
      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: height }}
      >
        <div ref={ref} className="mt-2">
          <p className="normalText bg-primary text-txtColor px-5 py-5 border-2 rounded-2xl border-txtColor">
            {item.Answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Faq;
