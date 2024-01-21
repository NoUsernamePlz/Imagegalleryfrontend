import React, { useState, useEffect } from "react";
import axios from "axios";
import { imageDetails } from "../data";

const ImageList = () => {
  const [metadata, setMetadata] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageClick = (imageName, imageUrl) => {
    axios
      .get("/metadata", { params: { image: imageUrl } })
      .then((response) => {
        setMetadata(response.data.metadata);
        console.log(response.data.metadata);
        setSelectedImage(imageName);
      })
      .catch((error) => {
        console.error("Error occured while fetching metadata:", error);
      });
  };

  useEffect(() => {
    handleImageClick("1705761736151.jpg", "IMG_0062.CR3");
  }, []);

  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-[100vh] w-[100vw]">
      {/* //image gallery :)*/}
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

      {/* //Details about the image :)*/}

      <div className="w-[100vw] lg:w-[25vw] h-[100vh] overflow-y-auto  bg-[#2E2E2E]">
        {metadata && (
          <div className="h-[80vh] flex flex-col p-4 ">
            <div className=" text-white text-lg font-bold my-[4vh] pl-4 ">
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
    </div>
  );
};

export default ImageList;
