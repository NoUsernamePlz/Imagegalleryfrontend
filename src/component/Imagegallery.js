import React from "react";
import { imageDetails } from "../data";

const ImageGallery = ({ handleImageClick, selectedImage }) => {
  return (
    <div className="flex flex-col h-[100vh]  bg-black ">
      <div className="text-sm font-thin text-white pt-1 px-[1vw]">
        Showing 20 photos
      </div>
      <div className="w-[100vw] lg:w-[75vw] h-[65vh] px-[1vw] py-[2vw]">
        {selectedImage && (
          <img
            src={`http://localhost:3000/api/${selectedImage}`}
            alt={selectedImage}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <div className="w-[100vw] lg:w-[75vw] h-[25vh]  overflow-x-auto bg-[#262626] ">
        <div className="flex w-[100vw] lg:w-[75vw] h-[18vh]">
          <div className="flex">
            {imageDetails.map((image, index) => (
              <div
                key={index}
                onClick={() => handleImageClick(image.image, image.name)}
                className="w-[15vw] h-[100%] cursor-pointer relative"
              >
                {selectedImage === image.image ? (
                  <div className="absolute text-white font-thin text-[13px] w-full top-0">
                    {image.name}
                  </div>
                ) : (
                  ""
                )}
                <img
                  src={`http://localhost:3000/api/${image.image}`}
                  alt={image.name}
                  className={`w-full h-full object-cover p-2 border-1 mt-[2vw] ${
                    selectedImage === image.image
                      ? "border-4 border-blue-500"
                      : "low-contrast"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
