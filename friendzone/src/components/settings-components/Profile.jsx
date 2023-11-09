import React from "react";
import Passions from "./SelectSettings/Passions";
import Zodiac from "./SelectSettings/Zodiac";
import EducationLevel from "./SelectSettings/EducationLevel";
import CommunicationStyle from "./SelectSettings/CommunicationStyle";
import PersonalityType from "./SelectSettings/PersonalityType";
import Pets from "./SelectSettings/Pets"
import DrinkingHabits from "./SelectSettings/DrinkingHabits";
import WorkingOut from "./SelectSettings/WorkingOut";
import DietaryPreferences from"./SelectSettings/DietaryPreferences";
import SocialMedia from "./SelectSettings/SocialMedia";
import SleepingHabits from "./SelectSettings/SleepingHabits";


const Profile = () => {
  return (
    <div>
      <Passions />
      <Zodiac />
      <EducationLevel />
      <CommunicationStyle />
      <PersonalityType />
      <Pets />
      <DrinkingHabits /> 
      <WorkingOut />
      <DietaryPreferences />
      <SocialMedia />
      <SleepingHabits />


    </div>
  );
};

export default Profile;
