import React from "react";
import { useStateContext } from "../context/ContextProvider";
import { Link } from "react-router-dom";

const menu = ({ data }) => {
  const { id, label, icon, items  } = data;
  const { click, setclick, initialState } = useStateContext();

  return (
    <li
      className="pt-4 cursor-pointer relative select-none "
      onClick={() => setclick({ ...initialState, [id]: !click[id] })}
      onMouseEnter={() => setclick({ ...initialState, [id]: !click[id] })}
      onMouseLeave={() => setclick({ ...initialState })}
    >
      <Link className="flex items-center whitespace-nowrap">
        {label}
        {icon && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className={`w-5 h-5 ${
              click[id] && "rotate-180"
            } transition-all duration-500`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        )}
      </Link>

      {items.length ? (
        <div className="transition-all duration-500 ease-out">
          {/* <div
            className={`lg:bg-bgDarkInner ms-7
lg:dark:lg:bg-btnColorDark top-[80%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px]
${click[id] ? " opacity-100" : " opacity-0 "}`}
          /> */}

          <ul
            className={`lg:absolute shadow-xl 
        lg:-right-20 lg:w-80 lg:bg-bgDarkInner 
         lg:text-white lg:rounded-xl border-b-2 
          border-dinaColor lg:dark:lg:bg-btnColorDark z-20 ${
            click[id]
              ? "h-fit p-4 opacity-100 top-11"
              : "h-0 p-0 opacity-0 overflow-hidden"
          }
         transition-all ease-out 	`}
          >
            {items.map((item) => (
              <li
                key={item.id}
                className="select-none hover:-translate-x-3 dark:text-white max-lg:text-black transition-all duration-500 whitespace-nowrap max-sm:whitespace-normal py-4 "
              >
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </li>
  );
};

export default menu;
