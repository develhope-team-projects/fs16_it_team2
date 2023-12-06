import React, { useState, useEffect } from "react";
import SidebarHamburger from "../components/sidebar/SidebarHamburger";
import NavbarSm from "../components/navbarSm/NavbarSm"; // Import your NavbarSm component

const DefaultLayout = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 620);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 620);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {isSmallScreen ? (
        <NavbarSm /> // Render NavbarSm for small screens
      ) : (
        <SidebarHamburger />
      )}
    </div>
  );
};

export default DefaultLayout;
