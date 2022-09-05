import "./App.css";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home.js";
import About from "./components/pages/About.js";
import Experience from "./components/pages/Experience.js";
import Projects from "./components/pages/Projects.js";
import Contact from "./components/pages/Contact.js";
import NotFound from "./components/pages/NotFound.js";
import TopScroll from "./components/TopScroll.js";

function App() {
  return (
    <>
      <Router>
        <TopScroll />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
