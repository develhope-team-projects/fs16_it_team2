import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from "./pages/landingPages/Login";
import SignUp from "./pages/landingPages/SignUp";
import LandingPage from "../src/components/landingPage/LandingPage";
import AboutUsPage from "../src/pages/landingPages/AboutUsPage";
import Support from "../src/pages/landingPages/Support";
import Products from "../src/pages/landingPages/Products";
import DefaultLayout from "./defaultLayout/DefaultLayout";
import User from "./pages/sidebar/User";
import Messages from "./pages/sidebar/Messages";
import Settings from "./pages/sidebar/Settings";
import Home from "./pages/sidebar/Home";
import Explore from "./pages/sidebar/Explore";
import Logout from "./pages/sidebar/Logout";
import Matches from "./pages/sidebar/Matches";
import Preferences from "./pages/sidebar/Preferences";
import Premium from "./pages/sidebar/Premium";
import EditProfile from "./pages/sidebar/EditProfile";
import AddMedia from "./pages/sidebar/AddMedia";
import Payment from "./pages/sidebar/Payment";
import PremiumGold from "./pages/sidebar/PremiumGold";
import PremiumPlatinum from "./pages/sidebar/PremiumPlatinum";
import PremiumPlus from "./pages/sidebar/PremiumPlus";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <Routes>
      <Route path="/login" element={isLoggedIn ? <Navigate to="/app" /> : <Login />} />
      <Route path="/signup" element={isLoggedIn ? <Navigate to="/app" /> : <SignUp />} />
      <Route path="/" element={isLoggedIn ? <Navigate to="/app" /> : <LandingPage />} />
      <Route path="/about-us" element={isLoggedIn ? <Navigate to="/app" /> : <AboutUsPage />} />
      <Route path="/support" element={isLoggedIn ? <Navigate to="/app" /> : <Support />} />
      <Route path="/products" element={isLoggedIn ? <Navigate to="/app" /> : <Products />} />
      <Route path="/app/*" element={isLoggedIn ? <DefaultLayout /> : <Navigate to="/login" replace />} >
        <Route path="user" element={<User />} />
        <Route path="messages" element={<Messages />} />
        <Route path="settings" element={<Settings />} />
        <Route path="home" element={<Home />} />
        <Route path="explore" element={<Explore />} />
        <Route path="logout" element={<Logout />} />
        <Route path="matches" element={<Matches />} />
        <Route path="preferences" element={<Preferences />} />
        <Route path="premium" element={<Premium />} />
        <Route path="editprofile" element={<EditProfile />} />
        <Route path="addmedia" element={<AddMedia />} />
        <Route path="payment" element={<Payment />} />
        <Route path="premiumgold" element={<PremiumGold />} />
        <Route path="premiumplatinum" element={<PremiumPlatinum />} />
        <Route path="premiumplus" element={<PremiumPlus />} />
      </Route>

    </Routes>
  );
};

export default App;
