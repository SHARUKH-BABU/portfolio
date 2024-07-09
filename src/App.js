import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <>
        <Navbar />
        <Header />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </>
  );
}

export default App;
