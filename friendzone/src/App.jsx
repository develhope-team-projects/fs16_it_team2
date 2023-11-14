import { Navigate, Route, Routes } from "react-router-dom";
import DefaultLayout from "./defaultLayout/DefaultLayout";
import User from "./pages-sidebar/User";
import Messages from "./pages-sidebar/Messages";
import Settings from "./pages-sidebar/Settings";
import Home from "./pages-sidebar/Home";
import Explore from "./pages-sidebar/Explore";
import Logout from "./pages-sidebar/Logout";
import Matches from "./pages-sidebar/Matches";
import Preferences from "./pages-sidebar/Preferences";
import Premium from "./pages-sidebar/Premium";
import EditProfile from "./pages-sidebar/EditProfile";
import AddMedia from "./pages-sidebar/AddMedia";
import Payment from "./pages-sidebar/Payment";
import PremiumGold from "./pages-sidebar/PremiumGold";
import PremiumPlatinum from "./pages-sidebar/PremiumPlatinum";
import PremiumPlus from "./pages-sidebar/PremiumPlus";

import LandingPage from "../src/components-lp/landing-page/LandingPage";
import AboutUsPage from "../src/components-lp/lp-pages/AboutUsPage";
import Support from "./components-lp/lp-pages/Support";
import Products from "./components-lp/lp-pages/Products";
import DefaultLogin from "./defaultLayout/DefaultLogin";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />} />
        <Route path="defaultLogin" element={<DefaultLogin />} />
        <Route path="home" element={<Home />} />
        <Route path="home" element={<User />} />
        <Route path="messages" element={<Messages />} />
        <Route path="settings" element={<Settings />} />
        <Route path="explore" element={<Explore />} />
        <Route path="logout" element={<Logout />} />
        <Route path="preferences" element={<Preferences />} />
        <Route path="premium" element={<Premium />} />
        <Route path="gold" element={<PremiumGold />} />
        <Route path="platinum" element={<PremiumPlatinum />} />
        <Route path="plus" element={<PremiumPlus />} />
        <Route path="matches" element={<Matches />} />
        <Route path="editprofile" element={<EditProfile />} />
        <Route path="addmedia" element={<AddMedia />} />
        <Route path="payment" element={<Payment />} />

        <Route path="" element={<LandingPage />} />
        <Route
          path="about-us"
          element={<AboutUsPage />}
          // Render condizionale per gestire il redirect
          render={({ location }) => {
            if (location.pathname === "/") {
              return <AboutUsPage />;
            } else {
              return <Navigate to="/" />;
            }
          }}
        />
        <Route
          path="products"
          element={<Products />}
          // Render condizionale per gestire il redirect
          render={({ location }) => {
            if (location.pathname === "/") {
              return <Products />;
            } else {
              return <Navigate to="/" />;
            }
          }}
        />
        <Route
          path="support"
          element={<Support />}
          // Render condizionale per gestire il redirect
          render={({ location }) => {
            if (location.pathname === "/") {
              return <Support />;
            } else {
              return <Navigate to="/" />;
            }
          }}
        />
      </Routes>
    </>
  );
};

export default App;
