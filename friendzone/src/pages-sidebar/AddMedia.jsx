import React, { useState, useEffect, useRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const ImageUploader = () => {
  const [profilePicture, setProfilePicture] = useState("");
  const [additionalPictures, setAdditionalPictures] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const cropperRef = useRef(null);

  useEffect(() => {
    const savedProfilePicture = localStorage.getItem("profilePicture") || "";
    const savedAdditionalPictures =
      JSON.parse(localStorage.getItem("additionalPictures")) || [];

    setProfilePicture(savedProfilePicture);
    setAdditionalPictures(savedAdditionalPictures);
  }, []);

  useEffect(() => {
    localStorage.setItem("profilePicture", profilePicture);
    localStorage.setItem(
      "additionalPictures",
      JSON.stringify(additionalPictures)
    );
  }, [profilePicture, additionalPictures]);

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAdditionalPicturesChange = (e) => {
    const files = e.target.files;
    const newPictures = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setAdditionalPictures((prevPictures) => [...prevPictures, ...newPictures]);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  const handleCrop = () => {
    if (cropperRef.current) {
      // Get the cropped data as a base64 encoded string
      const croppedDataUrl = cropperRef.current.getCroppedCanvas().toDataURL();
      setProfilePicture(croppedDataUrl);
      setSelectedImage(null); // Clear selected image
    }
  };
  

  const handleCancel = () => {
    setProfilePicture("");
    setAdditionalPictures([]);
    setSelectedImage(null);
  };

  return (
    <div className="dark:bg-black text-gray-900 p-6">
      <h2 className="text-2xl font-semibold mb-4">Image Uploader</h2>

      {/* Profile Picture */}
      <div className="mb-4">
        <label htmlFor="profilePicture" className="block text-sm font-medium">
          Profile Picture:
        </label>
        <input
          type="file"
          id="profilePicture"
          accept="image/*"
          onChange={handleProfilePictureChange}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-purple-500"
        />
        {profilePicture && (
          <div className="relative">
            <Cropper
              ref={cropperRef}
              src={profilePicture}
              style={{ height: 200, width: "100%" }}
              // Other cropper options as needed
            />
            <button
              onClick={handleCrop}
              className="absolute bottom-2 right-2 bg-purple-500 text-white px-2 py-1 rounded-md"
            >
              Crop
            </button>
          </div>
        )}
      </div>

      {/* Additional Pictures */}
      <div className="mb-4">
        <label
          htmlFor="additionalPictures"
          className="block text-sm font-medium"
        >
          Additional Pictures (up to 9):
        </label>
        <input
          type="file"
          id="additionalPictures"
          accept="image/*"
          multiple
          onChange={handleAdditionalPicturesChange}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-purple-500"
        />
        <div className="grid grid-cols-3 gap-4 mt-2">
          {additionalPictures.map((picture, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onClick={() => handleImageClick(picture)}
            >
              <img
                src={picture}
                alt={`Additional ${index + 1}`}
                className="rounded-md shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Selected Image Preview */}
      {selectedImage && (
        <div className="mb-4">
          <p className="text-sm font-medium">Selected Image Preview:</p>
          <img
            src={selectedImage}
            alt="Selected"
            className="mt-2 rounded-md shadow-lg"
          />
        </div>
      )}

      {/* Cancel Button */}
      <button
        onClick={handleCancel}
        className="bg-red-500 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-red-600"
      >
        Cancel
      </button>
    </div>
  );
};

export default ImageUploader;
