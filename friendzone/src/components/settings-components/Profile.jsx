import React from "react";
import Passions from "./SelectSettings/Passions";
import Zodiac from "./SelectSettings/Zodiac";
import EducationLevel from "./SelectSettings/EducationLevel";
import CommunicationStyle from "./SelectSettings/CommunicationStyle";
import PersonalityType from "./SelectSettings/PersonalityType";
import Pets from "./SelectSettings/Pets";
import DrinkingHabits from "./SelectSettings/DrinkingHabits";
import WorkingOut from "./SelectSettings/WorkingOut";
import DietaryPreferences from "./SelectSettings/DietaryPreferences";
import SocialMedia from "./SelectSettings/SocialMedia";
import SleepingHabits from "./SelectSettings/SleepingHabits";

const Profile = () => {
  return (
    <div className="dark:bg-black gray-text  p-6">
      <div className="flex flex-col ">
        <Passions />
        <hr className="mt-5 " />
        <Zodiac />
        <EducationLevel />
        <CommunicationStyle />
        <PersonalityType />
        <hr className="mt-5 " />
        <Pets />
        <DrinkingHabits />
        <WorkingOut />
        <hr className="mt-5 " />
        <DietaryPreferences />
        <SocialMedia />
        <SleepingHabits />
      </div>
    </div>
  );
};

export default Profile;
