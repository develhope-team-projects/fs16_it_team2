import React, { useState } from "react";
import SelectionList from "./SelectionList";

const SocialMedia = () => {
  const [selectedSocialMedia, setSelectedSocialMedia] = useState([]);
  const socialMediaPlatforms = [
    "Facebook",
    "Twitter",
    "Instagram",
    "LinkedIn",
    "Snapchat",
    "TikTok",
    "Pinterest",
  ];

  return (
    <SelectionList
      title="Social Media"
      items={socialMediaPlatforms}
      selectedItems={selectedSocialMedia}
      onItemChange={setSelectedSocialMedia}
    />
  );
};

export default SocialMedia;
