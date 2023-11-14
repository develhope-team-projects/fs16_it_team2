import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "../src/components-lp/landing-page/LandingPage";
import AboutUsPage from "../src/components-lp/lp-pages/AboutUsPage";
import Support from "./components-lp/lp-pages/Support";
import Products from "./components-lp/lp-pages/Products";

const App = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/login" element={<DefaultLayout />}>
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
        </Route> */}
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/about-us"
          element={<AboutUsPage />}
          // Render condizionale per gestire il redirect
          render={({ location }) => {
            if (location.pathname === '/') {
              return <AboutUsPage />;
            } else {
              return <Navigate to="/" />;
            }
          }}
        />
        <Route
          path="/products"
          element={<Products />}
          // Render condizionale per gestire il redirect
          render={({ location }) => {
            if (location.pathname === '/') {
              return <Products />;
            } else {
              return <Navigate to="/" />;
            }
          }}
        />
        <Route
          path="/support"
          element={<Support />}
          // Render condizionale per gestire il redirect
          render={({ location }) => {
            if (location.pathname === '/') {
              return <Support />;
            } else {
              return <Navigate to="/" />;
            }
          }}
        />
      </Routes>
    </>
  );
}

export default App;
