import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useStateContext } from "../context/ContextProvider";
import { useNavigate } from "react-router-dom";

export default function SearchModal() {
  const { openSearch, setOpenSearch, setSearchValue } = useStateContext();
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  function closeModal() {
    setOpenSearch(false);
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearching();
    }
  };
  const handleSearching = () => {
    setSearchValue(value);
    setValue("");
    navigate("/search");
    setOpenSearch(false);
  };

  return (
    <>
      <Transition appear show={openSearch} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-mauve11 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto font-body">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[500px]  transform rounded-2xl bg-white dark:bg-bgDarkInner  shadow-xl transition-all">
                  <div>
                    <div className="py-12 px-4" dir="rtl">
                      <div className=" shadow rounded mx-auto pb-10 px-6 ">
                        <div className=" flex justify-start items-center py-7 relative">
                          <input
                            className="text-sm leading-none text-left text-mauve9 dark:bg-dinaColor px-4 py-3 w-full border rounded border-mauve5 dark:border-mauve11 outline-none"
                            type="text"
                            placeholder="جست و جو ...."
                            name="search"
                            value={value}
                            onKeyUp={handleKeyPress}
                            onChange={(e) => setValue(e.target.value)}
                          />
                          <svg
                            className="absolute right-3 z-10 cursor-pointer dark:text-white"
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
                        <div className="flex justify-center items-center gap-x-3 mt-12 ">
                          <button
                            onClick={() => setOpenSearch(false)}
                            className="text-sm font-medium leading-none text-white text-center  px-6 py-4 bg-indigo-700 rounded-md  hover:bg-indigo-600 transform duration-300 ease-in-out"
                          >
                            بستن
                          </button>
                          <button
                            onClick={() => {
                              handleSearching();
                            }}
                            className="text-sm font-medium leading-none text-white text-center  px-6 py-4 bg-indigo-700 rounded-md  hover:bg-indigo-600 transform duration-300 ease-in-out"
                          >
                            جست‌وجو
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
