import React from "react";
import AddMedia from "./AddMedia";
import Profile from "../../components/settings/Profile";

const EditProfile = () => {
  return (
    <div className=" mx-auto">
      <div className="w-full custom-box-shadow">
        <AddMedia />
      </div>

      <div className="w-full custom-box-shadow">
        {" "}
        <Profile />
      </div>
    </div>
  );
};

export default EditProfile;
