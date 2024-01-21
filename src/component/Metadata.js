import React from "react";

const Metadata = ({ metadata }) => {
  return (
    <div className="w-[100vw] lg:w-[25vw] h-[100vh] overflow-y-auto  bg-[#2E2E2E]">
      {metadata && (
        <div className="h-[80vh] flex flex-col p-4 ">
          <div className=" text-white text-lg font-medium my-[4vh] pl-4 ">
            About Image
          </div>
          {metadata &&
            metadata.map((tag, index) => {
              const key = Object.keys(tag)[0];

              return (
                <div className="flex pl-4 py-1 text-white " key={index}>
                  <div className="w-1/3 font-medium">{key}</div>
                  <div className="w-2/3 ">{tag[key]}</div>
                </div>
              );
            })}
        </div>
      )}
      <div className="flex items-center justify-center h-[15vh] bg-[#444444] w-full">
        <button className="w-[80%] h-[5vh] p-2  rounded-md bg-green-700 text-white text-left font-semibold">
          Download
        </button>
      </div>
    </div>
  );
};

export default Metadata;
