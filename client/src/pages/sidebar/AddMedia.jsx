import React, { useState, useEffect } from "react";

const AddMedia = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  // Load images from localStorage on component mount
  useEffect(() => {
    const storedImages = JSON.parse(localStorage.getItem("images")) || [];
    setImages(storedImages);
  }, []); // Only run on component mount

  // Save images to localStorage whenever images change
  useEffect(() => {
    localStorage.setItem("images", JSON.stringify(images));
  }, [images]);

  const handleImageChange = (e) => {
    const files = e.target.files;

    // Convert files to an array of URLs
    const imageArray = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );

    setImages((prevImages) => [...prevImages, ...imageArray]);
  };

  const openModal = (index) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleNext = () => {
    setSelectedImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setSelectedImage(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleCancel = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
    setSelectedImage(null); // Close modal if the image being canceled is open
  };

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        multiple
        className="mb-4"
      />

      <div className="flex flex-wrap -mx-2">
        {images.map((image, index) => (
          <div key={index} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-2">
            <div className="relative">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="cursor-pointer w-160 h-200 object-cover rounded"
                onClick={() => openModal(index)}
              />
              <button
                className="absolute top-2 right-2 text-white cursor-pointer bg-gray-800 rounded-full hover:bg-purple-600"
                onClick={() => handleCancel(index)}
              >
                &times;
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="fixed inset-0 bg-transparent  opacity-50"
            onClick={closeModal}
          ></div>
          <div className="relative max-h-70vh mx-auto">
            <button
              className="absolute top-1/2 left-4 text-white cursor-pointer  rounded-full p-2 hover:bg-purple-600"
              onClick={handlePrev}
            >
              &lt;
            </button>
            <button
              className="absolute top-1/2 right-4 text-white cursor-pointer rounded-full p-2 hover:bg-purple-600"
              onClick={handleNext}
            >
              &gt;
            </button>
            <button
              className="absolute top-0 right-0 m-4 text-white cursor-pointer bg-gray-800 rounded-full p-2 hover:bg-purple-600"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={images[selectedImage]}
              alt={`Image ${selectedImage + 1}`}
              className="max-w-full max-h-70vh"
              style={{ maxHeight: "800px" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AddMedia;
