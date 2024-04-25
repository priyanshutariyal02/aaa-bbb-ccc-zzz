import Navbar from "./components/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import logo from "../public/logo.png"
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer";
import Booking from "./pages/Booking";
import Proceed from "./pages/Proceed";
function App(props) {
  return (
    <main className="main-cintainer bg-slate-300/20">
      <Router>
        <Navbar logo={logo} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
          <Route path="/proceed" element={<Proceed />} />
        </Routes>
      </Router>
      <Footer />
    </main>
  );
}

export default App;
