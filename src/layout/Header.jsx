import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { useStateContext } from "../context/ContextProvider";

import logo from "../assets/images/header-logo-dark.png";
import SideBar from "./SideBar";
import Modal from "../components/Modal";
import SearchModal from "../SerchPage/SearchModal";
const Header = () => {
  const {
    showMenu,
    setShowMenu,
    themeMood,
    handleMode,
    openSearch,
    setOpenSearch,
  } = useStateContext();
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setShowMenu(false)
    );
  }, []);
  return (
    <>
      <header
        className=" sticky backdrop-blur-2xl dark:text-white
    top-0 z-10 h-max mx-auto py-4 px-4 lg:px-8 
    lg:py-4 border-b-2 border-btnColorDark dark:border-borderDark flex justify-between items-center
    font-body"
      >
        <NavigationMenu.Root
          dir="rtl"
          className="relative top-0  z-[1] flex w-screen justify-around"
        >
          <div className="justify-self-start	">
            <Link to="/">
              <img href="#" src={logo} width={140} />
            </Link>
          </div>
          <NavigationMenu.List className="hidden shadow-blackA4 dark:shadow-borderDark m-0 lg:flex flex-row list-none rounded-[6px] items-center bg-white dark:bg-borderColorLight p-1 shadow-[0_2px_10px]">
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="text-violet11 dark:text-white hover:bg-violet3 dark:hover:bg-borderDark focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                محصولات{" "}
                <CaretDownIcon
                  className="text-violet10 dark:text-white relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                  aria-hidden
                />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="[data-side]-right data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
                <ul className="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
                  <ListItem
                    to="/سامانه-هلپ-دسک-دینا"
                    title="سامانه هلپ دسک دینا"
                  ></ListItem>
                  <ListItem to="/تگ-rfid" title="تگ RFID و دینا‌تگ"></ListItem>
                  <ListItem
                    to="/نرم-افزار-مدیریت-چیدمان-فروشگاهی"
                    title="نرم‌افزار مدیریت چیدمان فروشگاهی"
                  ></ListItem>
                  <ListItem
                    to="/نرم-افزار-سوپر-مارکت-آنلاین"
                    title="نرم‌افزار سوپر‌مارکت آنلاین"
                  ></ListItem>
                  <ListItem
                    to="/طراحی-سایت-و-خدمات-سئو"
                    title="طراحی سایت و خدمات سئو"
                  ></ListItem>
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="text-violet11 dark:text-white hover:bg-violet3 dark:hover:bg-borderDark focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                داستان‌ما{" "}
                <CaretDownIcon
                  className="text-violet10 dark:text-white relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                  aria-hidden
                />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
                <ul className="m-0 grid list-none p-[22px] sm:w-[300px] sm:grid-flow-col sm:grid-rows-2">
                  <ListItem
                    title="درباره‌دینا"
                    to="/درباره-ما-درباره-دینا"
                  ></ListItem>
                  <ListItem
                    title="چشم‌انداز و اهداف دینا"
                    to="/چشم-انداز-و-اهداف-دینا"
                  ></ListItem>
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="text-violet11 dark:text-white hover:bg-violet3 dark:hover:bg-borderDark focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                خدمات{" "}
                <CaretDownIcon
                  className="text-violet10 dark:text-white relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                  aria-hidden
                />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
                <ul className="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
                  <ListItem to="/درخواست-دمو" title="درخواست دمو"></ListItem>
                  <ListItem
                    to="/شرکت-در-وبینار"
                    title="شرکت در وبینار"
                  ></ListItem>
                  <ListItem
                    to="/درخواست-همکاری-با-دینا"
                    title="درخواست همکاری با دینا"
                  ></ListItem>
                  <ListItem
                    to="/شرایط-اخذ-نمایندگی"
                    title="شرایط اخذ نمایندگی"
                  ></ListItem>
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <Link
                to="/blogs"
                className="text-violet11 dark:text-white hover:bg-violet3 dark:hover:bg-borderDark focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
              >
                بلاگ
              </Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <Link
                to="/ارتباط-با-واحد-پشتیبانی-دینا"
                className="text-violet11 dark:text-white hover:bg-violet3 dark:hover:bg-borderDark focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
              >
                واحد پشتیبانی دینا
              </Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <Link
                to="/تماس-با-ما-تماس-با-دینا"
                className="text-violet11 dark:text-white hover:bg-violet3 dark:hover:bg-borderDark focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
              >
                تماس با دینا
              </Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link
                onClick={() => setOpenSearch(!openSearch)}
                className="text-violet11 dark:text-white hover:bg-violet3 dark:hover:bg-borderDark focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
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
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] ">
              <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white dark:bg-borderColorLight shadow-menu dark:shadow-dark-menu " />
            </NavigationMenu.Indicator>
          </NavigationMenu.List>

          <div className="flex items-center gap-4 lg:self-auto	">
            <div
              className="cursor-pointer"
              // onClick={() => {
              //   // document.documentElement.classList.toggle("dark");
              //   handleMode('dark');
              // }}
            >
              {themeMood === "dark" ? (
                <svg
                  onClick={() => {
                    // document.documentElement.classList.toggle("dark");
                    // handleMode("light");
                    handleMode("light");
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              ) : (
                <svg
                  onClick={() => {
                    // document.documentElement.classList.toggle("dark");
                    // handleMode("dark");
                    handleMode("dark");
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              )}
            </div>

            <div
              className={`lg:hidden cursor-pointer `}
              onClick={() => setShowMenu(!showMenu)}
              // className=" p-1 bg-btnColorDark dark:bg-borderDark text-white  rounded-lg hover:opacity-90"
              // onClick={() => setShowMenu(!showMenu)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
            <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white dark:bg-borderColorLight shadow-mauve7 dark:shadow-borderDark dark:shadow-lg shadow-2xl transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
          </div>
        </NavigationMenu.Root>
      </header>
      <div
        className={`backdrop-blur-2xl dark:text-white w-screen h-screen overflow-auto lg:hidden pt-4 mt-0 fixed top-0 right-0 z-10 transition-all duration-500 ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <SideBar setShowMenu={setShowMenu} />
        <SearchModal />
      </div>
    </>
  );
};

const ListItem = React.forwardRef(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <Link
          className={
            "focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-mauve3 dark:hover:bg-borderDark block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors"
          }
          {...props}
          ref={forwardedRef}
        >
          <div className="whitespace-nowrap text-violet12 dark:text-white mb-[5px] font-medium leading-[1.2]">
            {title}
          </div>
          <p className="text-mauve11 leading-[1.4]">{children}</p>
        </Link>
      </NavigationMenu.Link>
    </li>
  )
);

export default Header;
