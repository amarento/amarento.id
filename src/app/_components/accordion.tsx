import React, { useRef, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const data = [
  {
    question: "What are accordion components?",
    answer:
      "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.",
  },
  {
    question: "What are they used for?",
    answer:
      "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.",
  },
  {
    question: "Accordion as a musical instrument",
    answer:
      "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.",
  },
  {
    question: "Can I create an accordion component with a different framework?",
    answer:
      "Yes, of course, it is very possible to create an accordion component with another framework.",
  },
];

const FAQAccordion = ({ question, answer, isOpen, onClick }) => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="border-b border-black">
      <button
        className={`flex w-full cursor-pointer items-center justify-between border-0 bg-transparent px-2.5 py-5 text-custom-p text-dark-green-default text-left text-lg font-medium ${
          isOpen
            ? "bg-[linear-gradient(90deg,transparent,rgba(21,71,52,0.05),transparent)]"
            : ""
        }`}
        onClick={onClick}
      >
        <p className="question-content">{question}</p>
        <RiArrowDropDownLine
          className={`text-2xl transition-transform duration-500 ease-in-out ${
            isOpen ? "rotate-180 text-green-600" : ""
          }`}
        />
      </button>

      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <p className="py-4 text-lg italic">{answer}</p>
      </div>
    </div>
  );
};

export const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleItemClick = (index: number) => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setActiveIndex((prevIndex) => {
      if (prevIndex === index) {
        return null;
      } else {
        return index;
      }
    });

    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className="px-8 flex flex-col justify-center items-center">
      <div>
        <h2 className=" relative text-custom-h2 mb-10 !font-eco">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="flex w-full max-w-[700px] flex-col">
        {data.map((item, index) => (
          <FAQAccordion
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;