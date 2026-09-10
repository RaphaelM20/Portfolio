import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import ResumePage from "./pages/ResumePage";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
