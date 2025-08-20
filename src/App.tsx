import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { FaWhatsapp } from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
      <div className="fixed right-[24px] bottom-5">
        <a href="https://wa.me/+2349039115985">
          <FaWhatsapp className="text-5xl bg-green-700 text-white rounded-full p-1" />
        </a>
      </div>
    </div>
  );
}

export default App;
