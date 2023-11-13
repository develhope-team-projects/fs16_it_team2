import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "../src/components-lp/LandingPage";
import AboutUsPage from "./components-lp/lp-pages/AboutUsPage";
import Support from "./components-lp/lp-pages/Support";
import Products from "./components-lp/lp-pages/Products";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/about-us"
          element={<AboutUsPage />}
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
