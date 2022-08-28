import React, { useState } from "react";
import Header from "../components/header";

const Headers = () => {
  const [dropdownOpen, setdropdownOpen] = useState(false);
  return (
    <div>
      <div className="m-2 p-2 text-violet-500"></div>
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-3 ...">
          <button className="rounded bg-red-600 text-white w-full">
            Click Me
          </button>
        </div>
        <div className="col-span-2 ...">
          <button className="flex w-full bg-green-600 text-white">
            I will see you
          </button>
        </div>
        <div className="row-span-2 col-span-2 ...">03</div>
      </div>

      <div
        onClick={() => setdropdownOpen(!dropdownOpen)}
        className="overflow-hidden rounded-full w-28 h-8 flex justify-center items-center
                            hover:cursor-pointer
                            "
      >
        Toggle2
        <div
          className={`${
            dropdownOpen
              ? `top-full opacity-100 visible`
              : "top-[110%] invisible opacity-0"
          } absolute left-0 z-40 mt-2 w-full rounded border-[.5px] border-light bg-white py-5 shadow-card transition-all`}
        >
          <a
            href="javascript:void(0)"
            className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
          >
            Dashboard
          </a>
          <a
            href="javascript:void(0)"
            className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
          >
            Settings
          </a>
          <a
            href="javascript:void(0)"
            className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
          >
            Earnings
          </a>
          <a
            href="javascript:void(0)"
            className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
          >
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};

export default Headers;
