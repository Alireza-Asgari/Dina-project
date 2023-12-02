import React, { useState } from "react";
import { useStateContext } from "../context/ContextProvider";
function Search() {
  const { searchValue, setSearchValue } = useStateContext();
  const [value, setValue] = useState("");
  const handleSearch = () => {
    setSearchValue(value);
    setValue(" ");
  };
  return (
    <div className="container w-[calc(100%-2rem)] p-4 mx-auto mt-8 bg-white dark:bg-bgDarkInner rounded-xl">
      <div className="py-12 px-4" dir="rtl">
        <div className="bg-white dark:bg-bgDarkInner w-full shadow rounded mx-auto pb-10 px-6 ">
          <div className="flex items-center py-7 relative">
            <input
              className="text-sm leading-none text-right text-mauve9 dark:bg-dinaColor px-4 py-3 w-full border rounded border-mauve5 dark:border-mauve11 outline-none"
              type="text"
              placeholder="جست و جو ...."
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <svg
              className="absolute left-3 cursor-pointer dark:text-white"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
                stroke="#4B5563"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 21L15 15"
                stroke="#4B5563"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="lg:flex justify-end mr-1 items-center gap-x-3 mt-12 ">
            <button
              onClick={() => handleSearch()}
              className="text-sm font-medium leading-none text-white text-center  px-6 py-4 bg-indigo-700 rounded-md  hover:bg-indigo-600 transform duration-300 ease-in-out"
            >
              جست‌وجو
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-8">
          <h3 className="font-semibold text-lg text-center border-borderDark border-b-4 dark:text-white w-fit p-4">
            نتایج جستجو برای :
          </h3>
          <span className="font-semibold inline text-base text-center dark:text-white w-fit p-4">
            {searchValue}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Search;
