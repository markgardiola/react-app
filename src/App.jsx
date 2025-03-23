import { Routes, Route } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import NavBar from "./components/NavBar";
import SignIn from "./components/SignIn";
import LandingPage from "./components/LandingPage";
import ExploreResorts from "./components/ExploreResorts";
import ChatWithSandyAI from "./components/ChatWithSandyAI";

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="contiainer d-flex justify-content-center">
        <Routes>
          <Route path="react-app/" element={<LandingPage />} />
          <Route path="react-app/about" element={<AboutPage />} />
          <Route path="react-app/exploreResorts" element={<ExploreResorts />} />
          <Route
            path="react-app/chatWithSandyAI"
            element={<ChatWithSandyAI />}
          />
          <Route path="react-app/signIn" element={<SignIn />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
