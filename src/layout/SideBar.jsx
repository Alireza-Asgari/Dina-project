import React from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
const SideBar = () => {
  const { setShowMenu, setOpenSearch, openSearch } = useStateContext();
  return (
    <div className="flex flex-col">
      <Accordion.Root
        className="lg:hidden min-[280px]:whitespace-nowrap  w-[calc(100%-2rem)] mx-4 bg-mauve6 sm:w-[300px] rounded-md shadow-[0_2px_10px] shadow-black/5"
        type="single"
        collapsible
      >
        <AccordionItem value="item-8">
          <AccordionTrigger chevron={false}>
            <div
            //   className={`cursor-pointer`}
            // className="lg:hidden p-1 bg-btnColorDark dark:bg-borderDark text-white  rounded-lg hover:opacity-90"
            // onClick={() => setShowMenu(!showMenu)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                onClick={() => setShowMenu(false)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </AccordionTrigger>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger chevron={true}>محصولات</AccordionTrigger>
          <AccordionContent>
            <ul className="flex flex-col gap-4">
              <li className="rounded-md">
                <ListItem to="/سامانه-هلپ-دسک-دینا">
                  سامانه هلپ دسک دینا{" "}
                </ListItem>
              </li>
              <li className="rounded-md">
                <ListItem to="/نرم-افزار-مدیریت-چیدمان-فروشگاهی">
                  نرم‌افزار مدیریت چیدمان فروشگاهی
                </ListItem>
              </li>
              <li className="rounded-md">
                <ListItem to="/نرم-افزار-سوپر-مارکت-آنلاین">
                  نرم‌افزار سوپر‌مارکت آنلاین
                </ListItem>
              </li>
              <li className=" rounded-md">
                <ListItem to="/طراحی-سایت-و-خدمات-سئو">
                  طراحی سایت و خدمات سئو
                </ListItem>
              </li>
              <li className=" rounded-md">
                <ListItem to="/تگ-rfid">تگ RFID و دینا‌تگ</ListItem>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger chevron={true}>داستان‌ما</AccordionTrigger>
          <AccordionContent>
            <ul className=" flex flex-col gap-4">
              <li className=" rounded-md">
                <ListItem to="/درباره-ما-درباره-دینا">درباره‌دینا</ListItem>
              </li>
              <li className=" rounded-md">
                <ListItem to="/چشم-انداز-و-اهداف-دینا">
                  چشم‌انداز و اهداف دینا
                </ListItem>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger chevron={true}>خدمات</AccordionTrigger>
          <AccordionContent>
            <ul className=" flex flex-col gap-4">
              <li className="rounded-md">
                <ListItem to="/درخواست-دمو">درخواست دمو</ListItem>
              </li>
              <li className="rounded-md">
                <ListItem to="/شرکت-در-وبینار">شرکت در وبینار</ListItem>
              </li>
              <li className="rounded-md">
                <ListItem to="/درخواست-همکاری-با-دینا">
                  درخواست همکاری با دینا
                </ListItem>
              </li>
              <li className=" rounded-md">
                <ListItem to="/شرایط-اخذ-نمایندگی">شرایط اخذ نمایندگی</ListItem>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <Link to="/blogs" onClick={() => setShowMenu(false)}>
            <AccordionTrigger chevron={false}>بلاگ</AccordionTrigger>
          </Link>
        </AccordionItem>
        <AccordionItem value="item-5">
          <Link
            to="/ارتباط-با-واحد-پشتیبانی-دینا"
            onClick={() => setShowMenu(false)}
          >
            <AccordionTrigger chevron={false}>
              واحد پشتیبانی دینا
            </AccordionTrigger>
          </Link>
        </AccordionItem>
        <AccordionItem value="item-6">
          <Link
            to="/تماس-با-ما-تماس-با-دینا"
            onClick={() => setShowMenu(false)}
          >
            <AccordionTrigger chevron={false}>تماس با دینا</AccordionTrigger>
          </Link>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger
            chevron={false}
            onClick={() => {
              setOpenSearch(!openSearch);
              setShowMenu(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </AccordionTrigger>
        </AccordionItem>
      </Accordion.Root>
    </div>
  );
};

const AccordionItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      className={
        "focus-within:shadow-mauve12 mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]"
      }
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  )
);
const ListItem = React.forwardRef(
  ({ className, children, title, ...props }, forwardedRef) => {
    const { setShowMenu } = useStateContext();

    return (
      <li>
        <Link
          onClick={() => setShowMenu(false)}
          className={
            "focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-mauve3 dark:hover:bg-borderDark p-2 block select-none rounded-[6px] text-[15px] leading-none no-underline outline-none transition-colors"
          }
          {...props}
          ref={forwardedRef}
        >
          <div className="whitespace-nowrap text-violet12 mb-[5px] font-medium leading-[1.2]">
            {title}
          </div>
          <p className="text-mauve11 leading-[1.4] dark:text-white">
            {children}
          </p>
        </Link>
      </li>
    );
  }
);
const AccordionTrigger = React.forwardRef(
  ({ children, className, chevron, ...props }, forwardedRef) => {
    return (
      <Accordion.Header className="flex">
        <Accordion.Trigger
          className={
            "cursor-pointer text-violet11 shadow-mauve6 hover:bg-mauve2 dark:hover:bg-borderDark dark:text-white group flex h-[45px] flex-1  items-center justify-between bg-white dark:bg-borderColorLight px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none"
          }
          {...props}
          ref={forwardedRef}
        >
          {children}

          {chevron && (
            <ChevronDownIcon
              className="text-violet10 dark:text-white ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
              aria-hidden
            />
          )}
        </Accordion.Trigger>
      </Accordion.Header>
    );
  }
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={
        "text-mauve11 dark:text-white dark:bg-borderColorLight bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]"
      }
      {...props}
      ref={forwardedRef}
    >
      <div className="py-[15px] px-5">{children}</div>
    </Accordion.Content>
  )
);

export default SideBar;
