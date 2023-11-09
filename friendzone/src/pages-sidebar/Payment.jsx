import React, { useState } from "react";

const Payment = () => {
  const [cardInfo, setCardInfo] = useState({
    cardHolder: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardInfo({
      ...cardInfo,
      [name]: value,
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 flex min-h-screen">
      <div className="w-full  mx-auto p-8">
        <div className="bg-white rounded-lg shadow-lg border-2 w-4/5  mx-auto flex items-center justify-around">
          <div className="flex intems-center  p-6 ">
            <div className="  flex  items-center">
              <div className="flex">
                <div className="w-96 h-56  bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
                  <img
                    className="relative object-cover w-full h-full rounded-xl"
                    src="https://i.imgur.com/kGkSg1v.png"
                  />

                  <div className="w-full px-8 absolute top-8">
                    <div className="flex justify-between">
                      <div className="">
                        <p className="font-light">Name</p>
                        <p className="font-medium tracking-widest">Karthik P</p>
                      </div>
                      <img
                        className="w-14 h-14"
                        src="https://i.imgur.com/bbPHJVe.png"
                      />
                    </div>
                    <div className="pt-1">
                      <p className="font-light">Card Number</p>
                      <p className="font-medium tracking-more-wider">
                        4642 3489 9867 7632
                      </p>
                    </div>
                    <div className="pt-6 pr-6">
                      <div className="flex justify-between">
                        <div className="">
                          <p className="font-light text-xs">Valid</p>
                          <p className="font-medium tracking-wider text-sm">
                            11/15
                          </p>
                        </div>
                        <div className="">
                          <p className="font-light  text-xs">Expiry</p>
                          <p className="font-medium tracking-wider text-sm">
                            03/25
                          </p>
                        </div>

                        <div className="">
                          <p className="font-light text-xs">CVV</p>
                          <p className="font-bold tracking-more-wider text-sm">
                            ···
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 ">
            <h2 className="text-lg font-medium mb-6">Payment Information</h2>
            <form>
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="card-number"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Card Number
                  </label>
                  <input
                    type="text"
                    name="card-number"
                    id="card-number"
                    placeholder="0000 0000 0000 0000"
                    className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="expiration-date"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Expiration Date
                  </label>
                  <input
                    type="text"
                    name="expiration-date"
                    id="expiration-date"
                    placeholder="MM / YY"
                    className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>{" "}
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="card-holder"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Card Holder
                  </label>
                  <input
                    value={cardInfo.cardHolder}
                    onChange={handleChange}
                    type="text"
                    name="card-holder"
                    id="card-holder"
                    placeholder="Full Name"
                    className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="cvv"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    CVV
                  </label>
                  <input
                    type="text"
                    name="cvv"
                    id="cvv"
                    placeholder="000"
                    className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg focus:outline-none"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
