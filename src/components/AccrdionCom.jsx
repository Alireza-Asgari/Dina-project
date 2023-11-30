import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { v4 } from "uuid";

const AccordionCom = ({ triggerVal, paragraphs, image, id }) => (
  <Accordion.Root className=" w-full rounded-md " type="single" collapsible>
    <AccordionItem value={`item-${id}`}>
      <AccordionTrigger className="w-full"> {triggerVal} </AccordionTrigger>
      <AccordionContent>
        {paragraphs.map((paragraph) => (
          <p key={v4()} className="leading-8">
            {paragraph}
          </p>
        ))}
        {image && (
          <div className="w-full flex justify-center items-center m-8">
            <img alt="image" src={image} />
          </div>
        )}
      </AccordionContent>
    </AccordionItem>
  </Accordion.Root>
);

const AccordionItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      className={
        "my-8 overflow-hidden neomofisme-shadow dark:neomofisme-shadow-dark  first:mt-0 rounded-t-lg rounded-b-lg focus-within:relative "
      }
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  )
);

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={
          "text-violet11 text-start dark:bg-bgDarkInner leading-8 dark:text-white shadow-mauve6 hover:bg-mauve2 group flex h-auto flex-1 cursor-default items-center justify-between bg-white px-5 py-6 text-[15px] outline-none"
        }
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon
          className="text-violet10 dark:text-white ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
          aria-hidden
        />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={
        "text-mauve11 text-justify dark:text-mauve2 bg-mauve2 dark:bg-[#492545] data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]"
      }
      {...props}
      ref={forwardedRef}
    >
      <div className="py-[15px] px-5">{children}</div>
    </Accordion.Content>
  )
);

export default AccordionCom;
