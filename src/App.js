import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function App() {
  
  const sectionsRef = useRef([]);

  useGSAP(() => 
  {
    sectionsRef.current.forEach((section, index) => {
      gsap.from(section, {
        y: 200,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 90%",
          end: "top 0%",
          scrub : 2,
        },
      });
    });
  })

  return (
    <>
      <Navbar />
      <div ref={(el) => (sectionsRef.current[0] = el)}>
        <Header />
      </div>
      <div ref={(el) => (sectionsRef.current[1] = el)}>
        <About />
      </div>
      <div ref={(el) => (sectionsRef.current[2] = el)}>
        <Services />
      </div>
      <div ref={(el) => (sectionsRef.current[3] = el)}>
        <Skills />
      </div>
      <div ref={(el) => (sectionsRef.current[4] = el)}>
        <Projects />
      </div>
      <div ref={(el) => (sectionsRef.current[5] = el)}>
        <Contact />
      </div>
      <div ref={(el) => (sectionsRef.current[6] = el)}>
        <Footer />
      </div>

    </>
  );
}

export default App;
