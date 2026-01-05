"use client";

import { useState } from "react";
import { Plus } from "./Icons";

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
      <div
        onClick={toggleAccordion}
        className="flex cursor-pointer justify-between pb-2"
      >
        <div className="pr-2">
          <p className="text-justify text-base md:text-lg">{name}</p>
          <p className="text-xs md:text-sm">{skills}</p>
        </div>
        <Plus className="mr-1 w-4 md:mr-2 md:w-5" isOpen={isOpen} />
      </div>
      <div
        className="grid overflow-hidden transition-[grid-template-rows] duration-500"
        style={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
        }}
      >
        <div className="overflow-hidden">
          <div className="mt-2 whitespace-pre-wrap">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
