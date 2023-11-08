import { Route, Routes } from "react-router-dom";
import LandingPage from "../src/components-lp/LandingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
