import React, { useState } from "react";
import icecream from "../../assets/images/icecreams/Designer2.png"

const Billing = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: {
      city: "",
      street: "",
      building: "",
      zipCode: "",
    },
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handling nested fields for address
    if (name.startsWith("address.")) {
      const addressField = name.split(".")[1];
      setFormData((prevData) => ({
        ...prevData,
        address: {
          ...prevData.address,
          [addressField]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission logic (e.g., send data to the server)
    console.log("Billing Info submitted:", formData);
    // Add additional logic for handling the data (e.g., sending to a server)
  };

  return (
    <div className="sm:flex-row flex justify-between gap-4 flex-col">
      <div className="w-full p-2 mt-8">
      <form onSubmit={handleSubmit} >
        <div className="flex justify-between gap-5">
          <div className="mb-4 max-w-52 ">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-400"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:border-purple-500 dark:bg-gray-800 dark:text-gray-200"
            />
          </div>
          <div className="mb-4 max-w-52">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-400"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:border-purple-500 dark:bg-gray-800 dark:text-gray-200"
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-400"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:border-purple-500 dark:bg-gray-800 dark:text-gray-200"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-400"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:border-purple-500 dark:bg-gray-800 dark:text-gray-200"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="address.city"
            className="block text-sm font-medium text-gray-400"
          >
            City
          </label>
          <input
            type="text"
            id="address.city"
            name="address.city"
            value={formData.address.city}
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:border-purple-500 dark:bg-gray-800 dark:text-gray-200"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="address.street"
            className="block text-sm font-medium text-gray-400"
          >
            Street
          </label>
          <input
            type="text"
            id="address.street"
            name="address.street"
            value={formData.address.street}
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:border-purple-500 dark:bg-gray-800 dark:text-gray-200"
          />
        </div>
        <div className="flex justify-between gap-5">
          {" "}
          <div className="mb-4 max-w-52">
            <label
              htmlFor="address.building"
              className="block text-sm font-medium text-gray-400"
            >
              Building
            </label>
            <input
              type="text"
              id="address.building"
              name="address.building"
              value={formData.address.building}
              onChange={handleChange}
              required
              className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:border-purple-500 dark:bg-gray-800 dark:text-gray-200"
            />
          </div>
          <div className="mb-4 max-w-52">
            <label
              htmlFor="address.zipCode"
              className="block text-sm font-medium text-gray-400"
            >
              Zip Code
            </label>
            <input
              type="text"
              id="address.zipCode"
              name="address.zipCode"
              value={formData.address.zipCode}
              onChange={handleChange}
              required
              className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:border-purple-500 dark:bg-gray-800 dark:text-gray-200"
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="cardNumber"
            className="block text-sm font-medium text-gray-400"
          >
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:border-purple-500 dark:bg-gray-800 dark:text-gray-200"
          />
        </div>
        <div className="flex justify-between mb-4 space-x-4">
          <div className="max-w-52">
            <label
              htmlFor="expirationDate"
              className="block text-sm font-medium text-gray-400"
            >
              Expiration Date
            </label>
            <input
              type="text"
              id="expirationDate"
              name="expirationDate"
              value={formData.expirationDate}
              onChange={handleChange}
              required
              className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:border-purple-500 dark:bg-gray-800 dark:text-gray-200"
            />
          </div>
          <div className="max-w-52">
            <label
              htmlFor="cvv"
              className="block text-sm font-medium text-gray-400"
            >
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              required
              className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:border-purple-500 dark:bg-gray-800 dark:text-gray-200"
            />
          </div>
        </div>
        <button
          type="submit"
          className="p-2 text-white bg-purple-500 rounded-md hover:bg-purple-700 focus:outline-none focus:border-purple-700"
        >
          Submit
        </button>
      </form>
      </div>
      <div className="relative flex items-center justify-center w-full">
        <img src={icecream} className="p-4 w-96 custom-bounce" />
        <span className=" circle-1"></span>
        <span className="content__badges_circle circle-2"></span>
        <span className="content__badges_circle circle-3"></span>
        <span className="content__badges_circle circle-4"></span>
        <span className="content__badges_circle circle-5"></span>
        <span className="content__badges_circle circle-6"></span>
        <span className="content__badges_circle circle-7"></span>
        <span className="content__badges_circle circle-8"></span>
        <span className="content__badges_circle circle-9"></span>
        <span className="content__badges_circle circle-10"></span>
        <span className="content__badges_circle circle-11"></span>
        <span className="content__badges_circle circle-12"></span>
        <span className="content__badges_circle circle-13"></span>
        <span className="content__badges_circle circle-14"></span>
        <span className="content__badges_circle circle-15"></span>
        <span className="circle-16"></span>
        <span className="circle-17"></span>
        <span className="circle-18"></span>
        <span className="circle-19"></span>
      </div>
    </div>
  );
};

export default Billing;
