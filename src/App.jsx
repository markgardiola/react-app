import { Routes, Route } from "react-router-dom";
import "./app.css";
import AboutPage from "./components/AboutPage";
import NavBar from "./components/NavBar";
import SignIn from "./components/SignIn";
import Carousel from "./components/Carousel";
import ExploreResorts from "./components/ExploreResorts";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Carousel />} />
      </Routes>
      <div className="contiainer d-flex justify-content-center">
        <Routes>
          <Route path="about" element={<AboutPage />} />
          <Route path="exploreResorts" element={<ExploreResorts />} />
          <Route path="signIn" element={<SignIn />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
