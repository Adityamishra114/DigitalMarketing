import React from "react";
import FAQItem from "./FaqItem";
import { faqs } from "../../data"; 

const FAQSection = () => {
  return (
    <section className="bg-white text-black/60 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <div className="flex flex-col justify-start py-2">
          <h2 className="text-[28px] sm:text-[30px] md:text-3xl lg:text-4xl font-bold mb-6 leading-tight text-[#0e3477]">
            LOUNGE LIZARD SOLVES YOUR WEB DESIGN AND DIGITAL MARKETING CHALLENGES
          </h2>
          <button className="border border-[#0e3477] text-[#0e3477] hover:bg-[#0e3477] hover:text-white transition px-6 py-3 rounded-md w-fit">
            GET MY CUSTOM QUOTE
          </button>
        </div>
        <div className="space-y-2">
          {faqs.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              textColor="text-black/60"
              arrowColor="#0e3477"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
