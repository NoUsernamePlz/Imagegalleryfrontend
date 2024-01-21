import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import ImageGallery from "./component/Imagegallery";
import Metadata from "./component/Metadata";
import axios from "axios";

const App = () => {
  const [metadata, setMetadata] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageName, imageUrl) => {
    axios
      .get(`${process.env.REACT_APP_APIROUTE}/metadata`, { params: { image: imageUrl } })
      .then((response) => {
        setMetadata(response.data.metadata);
        console.log(response.data.metadata);
        setSelectedImage(imageName);
      })
      .catch((error) => {
        console.error("Error occurred while fetching metadata:", error);
      });
  };

  useEffect(() => {
    handleImageClick("1705761736151.jpg", "IMG_0062.CR3");
  }, []);

  return (
    <div className=" h-auto lg:h-screen bg-black  overflow-hidden">
      <Navbar />
      <div className="flex flex-col lg:flex-row h-auto lg:h-[100vh] w-[100vw]">
        <ImageGallery
          handleImageClick={handleImageClick}
          selectedImage={selectedImage}
        />
        <Metadata metadata={metadata} />
      </div>
    </div>
  );
};

export default App;
