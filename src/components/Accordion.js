"use client";
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} text-brightRed h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
 
export default function AccordionCustomIcon() {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
      <Accordion className="px-4 md:px-0 md:w-1/2"     open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader  className={`${open === 1 ? "text-brightRed hover:text-brightRed" :"text-black"}`} onClick={() => handleOpen(1)}>What is Material Tailwind?</AccordionHeader>
        <AccordionBody className="text-black" >
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion className="px-4 md:px-0 md:w-1/2"  open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader className={`${open === 2 ? "text-brightRed hover:text-brightRed" :"text-black"}`}  onClick={() => handleOpen(2)}>
          How to use Material Tailwind?
        </AccordionHeader>
        <AccordionBody className="text-black" >
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion className="px-4 md:px-0 md:w-1/2" open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader className={`${open === 3 ? "text-brightRed hover:text-brightRed" :"text-black"}`}  onClick={() => handleOpen(3)}>
          What can I do with Material Tailwind?
        </AccordionHeader>
        <AccordionBody className="text-black" >
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
    </>
  );
}