import DefaultLayout from "./defaultLayout/DefaultLayout";
import User from "./pages-sidebar/User";
import Messages from "./pages-sidebar/Messages";
import Settings from "./pages-sidebar/Settings";
import { Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="" element={<Home />} />
          <Route path="" element={<User />} />
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
        </Route>
      </Routes>

      {/* <div className="min-h-screen flex flex-col items-center transition duration-200 dark:bg-gray-900 p-10"> */}

      {/* <Switcher /> */}
    </>
  );
}

export default App;
