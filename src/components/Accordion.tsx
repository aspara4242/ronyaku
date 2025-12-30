"use client";

import { useState } from "react";
import Image from "next/image";

interface AccordionProps {
  name: string;
  skills: string;
  children?: React.ReactNode;
}

const Accordion = ({ name, skills, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggleAccordion} className="flex justify-between cursor-pointer pb-2">
        <div className="pr-2">
          <p className="text-justify text-base md:text-lg font-bold mb-1">{name}</p>
          <p className="text-xs md:text-sm">{skills}</p>
        </div>
        <Image
            src={"/plus.svg"}
            alt="プラス記号"
            className="w-4 mr-1 md:w-5 md:mr-2"
            width={24}
            height={24}
            priority={true}
            style={{
              transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
              transition: "transform 0.3s linear",
            }}
          />
      </div>
      <div
        className="grid overflow-hidden transition-[grid-template-rows] duration-500"
        style={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
        }}
      >
        <div className="overflow-hidden">
          <div className="pt-2 whitespace-pre-wrap">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
