import "./App.css";

import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Gallery from "./components/photoGallery/Gallery";
import Contact from "./components/contact/Contact";


function App() {
  return (
    <>
      <div className="app">
        <Sidebar />
        <main className="main">
          <Home />
          <About />
          <Services />
          <Resume />
          <Portfolio />
          <Testimonials />
          <Gallery />
          <Contact />
        </main>
        <footer>
          <p>
            &copy; 2024 Vasu Chanchapara. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}


export default App;