import React from "react";
import clsx from "clsx"; // optional, for dynamic class merging

const Button = ({ text, className }) => {
  return (
    <div>
      <button
        className={clsx(
          "group inline-flex items-center gap-3 text-white font-semibold",
          "bg-[#7808d0] hover:bg-black",
          "rounded-full px-6 py-3 pl-5",
          "transition-colors duration-300 overflow-hidden whitespace-nowrap",
          className
        )}
      >
        <span
          className={clsx(
            "relative w-[25px] h-[25px] shrink-0",
            "grid place-items-center",
            "rounded-full bg-white text-[#7808d0]",
            "overflow-hidden group-hover:text-black"
          )}
        >
          {/* Main Icon */}
          <svg
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute transition-transform duration-300 ease-in-out group-hover:translate-x-[150%] group-hover:-translate-y-[150%]"
            width={10}
          >
            <path
              d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              fill="currentColor"
            />
          </svg>

          {/* Icon Copy */}
          <svg
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute transition-transform duration-300 ease-in-out delay-100 translate-x-[-150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0"
            width={10}
          >
            <path
              d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              fill="currentColor"
            />
          </svg>
        </span>
        {text}
      </button>
    </div>
  );
};

export default Button;
