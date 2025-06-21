import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-600">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-start gap-4 w-full py-4 text-left text-black hover:text-[#0e3477] "
      >
        <div className="text-base font-medium text-left flex-1">{question}</div>
        <ChevronDown
          className={`transition-transform duration-300 mt-1 ${
            isOpen ? "rotate-180 text-[#0e3477] " : "rotate-0 text-[#0e3477] "
          }`}
        />
      </button>
      {isOpen && (
        <div className="text-black hover:text-[#0e3477] text-sm pb-4 pl-1 transition duration-300 ease-in-out">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem;
