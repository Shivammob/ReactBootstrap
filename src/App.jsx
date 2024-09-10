import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/header/Nav";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Footer from "./components/footer/Footer";
import Technology from "./components/Technology";
import Solutions from "./components/Solutions";
import Contact from "./components/Contact";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import Cookie from "./components/Cookie";
import ScrollToTop from "./components/Scrolltotop";

function App() {
  return (
    <>
      <Router>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/terms-of-use" element={<Terms/>} />
          <Route path="/privacy-policy" element={<Privacy/>} />
          <Route path="/cookie-policy" element={<Cookie/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
