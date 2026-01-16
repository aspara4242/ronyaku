"use client";

import Link from "next/link";

import { useState } from "react";

import { TocItem } from "@libs/extractToc";

import { Triangle } from "@/components/svg/Icons";

export const TableOfContents = ({ items }: { items: TocItem[] }) => {
  if (items.length === 0) return null;
  const [isOpen, setIsOpen] = useState(items.length <= 8);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="mb-16 rounded-md bg-bg-gray p-4">
      <div
        onClick={toggleAccordion}
        className="flex cursor-pointer items-center justify-start"
      >
        <Triangle className="mr-2 w-3" isOpen={isOpen} />
        <p className="text-sm font-bold md:text-base">目次</p>
      </div>
      <div
        className="grid overflow-hidden transition-[grid-template-rows] duration-500"
        style={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
        }}
      >
        <ul className="overflow-hidden text-light-gray">
          {items.map((item, index) => (
            <li
              key={index}
              className={`${item.name === "h3" ? "pl-4 md:pl-5" : item.name === "h4" ? "pl-8 md:pl-10" : ""} border-b border-gray py-2 text-sm first:mt-2 md:text-base`}
            >
              <Link href={item.url} className="">
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default TableOfContents;
