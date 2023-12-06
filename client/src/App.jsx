import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/landingPages/Login";
import Register from "./pages/landingPages/SignUp";
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

// Luigi
import { ChatContextProvider } from "./context/ChatContext";
import { AuthContext } from "./context/AuthContext";

// Luigi temp
// import Login from "./pages/chat/temp/Login";
// import Register from "./pages/chat/temp/Register";

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <ChatContextProvider user={user}>
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route
          path="/login"
          element={user?._id ? <DefaultLayout /> : <Login />}
        />
        <Route
          path="/signup"
          element={user?._id ? <DefaultLayout /> : <Register />}
        />
        {/* <Route path="/signup" element={<SignUp />} /> */}
        <Route
          path="/"
          element={user?._id ? <DefaultLayout /> : <LandingPage />}
        />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/support" element={<Support />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/app/*"
          element={user ? <DefaultLayout /> : <LandingPage />} // protected route if the user is null
        >
          <Route path="" element={<Home />} />
          <Route path="messages" element={<Messages />} />
          <Route path="settings" element={<Settings />} />
          <Route path="" element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="logout" element={<Logout />} />
          <Route path="matches" element={<Matches />} />
          <Route path="preferences" element={<Preferences />} />
          <Route path="premium" element={<Premium />} />
          <Route path="editprofile" element={<EditProfile />} />
          <Route path="addmedia" element={<AddMedia />} />
          <Route path="payment" element={<Payment />} />
          <Route path="gold" element={<PremiumGold />} />
          <Route path="platinum" element={<PremiumPlatinum />} />
          <Route path="plus" element={<PremiumPlus />} />
        </Route>
      </Routes>
    </ChatContextProvider>
  );
};

export default App;
