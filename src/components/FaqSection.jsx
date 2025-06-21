import React from "react";
import FAQItem from "./FaqItem";

const faqs = [
  {
    question: "Would a website redesign bring more traffic?",
    answer:
      "Yes, a redesign with better UX and SEO optimization can significantly increase traffic.",
  },
  {
    question: "My website isn't generating enough leads.",
    answer:
      "A combination of CRO strategies and clearer CTAs can help convert more visitors.",
  },
  {
    question: "My ecommerce website is continuously losing sales.",
    answer:
      "We analyze funnel performance and improve speed, trust signals, and UX to retain users.",
  },
  {
    question:
      "I want to improve ROI on Digital Marketing, but staying up to speed on trends is a full-time job.",
    answer:
      "Our marketing team stays on top of trends to ensure maximum ROI with minimal effort on your part.",
  },
  {
    question: "Managing a digital campaign takes too much time.",
    answer:
      "Let our experts handle everything from setup to reporting so you can focus on your business.",
  },
];

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
