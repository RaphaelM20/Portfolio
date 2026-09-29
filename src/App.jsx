import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import ResumePage from "./pages/ResumePage";

// A plain #main href would be read by HashRouter as a route, so focus manually.
function skipToContent(event) {
  event.preventDefault();
  const main = document.getElementById("main");
  main?.focus();
  main?.scrollIntoView();
}

function App() {
  return (
    <HashRouter>
      <a className="skip-link" href="#main" onClick={skipToContent}>
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}

export default App;
