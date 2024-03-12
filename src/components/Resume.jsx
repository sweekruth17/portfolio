import React from "react";

const Resume = () => {
  return (
    <>
      <div className="">
        <div className=" flex text-2xl lg:text-5xl font-medium">
          Resume
          <span className="w-[200px] h-1 bg-gradient-to-r from-red-500 to-violet-700 my-auto ml-7"></span>
        </div>
        <div className="mt-5 ">
          <iframe
            src="sweekruth.pdf"
            title="sweekruth resume"
            width="100%"
            height="900px"
            className=""
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};

export default Resume;
