import React from "react";

// react icons
import { CiSearch } from "react-icons/ci";
import { FaCircleCheck } from "react-icons/fa6";

export default function Hero() {
  return (
    <div className="h-full bg-[#f2f3fc] rounded-md w-11/12 mx-auto">
      <div className="max-w-7xl mx-auto py-5 lg:py-14">
        {/* header */}
        <header className="flex lg:flex-row flex-col gap-[50px]  lg:gap-10 items-center">
          <div className="w-full lg:w-[50%] space-y-5">
            <h1 className="text-[40px] dark:text-[#abc2d3] sm:text-[60px] font-[600] leading-[45px] sm:leading-[70px]">
              World Best College Booking Platform{" "}
              <span className="text-[#0f82fc]">EduGang.</span>
            </h1>
            <p className="text-[18px] text-gray-700 dark:text-slate-400 mt-2">
              Through a combination of lectures, readings, and discussions,
              students will gain a solid foundation in educational psychology.
            </p>
            <div className="relative my-5">
              <input
                placeholder="Search here"
                className="py-3 px-4 dark:text-[#abc2d3] bg-white dark:placeholder:text-slate-500 dark:bg-transparent dark:border-slate-700 dark:border w-full outline-none rounded-md"
              />
              <button className="h-full absolute top-0 right-0 bg-[#0f82fc] px-3 text-white text-[1.3rem] rounded-r-md">
                <CiSearch />
              </button>
            </div>

            <div>
              <p>
                Have any questions ?{" "}
                <span className="text-[#0f82fc]">Get Free Example</span>
              </p>
            </div>

            <div
             
              className="grid grid-cols-3 gap-4 mt-6"
            >
              {[
                { value: "98%", label: "Student Satisfaction" },
                { value: "24/7", label: "Support Available" },
                { value: "100+", label: "Colleges" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-3 bg-[#0f82fc] backdrop-blur-sm rounded-lg"
                >
                  <div className="text-2xl md:text-1xl xl:text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs xl:text-sm text-white/80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full sm:w-[50%]">
            <img src="/banner-bg.png" alt="image" className="w-full h-full" />
          </div>
        </header>
      </div>
    </div>
  );
}
